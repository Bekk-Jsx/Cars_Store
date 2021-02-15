const express = require('express');
const sectionsController = require('./../controllers/sectionController');


const router = express.Router();

router.get('/', sectionsController.getAllSection);
router.post('/', sectionsController.createSection);
router.patch('/:id', sectionsController.updateSection);
router.delete('/:id', sectionsController.deleteSection);





module.exports = router;