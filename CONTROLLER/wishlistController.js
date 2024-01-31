const wishlist = require("../MODEL/wishlistModel");

exports.addtoWishlist = async (req, res) => {
  const { id, title, price, description, category, image, rating } = req.body;
  const userId = req.payload;
  console.log(userId);

  try {
    const existingProduct = await wishlist.findOne({ id, userId });
    if (existingProduct) {
      res.status(406).json("product already in your wishlist");
    } else {
      const newProduct = new wishlist({
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
      });
      await newProduct.save();
      res.status(200).json(newProduct);
    }
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
};

exports.getFromwishlistController = async (req, res) => {
              const userId = req.payload;
              try {
const allproducts = await wishlist.find({userId})
res.status(200).json(allproducts)
                            
              } catch (error) {
                            res.status(401).json(error);
             
              }
}
