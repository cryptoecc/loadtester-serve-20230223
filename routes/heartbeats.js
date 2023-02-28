var express = require('express');
var router = express.Router();
const db=require('../models')
const LOGGER=console.log
const { enqueue_tx_toclose } = require( '../services/close-transactions') 
const { respok ,  resperr } = require ( '../utils/rest')
const { getip } = require ( '../utils/session' )
const moment = require ('moment')

router.all ( '/stop' , async ( req,res)=>{
	const ipaddress =  getip ( req )
	const curtime = moment()
	const curtimeunix = curtime.unix()
	let respfind =  await db[ 'nodes'].findOne ( {raw: true , where : { ipaddress } } )
	if ( respfind ) {
		await db[ 'nodes' ].update ( {
			lastaliveunix : curtimeunix
			, lastalive : curtime.format ( 'YYYY-MM-DDTHH:mm:ss' )
			, status : 2
//			, cumulcount : 1 + 
		} , { where : { id : respfind . id } } )
		
	} else {
		await db[ 'nodes' ].create ( {
			ipaddress
			, lastaliveunix: curtimeunix
			, lastalive : curtime.format( 'YYYY-MM-DDTHH:mm:ss' )
			, status : 2
		})
	}
	repsok ( res )	
})

router.all( '/' , async (req,res)=>{
	const ipaddress =  getip ( req )
	const curtime = moment()
	const curtimeunix = curtime.unix()
	let respfind =  await db[ 'nodes'].findOne ( {raw: true , where : { ipaddress } } )
	if ( respfind ) {
		await db[ 'nodes' ].update ( { 
				lastaliveunix : curtimeunix 
			, lastalive : curtime.format ( 'YYYY-MM-DDTHH:mm:ss' ) 
			, cumulcount : 1 + respfind.cumulcount
			, status : 1 
		} , {where : { id: respfind.id  } }  )
	} else { 
		await db[ 'nodes' ].create ( { 
			ipaddress 
			, lastaliveunix : curtimeunix
			, lastalive : curtime.format ( 'YYYY-MM-DDTHH:mm:ss' ) 
			, status : 1 
		} ) 
	}
	respok ( res )
} )	
/** txhash     | varchar(80)         | YES  |     | NULL                |                               |
, status     | tinyint(4)          | YES  |     | NULL                |                               |
, txcreator  | varchar(80)         | YES  |     | NULL                |                               |
, txvalue    | varchar(20)         | YES  |     | NULL                |                               |
, txreceiver | varchar(80)         | YES  |     | NULL                |                               |
, timelapse  |
*/
module.exports = router;
