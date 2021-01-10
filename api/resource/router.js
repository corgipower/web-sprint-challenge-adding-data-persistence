// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/api/resources', async (req, res, next) => {
    try{
        const resources = await Resource.find();
        res.json(resources);
    }
    catch (err) {
        next(err);
    }
})

router.post('/api/resources', async (req, res, next) => {
    try {
        Resource.add(req.body);
        res.status(201).json(req.body);
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;