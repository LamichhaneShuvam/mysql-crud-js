const app = require('express').Router();
const { findAllBlog, createNewBlog, findBlogById, updateBlog, deleteBlogById } = require('../controller/blogController');

app.get('/', findAllBlog)

app.get('/:id', findBlogById)

app.post('/', createNewBlog)

app.put('/:id', updateBlog)

app.delete('/:id', deleteBlogById)

module.exports = app;