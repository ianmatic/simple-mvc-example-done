const mongoose = require('mongoose'); // mongodb library for nodejs
mongoose.Promise = global.Promise;

let DogModel = {}; // holds model

// Data structure
const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0 
    },
    createdDate: {
        type: Number,
        default: Date.now
    }
});

DogSchema.statics.findByName = (name, callback) => {
    const search = {
        name
    };

    return DogModel.findOne(search, callback); // built in function
}

// create model from schema
DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;