var mongoose = require ('mongoose'); 
//var bcrypt = require('bcryptjs'); 

var Schema = mongoose.Schema; 

var ProfileSchema = new Schema ({ 
    name : String, 
    bio : String, 
    picture: String, 
    email : String, 
    username : String, 
    password : String   


});

var Profiles = mongoose.model('Profiles', ProfileSchema); 

module.exports = Profiles; 
