const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    birth: {
        type: String,
        required: true,
        trim: true
    },
    rg: {
        type: String,
        required: true,
        trim: true
    },
    cpf: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    address_number: {
        type: String,
        required: true,
        trim: true
    },
    neighborhood: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    cep: {
        type: String,
        required: true,
        trim: true
    },
    home_phone: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        trype: String,
        required: false,
        trim: false
    },
    phone_contact: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    current_age: {
        type: String,
        required: true,
        trim: true
    },
    responsible: {
        type: Schema.Types.ObjectId,
        ref: "responsible",
        required: false,
        trim: true

    },
    degree_of_kinship: {
        type: String,
        required: false,
        trim: true
    },
    rg_responsible: {
        type: String,
        required: false,
        trim: true
    },
    cpf_responsible: {
        type: String,
        required: false,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    }
})

module.exports = mongoose.model("Students", schema)