const express = require('express');
const router = express.Router();
const communityController = require('../../controllers/sql/communityController');

router.post('/', communityController.createCommunity);
router.get('/', communityController.getAllCommunities);
router.get('/:id', communityController.getCommunityById);
router.put('/:id', communityController.updateCommunity);
router.delete('/:id', communityController.deleteCommunity);

module.exports = router; 