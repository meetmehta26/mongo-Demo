const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/mongo-exercises')
.then(()=>{console.log("Connected successfuly");})
.catch(()=>{console.log('caught some error');})



const CourseSchema = new mongoose.Schema({
name : String,
author : String,
tags :[String],
isPublished : Boolean,
price : Number
});

const Course = mongoose.model('Course',CourseSchema)

async function getData(){
    const result = await Course.find({isPublished : true ,tags : 'backend'})
    .select({name:1,author:1, _id:0})
    .sort({name  : 1})
    console.log(result);
}
getData();