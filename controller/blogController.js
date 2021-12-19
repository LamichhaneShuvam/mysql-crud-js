const Blog = require('../model/blog');


exports.findAllBlog = async ( req, res ) => {
    try {
        const [result, _] = await Blog.findAll();
        res.status(200).json({
                blogs: result,
                count: result.length
            });

    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createNewBlog = async ( req, res ) => {
    try {
        const { title , body } = req.body;
        const blog = new Blog(title, body);
        blog.save();
        res.status(200).json({
            message: "blog inserted successfully."
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.findBlogById = async (req, res) => {
    try {
        const id = req.params.id;
        const [result, _] = await Blog.findById(id);
        if(Object.keys(result).length !== 0)
            return res.status(200).json({ blog: result[0] })
        res.status(400).json({message: `document with id : ${id} doesn't exists.`})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const {body , title} = req.body;
        const [result, _] = await Blog.findByIdAndUpdate(id, title, body);
        res.status(200).json({
            message: "blog updated successfully."
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.deleteBlogById = async (req, res) => {
    try {
        const id = req.params.id;
        const {body , title} = req.body;
        const [result, _] = await Blog.findByIdAnddelete(id);
        if(result.affectedRows === 0){
            return res.status(400).json({
                message: `Blog with id ${id} not found.`
            });
        } 
        res.status(200).json({
            message: "blog deleted successfully."
        });
    } catch (error) {
        res.status(500).send(error);
    }
}