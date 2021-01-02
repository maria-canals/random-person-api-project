
document.querySelector('#btn').addEventListener('click', getInfo)

// fetch API
function getInfo(){
const url ="https://randomuser.me/api/"
fetch(url)
.then(response => response.json())
.then(data => updateInto(data));
}

//update info
function updateInto(data){
    console.log(data)
    document.querySelector('#photo').src = data.results[0].picture.large
    document.querySelector('#first').textContent = data.results[0].name.first
    document.querySelector('#last').textContent = data.results[0].name.last
    document.querySelector('#country').textContent = data.results[0].location.country
    document.querySelector('#phone').textContent = data.results[0].phone
    document.querySelector('#email').textContent = data.results[0].email
}