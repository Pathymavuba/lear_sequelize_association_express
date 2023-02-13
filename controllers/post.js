const Post = require("../models/post");
const User = require("../models/user");

exports.createPost = (req, res) => {
  const { content, userId } = req.body;

  const newPost = new Post({ content, userId });
  newPost
    .save()
    .then((post) => res.status(200).json({ message: "success", post: post }))
    .catch((err) => res.status(500).json({ message: "error", err: err }));
};

exports.getAllPosts = (req, res) => {
  Post.findAll({
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
  .then((posts) => res.status(200).json({ message: "success", posts: posts }))
  .catch((err) => res.status(500).json({ message: "error", err: err }));
};

exports.getPost = (req, res) => {
     
    const id = req.params.id;

    Post.findByPk(id,{
        include:[
            {
                model:User,
                attributes:["username"]
            }
        ]
    })
    .then((post) => res.status(200).json({ message: "success", post: post }))
    .catch((err) => res.status(500).json({ message: "error", err: err }));
}