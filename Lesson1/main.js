
var courseApi = "http://localhost:3000/courses";

function start(){
    // getCourses(function(courses){
    //     render(courses);
    // });
    getCourses(render);
    handleCreateForm();
}
start();

//
function getCourses(callback){
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function createCourse(data, callback){
    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
    }
    fetch(courseApi, options)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id){
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }
    }
    fetch(courseApi+ '/' +id, options)
        .then(function(response){
            return response.json();
        })
        .then(function(){
            var courseItem = document.querySelector(`.course-item-${course.id}`);
            if(courseItem){
                courseItem.remove();
            }
        });
}


function handleUpdateCourse(id){
    document.querySelector('#save').onclick = function(){
        var name = document.querySelector('input[name="name"]');
        var description = document.querySelector('input[name="description"]');

        var data = {
            name: name.value,
            description: description.value
        }
        UpdateCourse(id, data);
    }
    
}

function openUpdate(id, stt){
    document.querySelector('#save').classList.add("show");
    getCourses(function(course) {
        let dataUpdate = course.find((course) => course.id === id);
        document.querySelector('input[name="name"]').value = dataUpdate.name;
        document.querySelector('input[name="description"]').value =
          dataUpdate.description;
        });
    var saveBtnBlock = document.querySelector("#save");
    saveBtnBlock.innerHTML = `Cập nhật khóa học thứ ${stt}`,
    // saveBtnBlock.append(`Cập nhật khóa học thứ ${stt}`),
    handleUpdateCourse(id);
}
function UpdateCourse(id, data) {
    var options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(courseApi+ `/` +id, options)
      .then(function (response) {
        return response.json();
      })
      .then(function(){
        document.querySelector('#save').classList.remove("show");
        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="description"]').value = "";
      });
}

function render(courses){
    var listCoursesBlock = document.querySelector("#list-courses");
    var i = 0;
    var htmls = courses.map(function(course){
        // console.log(course);
        i++;
        return `
            <li class="course-item-${course.id}">
                <h3>Khóa học thứ ${i}</h3>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Delete</button>
                <button onclick="openUpdate(${course.id},${i})">Update</button>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm(){
    var creatBtn = document.querySelector("#create");
    creatBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        
        var formData = {
            name: name,
            description: description
        }

        createCourse(formData,function(){
            getCourses(render);
        });
    }
}

