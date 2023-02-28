
const db=require('../models')
const countrows_scalar = ({table,jfilter})=>{
  return new Promise ((resolve,reject)=>{
    db[table].count({where:{... jfilter} } ).then(resp=>{
      if(resp)  {resolve( resp   )}
      else      {resolve( 0 )    }
    })
  })
} //
module.exports=  {
	countrows_scalar 
}

