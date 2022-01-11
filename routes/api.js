const express = require("express");
const posts = require("../model/posts");
const router = express.Router();

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", (req, res, next) => {
    if (req.query.title) {

        let title = req.query.title;
        let description = req.query.description;
        posts.newPost(title, description);

        res.send("Post adicionado");
    } else {
        next();
    }
});

router.post("/new", express.json(), (req, res, next) => {

    if (req.body.title) {
        let title = req.body.title;
        let description = req.body.description;

        posts.newPost(title, description);
        res.send("Post adicionado");
    } else {
        res.send("Não foi adicionado post algum")
    }
});

router.delete("/remove", (req, res) => {
    if (posts.deletePost(req.query.id)) {
        res.send("Removido com sucesso!");
    } else {
        res.send("Sem ter cadastrado um post, vou remover como?")
    }
});

module.exports = router;