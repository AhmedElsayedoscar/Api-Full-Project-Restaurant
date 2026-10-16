
var allData = [];
var row = document.getElementById('row');

var links = document.querySelectorAll('.navbar .nav-link');

var loader = document.getElementById("loader")


for (var i = 0; i < links.length; i++) {
 links[i].addEventListener('click', function (e) {
  // alert(e.target.innerHTML)


  getData(e.target.innerHTML)
 })
}

// fetch >> xmlhttpreq 


// https://forkify-api.herokuapp.com/api/search?q=                  pizza
async function getData(klma) {

 loader.classList.remove('d-none');





 var response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${klma}`);
 var data = await response.json();



 allData = data.recipes;

 console.log(allData);

 displayData();

 loader.classList.add('d-none');



}


getData('pizza');




function displayData() {
 var str = '';

 for (var i = 0; i < allData.length; i++) {

  str += ` <div class="col-md-3">
              <div>

              <h1>id : ${allData[i].recipe_id}</h1>
                <img src="${allData[i].image_url}" class='w-100' alt="">
                <h4>${allData[i].title}</h4>
                <p>publisher :  ${allData[i].publisher}</p>
              </div>
            </div>`

 }

 row.innerHTML = str;
}

// signUp >>  api 



async function signUp(userData) {

 var response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', {
  method: 'POST',
  body: userData,
  headers: {
   'Content-Type': 'application/json',
  }
 })

 var responseData = await response.json();

 console.log(responseData);
}

// es6


var user = {
 name: 'Ahmed',
 email: 'ahmed2202020@gmail.com',
 password: '7777666666666666666',
 rePassword: '7777666666666666666',
 phone: "01018761843"
}

signUp(JSON.stringify(user))