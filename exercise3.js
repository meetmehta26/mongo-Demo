const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => { console.log("Connected successfuly"); })
    .catch(() => { console.log('caught some error'); })


let CoursesSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    isPublished: Boolean,
    price: Number

})

let Courses = mongoose.model('Course', CoursesSchema);

async function getData() {
    const result1 = await Courses.find()//{tags:'frontend'}]})
        .or([{ price: { $gte: 15 } }, { name: /.*by/ }])
        .select({ name: 1, author: 1, price: 1, _id: 0 })
        .sort({ price: -1 })
    console.log(result1);

}

getData();