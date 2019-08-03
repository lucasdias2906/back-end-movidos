const mongoose = require("mongoose")
const Students = mongoose.model("Students")

exports.get = async()=>{
    const res = await Students.find({})
    return res
    
}

exports.postRegister = async(data)=>{
    const register = new Students (data)
    console.log("conseguiu",data)
    await register.save()
}

// alterando dados

exports.putRegister = async(id,data)=>{
    await Students.findByIdAndUpdate(id,{
        $set:{
            name:data.name,
            birth:data.birth,
            rg:data.rg,
            cpf:data.cpf,
            address:data.address,
            address_number:data.address_number,
            neighborhood:data.neighborhood,
            city:data.city,
            cep:data.cep,
            home_phone:data.home_phone,
            phone:data.phone,
            phone_contact:data.phone_contact,
            email:data.email,
            current_age:data.current_age,
            responsible:data.responsible,
            degree_of_kinship:data.degree_of_kinship,
            rg_responsible:data.rg_responsible,
            cpf_resposible:data.cpf_resposible,
            description:data.description
        }
    })
}

// deletar dados

exports.deleteRegister = async(id)=>{
    await Students.findByIdAndDelete(id)
}