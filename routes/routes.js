import employee from '../dbmodels/model';

const routes = {

    findAllrecords: (req, res, next) => {
        //  res.status(200).send('Hello world');

        employee.find({}).sort({
            _id: 1
        }).exec(function (error, records) {
            if (error) {
                return next(error);
            }
            res.status(200).send(records);
        });



    },


    findrecordById: (req, res, next) => {

        employee.find({
            _id: req.params.id
        }).exec(function (error, records) {
            if (error) {
                return next(error);
            }
            res.status(200).send(records);
        });


    },

    createRecord: (req, res, next) => {
        //res.status(200).send(req.body);
        let newEmp = new employee({
            name: req.body.name,
            job: req.body.job,
            age: parseInt(req.body.age),
            company: {
                name: req.body.company.name,
                address: req.body.company.address,
                contact: parseInt(req.body.company.contact)
            }
        });

        newEmp.save(function (error, record) {
            if (error) {
                return next(error);
            } else {
                res.status(200).send(record);
            }
        })


    },


    updateRecordById: (req, res, next) => {

        employee.findOne({_id:req.params.id}).exec(function(error ,record){
            if(error){
                return next(error) ;
                
            }
            
            record = Object.assign(record , req.body);
            record.save(function(error ,record){
               res.status(200).send(record); 
            });
        })
        
    },

    deleteRecordByid: (req, res, next) => {

        employee.findOneAndRemove({
            _id: req.params.id
        }).exec(function (error, deletedObject) {
            if (error) {
                return next(error);
            }
            if (deletedObject) {
                res.status(200).send('Success '+deletedObject);
            } else {
                res.status(500).send('Record not found with ' + req.params.id);
            }
        });


    }





}

module.exports = routes;