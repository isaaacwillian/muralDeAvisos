document.addEventListener("DOMContentLoaded", () => {
    updatePosts();
})

function updatePosts() {
    fetch("http://192.168.0.109:3000/api/all").then(res => {
        return res.json();
    }).then(json => {

        let postElements = '';

        let posts = JSON.parse(json);
        posts.forEach(post => {
            let postElement = `<div id=${post.id}>
            <div>
                <h4>${post.title}</h4>
            </div>
            <div style="display:flex; justify-content: center;">
                <div id="description">${post.description}</div>
            </div>
        </div>`;
            postElements += postElement;
        });
        document.getElementById("posts").innerHTML = postElements;
        divs = document.getElementsByTagName("div");
        divs[divs.length - 1].classList.add("border"); //Adicionando um border radius apenas no último elemento
    })
}

function newPost() {

    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = { title, description };

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }

    fetch("http://192.168.0.109:3000/api/new", options).then(res => {
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    })
}