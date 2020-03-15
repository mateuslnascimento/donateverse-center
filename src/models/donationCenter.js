const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationCenterSchema = new Schema ({
    name:{
        type: String,
        required: true,
    },
    userId:{
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    address: {
        zipCode:{
            type: String,
            required: true,
        },
        street:{
            type: String,
            required: true,
        },
        number:{
            type: String,
            required: true,
        },
        district:{
            type: String,
            required: true,
        },
        city:{
            type: String,
            required: true,
        },
        state:{
            type: String,
            required: true,
        },
        stateInitials:{
            type: String,
            required: true,
        },
        country:{
            type: String,
            required: true,
        },
        countryInitials:{
            type: String,
            required: true,
        },
        additionalInfo:{
            type: String,
        },
        dateCreation:{
            type: Date,
        },
        dateLastChange:{
            type: Date,   
        },
        latitude:{
            type: String,
        },
        longitude:{
            type: String,
        }

    },
})

module.exports = mongoose.model('DonationCenter', donationCenterSchema);

