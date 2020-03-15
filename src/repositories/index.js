'use strict';

const mongoose =require('mongoose');

const DonationCenter = mongoose.model('DonationCenter');

const donationCenterRepository = () => {
    
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
    };
    const update = async(id , data) => {
        const { 
            name,
            isActive,
            address: {
                zipCode,
                street,
                number,
                district,
                city,
                state,
                stateInitials,
                country,
                countryInitials,
                additionalInfo,
            }
        } = data;

        await DonationCenter.findByIdAndUpdate(id, {
            name: name,
                isActive: isActive,
                address: {
                    zipCode:zipCode,
                    street:street,
                    number:number,
                    district: district,
                    city: city,
                    state: state,
                    stateInitials: stateInitials,
                    country: country,
                    countryInitials: countryInitials,
                    additionalInfo: additionalInfo,
                    dateLastChange: new Date(),
                }
        })
    }
    const remove = async(id) => {
        const response = await DonationCenter.findByIdAndDelete(id);
        return response;
    }

    return {
        get,
        getById,
        create,
        update,
        remove,
    }
}

module.exports = donationCenterRepository;