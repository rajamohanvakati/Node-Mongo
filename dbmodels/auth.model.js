import mongoose from 'mongoose';

const schema = mongoose.Schema;


const userAuthSchema = new schema({
    username: String,
    password: String 
  
});

const userauth = mongoose.model('user', userAuthSchema);
module.exports = userauth;
