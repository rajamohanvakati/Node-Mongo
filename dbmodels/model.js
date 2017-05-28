import mongoose from 'mongoose';

const schema = mongoose.Schema;

const companySchema = new schema({
    name: {
        type: String,
        required: [true, 'Filed is Required']

    },
    address: String,
    contact: {
        type: Number,
        validate: {
            validator: function (val) {
                return /^\+91[7-9][0-9]{9}$/.test(val)

            },
            message: '{VALUE} is not a valid phone '
        },


    },
});

const employeeSchema = new schema({
    name: String,
    job: String,
    age: Number,
    company: companySchema
});




const employee = mongoose.model('employee', employeeSchema);

module.exports = employee;



