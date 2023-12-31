const router = require('express').Router();
//const { Category, Product } = require('../../models')
const Category = require('../../models/Category')
const Product = require('../../models/Product')

// The `/api/categories` endpoint


router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    })
  
    if(!categoryData) {
      res.status(404).json({ message: 'No category was found with that id!'})
      return
    }
    res.status(200).json(categoryData)
} catch (err) {
  res.status(500).json(err)
}
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create({
      product_id: req.body.product_id,
    })
    res.status(200).json(newCategory)
  } catch (err) {
    res.status(400).json(err)
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.put({
      where: {
        id: req.params.id,
      }
    })
    if(!categoryData) {
      res.status(404).json({ message: 'No category was found with that id!'})
      return
    }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      }
    })
    if(!categoryData) {
      res.status(404).json({ message: 'No category was found with that id!'})
      return
    }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
  // delete a category by its `id` value
});

module.exports = router;
