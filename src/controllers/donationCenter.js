'use strict';

const donationCenterRepository = require('../repositories');

    const get = async(req, res) => {
        try {
            const response = await donationCenterRepository.get();
            res.send(response);

        } catch(error) {
            res.status(500).send({
                status: 500,
                message: 'Falha na busca de Centros de Doação',
                error: error
            });
        }
    }
    const getById = async(req, res) => {
        try {
            const response = await donationCenterRepository.getById(req.params.id);
            res.send({
                response
            });

        } catch(error){
            res.status(500).send({
                status: 500,
                message: 'Falha na consulta do Centro de Doação, tente novamente mais tarde',
                error: error,
            })
        }
    }
    const post = async(req, res) => {
        const { body: {
            name,
            userId,
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

        }} = req;
        

        try {
            const response = await donationCenterRepository.create({
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
                },
                dateCreation: new Date(),

            });
            res.status(201).send({
                status: 201,
                message:'Centro de Doações cadastrado com sucesso!',
                response
            });
            
        } catch(error) {
            res.status(500).send({
                status: 500,
                message: 'Falha na criação do Centro de Doação, tente novamente mais tarde',
                error: error
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
                status: 500,
                message: 'Falha na consulta do Centro de Doação, tente novamente mais tarde'
            })
        }
    };
    const update = async(req, res) => {
        try {
            const response = await donationCenterRepository.update(req.params.id, req.body);
            res.status(201).send({
                status: 201,
                message:'Centro de Doações atualizado com sucesso!',
                response
            });
            
        } catch(error) {
            res.status(500).send({
                status: 500,
                message: 'Falha na atualização do Centro de Doação, tente novamente mais tarde',
                error: error
            })
        }
    };

module.exports ={ 
    get,
    getById,
    post,
    update,
    remove
}