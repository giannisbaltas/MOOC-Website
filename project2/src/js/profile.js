const email     = document.getElementById("email");
const password  = document.getElementById("password");

document.getElementById("enter").addEventListener('click',tryLogin,false);


function tryLogin() {
    fetch('http://127.0.0.1:5500/project2/src/html/register.html?email=ena@dd&password=dsdsd')
    .then( response => response.json())
    .then( jsonData => {  
      console.log(jsonData);
    })
    .catch(err => console.log('Request Failed', err));

    let obj = {};
    obj['email'] = email.value;
    obj['password'] = password.value;

    
    fetch(
      'http://127.0.0.1:5500/api/login',
      {
          method: 'POST',
          headers: {
              'Conent-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify(obj)
      }
  ).then(response => (console.log(response)))
   .catch(err => console.log(err))

}
