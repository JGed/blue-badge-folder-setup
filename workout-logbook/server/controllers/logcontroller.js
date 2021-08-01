let express = require('express');
const validateSession = require('../middleware/validate-session');
const Log = require('../db').import('../models/log');
const router = express.Router();

/**********************************
 ***GET ALL LOGS FOR THE USER*** 
 *********************************/
router.get('/', validateSession, (req, res) => {
    let userid = req.user.id;
    Log.findAll({
        where: { owner_id: userid }
    })
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({ error: err }));
})

/**********************************
 ***CREATE A LOG FOR THE USER*** 
 *********************************/
router.post('/', validateSession, (req, res) => {
    Log.create({
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner_id: req.user.id
    })
    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({ error: err }))
});


/**********************************
 ***GET LOG BY ID FOR THE USER*** 
 *********************************/
router.get('/:id', validateSession, (req, res) => {
    Log.findOne({
        where: {
            id: req.params.id,
            owner_id: req.user.id
        }
    })
    .then(log => {
        if(log){
            res.status(200).json(log);
        }
        else {
            res.status(500).json({ error: "no log found"});
        }
    })
    .catch(err => res.status(500).json({ error: err }));
});


/**********************************
 ***GET LOG BY ID FOR THE USER*** 
 *********************************/
router.put('/:id', validateSession, (req, res) => {
    Log.update({
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result
    },{
        where: {
            id: req.params.id,
            owner_id: req.user.id
        }
    })
    .then(logs => {
        if(logs[0]) {
            res.status(200).json({ message: "update completed"})
        }
        else {
            res.status(500).json({ message: "update failed" })
        }
    })
    .catch(err => res.status(500).json({ error: err }));
});

/**********************************
 ***DELETE LOG BY ID FOR THE USER*** 
 *********************************/
router.delete('/:id', validateSession, (req, res) => {
    Log.destroy({
        where: {
            id: req.params.id,
            owner_id: req.user.id
        }
    })
    .then(result => {
        if(result) {

            res.status(200).json({ message: "workout log was deleted" })
        }
        else {
            res.status(500).json({ message: "workout log was not deleted" })
        }
    })
    .catch(err => res.status(500).json({ error: err }));
})

















module.exports = router;
