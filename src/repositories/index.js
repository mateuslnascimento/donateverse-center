'use strict';

const mongoose =require('mongoose');

const DonationCenter = mongoose.model('DonationCenter');

    
    const get = async() => {
        const response = await DonationCenter.find({
            isActive: true,
        })
        return response;
    }
    const getById = async(id) => {
        const response = await DonationCenter.findById(id);
        return response;
    }
    const create = async(data) => {
        const donationCenter = new DonationCenter(data);
        await donationCenter.save();
        return donationCenter;
    };
    const update = async(id , data) => {
        data.dateLastChange = new Date();
        const response = await DonationCenter.findOneAndUpdate(id, {
            data
        });
        return response;
    }
    const remove = async(id) => {
        const response = await DonationCenter.findByIdAndDelete(id);
        return response;
    }
      

module.exports = {
    get,
    getById,
    create,
    update,
    remove,
};