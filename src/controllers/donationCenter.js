'use strict';

const donationCenterRepository = require('../repositories');
const getGeolocation = require('../services');

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
            owner,
            description,
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

        const address = `${number}+${street}+${district}`;
        
        const geolocate = await getGeolocation(address.replace(' ', '+'));
        console.log(geolocate);

        try {
            await donationCenterRepository.create({
                name,
                isActive,
                userId,
                description,
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
                    dateCreation: new Date(),
                    latitue,
                    longitude,
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

module.exports ={ get,
getById,
post,
remove}