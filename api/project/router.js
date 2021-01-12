// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/api/projects', async (req, res, next) => {
    try{
        const projects = await Projects.find();
        res.json(projects);
    }
    catch (err) {
        next(err);
    }
})

router.post('/api/projects', async (req, res, next) => {
    try {
        await Projects.add(req.body);
        res.status(201).json(req.body);
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;