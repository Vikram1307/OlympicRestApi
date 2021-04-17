const express = require('express');
require('../OlympicRestApi/src/DB/db');

const MensRanking = require('../OlympicRestApi/src/models/mens');

const app = express();
const port = process.env.Port || 1000;
app.use(express.json());

// Post Method
app.post('/mens', async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body)
        const insertMens = await addingMensRecords.save();
        res.send(insertMens);
    } catch (e) {
        res.send(e);
    }
})

//GET Method
app.get('/mens', async (req, res) => {
    try {
        const getMens = await MensRanking.find({}).sort({"Ranking" :1});
        res.send(getMens);
    } catch (e) {
        res.send(e);
    }
})

//GET Method of indiv
app.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id);
        res.send(getMen);
    } catch (e) {
        res.send(e);
    }
})

//Update Method by patch
app.patch('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id,req.body);
        res.send(getMen);
    } catch (e) {
        res.send(e);
    }
})

//Delete Method by patch
app.delete('/mens/:id', async (req, res) => {
    try {
        const getMen = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getMen);
    } catch (e) {
        res.send(e);
    }
})


app.listen(port, () => {
    console.log(`connection is live at ${port}`)
});