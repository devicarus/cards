const { Schema, model } = require('mongoose'); 
  
const UserSchema = new Schema({    
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["Pending", "Active"],
        default: "Pending"
    }
});
  
module.exports = model("User", UserSchema); 