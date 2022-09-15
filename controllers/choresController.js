const express = require('express');
const router = express.Router();
const Chore = require('../models/Chore');

// Adds routes to the router object
// Index: GET all the chores
router.get('/', async (req, res, next) => {
  try {
    const chores = await Chore.find({}).populate('owner');
    res.json(chores);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const chores = await Chore.findById(req.params.id).populate('owner');
    res.json(chores);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newChore = await Chore.create(req.body);
    res.status(201).json(newChore);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const choreToUpdate = await Chore.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (choreToUpdate) {
      res.json(choreToUpdate);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const choreToDelete = await Chore.findByIdAndDelete(req.params.id);
    console.log(choreToDelete);
    if (choreToDelete) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(err);
  }
});

module.exports = router;
