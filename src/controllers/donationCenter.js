'use strict';

import {donationCenterRepository} from '../repositories';

const donationController = () => {
    const get = async(res) => {
        try {
            const response = await donationCenterRepository.get();
            res.status(200).send(response);

        } catch(error) {
            res.status(500).send({
                message: 'Falha na busca de Centros de Doação'
            });
        }
    }
    const getById = async(req, res) => {
        try {
            const result = await donationCenterRepository.findById(req.params.id);
            res.status(200).send(result);

        } catch(error){
            res.status(500).send({
                message: 'Falha na consulta do Centro de Doação, tente novamente mais tarde'
            })
        }
    }
    const post = async(req, res) => {
        const { body: {
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

        }} = req
        try {
            await donationCenterRepository.create({
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
                    dateCreation: new Date(),
                }

            })
            res.status(200).send(response)
            
        } catch(error) {
            res.status(500).send({
                message: 'Falha na criação do Centro de Doação, tente novamente mais tarde'
            })
        }
    }
    const remove = async(req, res) => {
        try {
            const result = await donationCenterRepository.remove(req.params.id);
            res.status(200).send({
                message: 'Centro de doação removido com sucesso'
            });

        } catch(error){
            res.status(500).send({
                message: 'Falha na consulta do Centro de Doação, tente novamente mais tarde'
            })
        }
    };
    return{
        get,
        getById,
        post,
        remove,
    }
}

module.exports = donationController;