const mongoose = require ("mongoose")
const studentData = new mongoose.Schema({
    name:{type:String,
    required:[true,"Name is required"]
    },
    userName:{type:String,
    unique:[true,"this username already exist"],
    required:[true,"kindly enter your username"]
},
age:{type:Number,
required:[true,"age is required"]
},
scores:{type:Object,
required:[true,"kindly fill your score" ]
},
isMarried:{type:Boolean},

subject:{type:Array,
required:[true,"kindly fill your subject"]}
},{timestamps:true})

const studentModel = mongoose.model('student',studentData)
module.exports =studentModel