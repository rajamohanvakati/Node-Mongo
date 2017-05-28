import express from 'express';
import logger from 'morgan';
import bodyparser from 'body-parser';
import router from './routes/router.config';
import mongooseconnection from './config/mongoose.config';
import auth from './routes/auth';


const app = express();
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use('/employee', auth.userAuthentication);

app.use('/employee', router);
app.use('/admin', router);
app.use(function (error, req, res, next) {
    console.log(error);
    if (error.status == 500) {
        res.status(500).send(error.errors);
    } else {
        res.send(error.errors);


    }

});




module.exports = app;