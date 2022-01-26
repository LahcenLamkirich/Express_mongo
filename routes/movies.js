const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
 

 router.get('/', async function (req, res, next) {
    const take = parseInt(req.query.take) || 10;
    const skip = parseInt(req.query.skip) || 0;
    const total= await prisma.movies.count();

    const movies = await prisma.movies.findMany({
        take: take,
        skip: skip,
    })

    res.send({
        data: movies,
        pagination: {
            count: total,
            skip: skip,
            take: take,
        }
    });

});
module.exports = router;