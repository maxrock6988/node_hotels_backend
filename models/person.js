const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ["chef", 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    },
    username: {
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true

    }
})

personSchema.pre('save', async function () {
    const person = this;

    if (!person.isModified('password')) {
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(person.password, salt);

    person.password = hashedPassword;
});



personSchema.methods.comparepassword = async function(candidatePassword) {
        try {
        const ismatch= await bcrypt.compare(candidatePassword,this.password);
        return ismatch;
    } catch (error) {
     throw error;   
    }
}



//create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;