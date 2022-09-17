var users = [
    {
        id: 1,
        name: 'Chu Tien'
    },
    {
        id: 2,
        name: 'Someone'
    },
    {
        id: 3,
        name: 'Ayayay'
    }
]
var comments = [
    {
        id: 1,
        content: 'Hello!!!',
        user_id: 1
    },
    {
        id: 2,
        content: 'Hi! How are you?',
        user_id: 2
    }
]

function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise((resolve) => {
        var result = users.filter((user) => {
            return userIds.includes(user.id)
        })
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
}
getComments()
    .then((comments) => {
        var userIds = comments.map((comment) => {
            return comment.user_id;
        });
        console.log(userIds);
        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments,
                };
            });
    })
    .then(function (data) {
        var commentBlock = document.getElementById('comment-block');
        var html = "";
        data.comments.forEach((comment) => {
            var user = data.users.find((user) => {
                return user.id == comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });


