const Capital = require("../models/capital");
const Country = require("../models/country");

exports.addCapital = (req, res) => {
  const newCapital = new Capital({
    capitalTitle: req.body.capitalTitle,
    countryId: req.body.countryId,
  });
  newCapital
    .save()
    .then((capital) =>
      res.status(200).json({ msg: "success", capital: capital })
    )
    .catch((err) => res.status(500).json(err));
};

exports.getCapitals = (req, res) => {
  Capital.findAll({
    include: [
      {
        model: Country,
        attributes: ["countryName"],
      },
    ],
  })
    .then((capitals) => res.status(200).json(capitals))
    .catch((err) => res.status(500).json(err));
};

exports.getCapital = (req, res) => {
  const id = req.params.id;
  Capital.findByPk(id, {
    include: [{ model: Country, attributes: ["countryName"] }],
  })
    .then((capital) => res.status(200).json(capital))
    .catch((err) => res.status(500).json(err));
};
exports.modify = (req, res) => {
  const { capitalTitle, countryId } = req.body;

  Capital.update(
    { capitalTitle: capitalTitle, countryId: countryId },
    { where: { id: req.params.id } }
  )
    .then((capital) =>
      res.status(200).json({ message: "capital updated  successfully" })
    )
    .catch((err) => res.status(500).json(err));
};
exports.delete = (req,res)=>{
        const id = req.params.id;
        Capital.destroy({where: {id: id}})
        .then(() =>
        res.status(200).json({ message: "capital deleted successfully" })
      )
      .catch((err) => res.status(500).json(err));
}