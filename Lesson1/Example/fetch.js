var posts = "https://jsonplaceholder.typicode.com/posts";
fetch(posts)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        var htlms = posts.map(function(post){
            return `<li>
                <h2>${post.title}/h2>
                <p>${post.body}</p>
            </li>`;
        });
        var html = htlms.join("");
        document.getElementsByTagName("ul");
    })
    .catch(function(err){
        console.log(err);
    })