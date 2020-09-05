const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises',{ useNewUrlParser: true })
    .then(() => { console.log("Connected tpo the data base successfully") })
    .catch(() => { console.log("Error Occured") })


const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    price: Number,
    isPublish: Boolean
})

const Course = mongoose.model('Course', courseSchema);

async function remove1(id){
    console.log("ID",id);
    const result = await Course.deleteOne({_id : id});
    console.log(result);

}

remove1("5a68fdf95db93f6477053ddd");