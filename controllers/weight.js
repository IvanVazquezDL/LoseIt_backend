const Weight = require('../models/weight');

const getWeightByUserId = async(req, res) => {
    const uid = req.params.id;

    const weight = await Weight.find({ userId: uid }, 'userId weight week username date dateText');

    res.json({
        ok:true,
        weight
    })
}

const createWeight = async(req, res) => {
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

const getWeightsByUserIds = async(req, res) => {

    try {
        const ids = req.query.ids.split(',');


        res.json({
            ok:true,
            ids
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok:false,
            msg:'error'
        })
    }

}

module.exports = {
    getWeightByUserId,
    createWeight,
    getWeightsByUserIds
}