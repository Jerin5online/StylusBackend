const express = require("express")
const productsController = require('../CONTROLLER/productsController')
const router = new express.Router()

//import userController

const userController = require('../CONTROLLER/userController')
const jwtMiddleware = require("../MIDDLEWARE/jwtMiddleware")
const wishlistController = require("../CONTROLLER/wishlistController")






//get all products

router.get('/allproducts',productsController.getAllProductsController)

///register

router.post('/register',userController.registerController)

//login

router.post('/login',userController.loginController)

//get a product

router.get('/get-product/:id',productsController.getAProductController)

//add to wishlist

router.post('/add-wishlist',jwtMiddleware,wishlistController.addtoWishlist)

//get from wishlist

router.get('/wishlist/allproducts',jwtMiddleware,wishlistController.getFromwishlistController)



module.exports=router