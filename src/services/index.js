'use strict'

const axios = require('axios');

const getGeolocation = async(address) => {
    try { 
        const response = await axios.get({
            url: process.env.GOOGLE_API || maps.googleapis.com/maps/api/geocode/json, 
            params:{
                address: address,
                key: process.env.GOOGLE_API_KEY
            }})
        return response;

    } catch(error) {
        throw error;
    }
}

module.exports = getGeolocation;