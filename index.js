const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('connected to the mongo db'))
    .catch(() => console.log("Error connecting to the db"));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean

})
const Course = mongoose.model('Course',courseSchema);
async function createCourse(){
const course = new Course ({
    name : 'react.js',
    author : "Meet Mehta",
    tags : ["react.js","mongoDB","Express",'node.js'],
    isPublished : true
})
const result = await course.save()
console.log(result);
}

async function getCouse(){
    const courses = await Course.find({})
    .limit(3)
    .sort({name : -1})
    console.log(courses);
}
getCouse();