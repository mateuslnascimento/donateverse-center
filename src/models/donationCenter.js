const {Schema} = require('mongoose');

const donationCenterSchema = new Schema ({
    name:{
        type: String,
        required: true,
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
            required: true,
        },

    },
})

module.exports = mongoose.model('DonationCenter', donationCenterSchema);

