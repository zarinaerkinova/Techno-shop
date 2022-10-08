const { Router } = require('express')
const router = Router()
const constructor = require('../constructor/product')

router.get('/', constructor.getProducts)

router.get('/find/:id', constructor.findProducts)

router.post('/add', constructor.setProducts)

router.put('/update/:id', constructor.updateProducts)

router.delete('/delete/:id', constructor.deleteProducts)

module.exports = router