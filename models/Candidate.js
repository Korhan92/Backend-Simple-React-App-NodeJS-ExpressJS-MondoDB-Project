const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CandidateSchema = new Schema({
    director_id:Schema.Types.ObjectId,
    title: {
        type: String,
        required: [true, "The Field `(PATH)` is required!"],
        maxlength: [300, "The field `(PATH)` must be less than 300"],
        minlength: [5, "The field `(PATH)` must be greater than 5"],
    },
    name:{type: String},
    username: {type: String},
    country:{type:String,maxlength:50,minlength:3},
    city:{type:String,maxlength:30,minlength:1},
    season:{type:String,min:1,max:20},
    email: {type: String},
    phone: {type: Number},
    address: {type: String},
    imdb_score:{type:Number,min:0,max:10},
    createdAt:{type:Date,default:Date.now}
})

module.exports = mongoose.model("candi", CandidateSchema)