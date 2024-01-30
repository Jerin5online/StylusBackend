const express = require("express")
const productsController = require('../CONTROLLER/productsController')
const router = new express.Router()

//import userController

const userController = require('../CONTROLLER/userController')





//get all products

router.get('/allproducts',productsController.getAllProductsController)

///register

router.post('/register',userController.registerController)

//login

router.post('/login',userController.loginController)

//get a product

router.get('/get-product/:id',productsController.getAProductController)

module.exports=router