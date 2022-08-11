var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var ul = document.querySelector('ul');
    ul.innerHTML = courses.map(function(course){
        return '<li>'+course+'</li>'
    })
}

render(courses);