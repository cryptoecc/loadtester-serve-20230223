var express = require('express');
var router = express.Router();
const db=require('../models')
const LOGGER=console.log
const { respok ,  resperr } = require ('../utils/rest')
const { countrows_scalar } = require('../utils/db' )
router.get( '/rows/:tablename/:fieldname/:fieldval/:offset/:limit/:orderkey/:orderval' , async (req,res)=>{
	let { tablename , fieldname , fieldval , offset , limit , orderkey , orderval } = req.params
	offset = +offset
	limit = +limit
	if ( Number.isFinite ( offset ) ){} else { resperr( res, 'ARG-INVALID'  ) ; return }
	if ( Number.isFinite ( limit) ){} else { resperr( res, 'ARG-INVALID'  ) ; return }
	let jfilter = {}
	if ( fieldname == 'null' ) {		
	} else {
		jfilter [ fieldname ] = fieldval
	}
	const count = await countrows_scalar ({table:tablename, jfilter } )   
	let list = await db[tablename].findAll ( { raw: true
		, where : jfilter
		, offset
		, limit
		, order : [ [orderkey , orderval ]] 
	}	)
	respok ( res , null , null , { list  , count } )
} )	
module.exports = router;
