let posts = [];

module.exports.getAll = () => {
    return posts;
};

module.exports.newPost = (title, description) => {
    posts.push({ id: generateID(), title, description });
};

module.exports.deletePost = (id) => {
    if (posts.length == 0) {
        return false;

    } else {
        posts.forEach(element => {
            if (element.id == id) {
                posts.splice(posts.indexOf(element), 1);
                return;
            }
        })
        return true;
    }
}

function generateID() {
    return Math.random().toString(36).substring(2, 9);
};