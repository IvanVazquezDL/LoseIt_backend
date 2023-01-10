const Weight = require('../models/weight');

const getWeight = async(req, res) => {
    const weight = await Weight.find({}, 'userId weight week');

    res.json({
        ok:true,
        weight
    })
}

const createWeight = async(req, res) => {
    const {
        userId,
        weight,
        week
    } = req.body

    try {
        const weight = new Weight(req.body);
        await weight.save();

        res.json({
            ok: true,
            weight
        })
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getWeight,
    createWeight
}