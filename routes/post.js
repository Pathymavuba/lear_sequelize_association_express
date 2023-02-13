const express = require('express');
const postControllers = require('../controllers/post')

const router = express.Router()

router.post('/post/add',postControllers.createPost)
router.get('/posts',postControllers.getAllPosts)
router.get('/posts/:id',postControllers.getPost)

module.exports = router