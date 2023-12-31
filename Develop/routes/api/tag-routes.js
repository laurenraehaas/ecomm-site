const router = require('express').Router();
//const { Tag, Product, ProductTag } = require('../../models');
const Tag = require('../../models/Tag')
const Product = require('../../models/Product')
const ProductTag = require('../../models/ProductTag')

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    })
    if(!tagData) {
      res.status(404).json({ message: 'No tag was found with that id!'})
      return
    }
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Reader.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Reader.put(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  } 
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
