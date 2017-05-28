import express from 'express' ; 
import routes from './routes';




const router = express.Router();

router.get('/' ,routes.findAllrecords);

router.get('/:id',routes.findrecordById);


router.post('/' ,routes.createRecord);
router.put('/:id' , routes.updateRecordById);

router.delete('/:id' , routes.deleteRecordByid);


module.exports = router ; 


