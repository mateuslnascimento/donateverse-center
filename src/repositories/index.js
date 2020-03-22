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
        try {
            const response = await DonationCenter.findByIdAndUpdate(
                id, 
                {$set: { 
                    name: data.name,
                    userId: data.userId,
                    description: data.description,
                    isActive: data.isActive,
                    address: {
                        zipCode: data.address.zipCode,
                        street: data.address.street,
                        number: data.address.number,
                        district: data.address.district,
                        city: data.address.city,
                        state: data.address.state,
                        stateInitials: data.address.stateInitials,
                        country: data.address.country,
                        countryInitials: data.address.countryInitials,
                        additionalInfo: data.address.additionalInfo
                        },
                    dateCreation: data.dateCreation,       
                    dateLastChange : new Date(),
                 }},
                {new: true}
                );
            return response;
        } catch (error) {
            throw error;
        };

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