const Country = require('../models/country')


exports.addCountry = (req,res)=>{
    const newCountry = new Country({countryName:req.body.countryName})
    newCountry.save()
    .then(country=>res.status(200).json({message:"success",country:country}))
}

exports.getAllCountries = (req,res)=>{
    Country.findAll()
    .then(countries=>res.status(200).json({message:"success",countries:countries}))
    .catch(err=>res.status(500).json({message:"error",err:err}))
}
exports.getCountry = (req,res)=>{
    const countryName = req.body.countryName

    Country.findOne({where: {countryName: countryName}})
    .then(country=>{
        if (country) {
            return res.status(200).json({message:"success",country:country})
        }
        else return res.status(404).json({message:"NOT FOUND"})
    })
    .catch(err=>res.status(500).json({message:"error",err:err}))
}