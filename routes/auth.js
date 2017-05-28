import userauth from '../dbmodels/auth.model';

module.exports = {
    userAuthentication: function (req, res, next) {
        userauth.find({
            username: req.headers.username,
            password: req.headers.password

        }).exec(function (error, records) {
            if (error) {
                return next(error);
            }
            if(records instanceof Array && records.length == 1){
             next();   
            }
            else{
                res.status(401).send('unautherized : No User') ;
            }
        });
    }
};