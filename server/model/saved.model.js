const { string } = require('joi')
const mongoose  =require('mongoose')
const { TypePredicateKind } = require('typescript')

//!!!! check if ref spelling of User is correct
const savedSchema = new mongoose.Schema({
    
    user: {
        //type: mongoose.Schema.Types.ObjectId,
        type: String,
        required: true,
        ref: 'user'
    },
    url: {
        type: String,
        required: true,

    },
    alt: {
        type: String,
        required: true,
    }
    
    
   
})

module.exports = mongoose.model('saves', savedSchema)
