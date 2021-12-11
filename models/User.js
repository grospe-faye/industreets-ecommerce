const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName : {
		type : String,
		required : [true, "First name is required"]
	},
	lastName : {
		type : String,
		required : [true, "Last name is required"]
	},
	email : {
		type : String,
		required : [true, "Email is required"],
		unique: true
	},
	password : {
		type : String,
		required : [true, "Password is required"]
	},
	role : {
		type : Number,
		default : 0
	},
	mobileNo : {
		type : String, 
		required : [true, "Mobile No is required"]
	},
    cart: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema);
