var express = require('express')
var router = express.Router();
var candidateModel = require('../models/Candidate')

//Get A Movies List(/api/candi/:candiId)
router.get('/:candiId', function (req, res, next) {
    // res.json("Response with a resoucer CANDİ LİST")
    candidateModel.findById(req.params.candiId)
        .then((candi) => { res.json(candi) })
        //.catch((err) => { res.json(err) })
        .catch((err) => { next({ message: 'The Movie Was Not Found.', status: 99 }) })
})

//Get Candi List
router.get('/', function (req, res, next) {
    // res.json("Response with a resoucer CANDİ LİST")
    candidateModel.find()
        .then((candiList) => { res.json(candiList) })
        .catch((err) => { res.json(err) })
})

//Post Add Candi
/*
router.post('/',function (req,res) {
    //Mapping model with schema(table)
    const newCandi=new candidateModel({
        title:req.body.title,
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.phone, 
        country:req.body.country,
        city:req.body.city,
        season:req.body.season,
        imdb_score:req.body.imdb_score

        
    })
    newCandi.save((err,data)=>{
        if (err) {res.json(err)}
        res.json(data)
    })
})
*/

//Post(Alternative) 
router.post('/', function (req, res) {
    //Mapping model with schema(table)
    const newCandi = new candidateModel(req.body)

    newCandi.save()
        .then((candi) => { res.json(candi) })
        .catch((err) => { res.json(err) })
})

//PUT Update Candi
router.put('/:candiId', function (req, res, next) {
    // res.json("Response with a resoucer CANDİ LİST")
    candidateModel.findByIdAndUpdate(req.params.movieId,req.body)
        .then((candi) => { res.json(candi) })
        //.catch((err) => { res.json(err) })
        .catch((err) => { next({ message: 'The Candi Was Not Found.', status: 99 }) })
})

//DELETE A Candi(/api/candi/:candiId)
router.delete('/:candiId', function (req, res, next) {
    // res.json("Response with a resoucer CANDİ LİST")
    candidateModel.findByIdAndRemove(req.params.candiId)
        .then((candi) => { res.json(candi) })
        .catch((err) => { next({ message: 'The Candi Was Not Found.', status: 99 }) })
})



module.exports = router