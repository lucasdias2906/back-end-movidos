const mongoose = require("mongoose");
const Students = mongoose.model("Students");
const respository = require("../repositories/register_repository")

exports.get = async (req, res, next) => {
    console.log("ENTRAMOS TUDO CERTO")
    try {
        let data = await respository.get()
        res.status(200).send({  
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: "erro ao buscar dados tente novamente"
        })
    }
}

exports.postRegister = async (req, res, next) => {
    if (req.body.name == "") {
        return res.status(400).send({
            message: "por favor preencher com dados"
        })
    }
    try {
        console.log(req.body)
        respository.postRegister({
            name: req.body.name,
            birth: req.body.birth,
            rg: req.body.rg,
            cpf: req.body.cpf,
            address: req.body.address,
            address_number: req.body.address_number,
            neighborhood: req.body.neighborhood,
            city: req.body.city,
            cep: req.body.cep,
            home_phone: req.body.home_phone,
            phone: req.body.phone,
            phone_contact: req.body.phone_contact,
            email: req.body.email,
            current_age: req.body.current_age,
            responsible: req.body.responsible,
            degree_of_kinship: req.body.degree_of_kinship,
            rg_responsible: req.body.rg_responsible,
            cpf_responsible: req.body.cpf_responsible,
            description: req.body.description
        }).then((v) => {
            res.status(201).send({
                message: "aluno cadastrado com sucesso"
            })
        }).catch((err) => {
            console.log("arrumar pfv", err)
            res.status(400).send({
                message: "falha ao registrar aluno"
            })
        })
    } catch (error) {
        console.log("err", error)
        res.status(500).send({
            message: "falha ao registrar aluno",
            data: error
        })
    }
}
// alterando dados dos alunos

exports.putRegister = (req, res, next) => {
    if (!req.body.id) {
        return res.status(400).send({
            message: "id incorreto ou vazio por favor concertar o erro"
        })
    }
    respository.putRegister(req.body.id, req.body).then((sucess) => {
        res.status(202).send({
            message: "informações do aluno atulizadas com sucesso"
        })
    }).catch((err) => {
        res.status(500).send({
            message: "falha ao executar requisição"
        })
    })
}

exports.deleteRegister = (req, res, next) => {
    if (!req.body.id) {
        return res.status(400).send({
            message: "id incorreto ou vazio por favor concertar o erro"
        })
    }
    respository.deleteRegister(req.body.id).then((sucess) => {
        res.status(200).send({
            message: "informações do aluno deletadas com sucesso"
        })
    }).catch((err) => {
        res.status(500).send({
            message: "falha ao delear dados do aluno"
        })
    })
}

// deletando pelo id do aluno

exports.deleteWithIdRegister = (req, res, next) => {
    if (!req.prams.id) {
        return res.status(400).send({
            message: "id incorreto ou vazio"
        })
    }
    respository.deleteRegister(req.params.id).then((sucess) => {
        res.status(200).send({
            message: "informações do aluno deletadas com sucesso"
        })
    }).catch((err) => {
        res.status(500).send({
            message: "falha ao deletar informações do aluno"
        })
    })
}