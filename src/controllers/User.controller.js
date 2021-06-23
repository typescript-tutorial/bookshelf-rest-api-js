const userModel = require('../models/User');

module.exports.All =  async function ( req, res  ){
  try{
    const users =  await new userModel().fetchAll();
    res.status(200).json(users);
  }
  catch(err){
    res.status(500).send(err);
  }
}
module.exports.Load = async ( req, res )=>{
  const {id} = req.params;
  try{
    const user = await userModel.where("id", id).fetch();
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).send(err);
  }
}
module.exports.Insert = async ( req , res  )=>{
  const {id, username, email, phone, dateOfBirth} = req.body;
  try{
    const user = await userModel.forge(
      {
        id, username, email, phone, 
        dateofbirth : dateOfBirth
      })
    .save(null, {method: 'insert'})
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).send(err);
  }  
}
module.exports.Update = async ( req , res  )=>{
  const {id} = req.params;
  const {username, email, phone, dateOfBirth} = req.body;
  try{
    const user = await userModel.where("id", id).save(
      { username, email, phone, 
        dateofbirth : dateOfBirth 
      },
      { patch: true }
    );
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).send(err);
  }
}
module.exports.Delete = async ( req , res )=>{
  const {id} = req.params;
  try{
    const user = await userModel.where("id", id)
    .destroy();
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).send(err);
  }
}