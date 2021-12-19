const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const blogRoute = require('./route/blogRoute')

//middleware
app.use(express.json());





app.use('/blog', blogRoute)






app.listen(port, console.log(`Server started at port ${port}`));