// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/api/tasks', async (req, res, next) => {
    try{
        const tasks = await Tasks.find();
        res.json(tasks);
    }
    catch (err) {
        next(err);
    }
})

router.post('/api/tasks', async (req, res, next) => {
    try {
        Tasks.add(req.body);
        res.status(201).json(req.body);
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;
