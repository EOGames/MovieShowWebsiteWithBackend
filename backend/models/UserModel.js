import mongoose from "mongoose";

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    pic:{
        type: String,
        required: true
    },
    info:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    }
});

export default mongoose.model('moviesnew', User);