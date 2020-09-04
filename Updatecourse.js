const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then('Connected Succesfully')
    .catch('Error occured while connecting');


const CourseSchema = mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    isPublished: Boolean,
    price: Number
})

const Courses = mongoose.model('Course', CourseSchema);


async function inserToDB() {
    const course = new Courses({
        name: "NodJs",
        author: "Meet Mehta",
        tags: ["NodeJs", "backend", "frontend"],
        isPublished: true,
        price: 15
    })

    const result = await course.save();
    console.log('Result', result);
}
async function UpdateByQuery(id) {
    let response = await Courses.findById(id)
    response.tags = ["high end", "low end"];

    const result = await response.save()
    console.log(result);
}


// UpdateByQuery('5f528ccf53e0d431a8983eff');

async function UpdateDirectly(id) {
    result = await Courses.update({ _id: id }, {
        name: "Angraj",
        authord: "Mehta Meet"
    })

    console.log(result)
}

UpdateDirectly('5f528ccf53e0d431a8983eff');