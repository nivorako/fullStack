const express = require('express');
const Thing = require('../models/thing');
const router = express.Router();

const stuffController = require('../controller/stuffController');

router.post('/', stuffController.createThing);

router.put('/:id', stuffController.modifyThing);

router.delete('/:id', stuffController.deleteThing);

router.get('/:id', stuffController.getOneThing);

router.get('/', stuffController.getAllThings);


module.exports = router;