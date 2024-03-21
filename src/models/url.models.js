import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    shortId :{
        type : String,
        required : true,
        unique : true,
    },
    redirectUrl :{
        type : String,
        required : true,
    },
    vistHistory : [{timestamps: {type : Number}}],
},{timestamps: true});

export  const URL = mongoose.model('URL',urlSchema);