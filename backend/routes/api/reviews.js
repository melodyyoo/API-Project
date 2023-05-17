const express = require('express');
const router = express.Router();

const {Spot, SpotImage, User, Review, ReviewImage} = require('../../db/models');
const {requireAuth} = require('../../utils/auth')

router.get('/current', requireAuth, async (req,res,next)=>{
    const user = await Review.findAll({
        where: {
            userId: req.user.id
        },
        include: [
            {model: User, attributes: ['id', 'firstName', 'lastName']},
            {model: Spot, attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']},
            {model: ReviewImage, attributes: ['id', 'url']}
        ]
    });

    res.json(user)
})





















module.exports = router;
