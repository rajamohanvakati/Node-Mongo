import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/employee', function (error, result) {
    if (error) {
        console.error('Error connecting to DB');
    }

    console.log('Connected to DB') ;
});

module.exports = mongoose ;