// Add your code here

const dogsURL = 'http://localhost:3000/dogs';
//const catsURL = 'http://localhost:3000/cats';
const usersURL = 'http://localhost:3000/users';
//const robotsURL = 'http://localhost:3000/robot';

// fetch(dogsURL, configDogObject)
//   .then(function(resp) {return resp.json()}) // note 1
//   .then(function(object) {console.log(object)}
//   .catch(function(error) {alert("Bad things! Ragnarők!")
//   console.log(error.message);
//   })
// ); 

// configDogObject = {
//     method: "POST", 
//     headers: {"Content-Type": "application/json", "Accept": "application/json"},
//     body: JSON.stringify({dogName: "Byron", dogBreed: "Poodle"})
// };

function submitData( name, email)  {
  return fetch(usersURL, {
    method: "POST", 
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify( { name, email } )
  })
  .then(function(response) { return response.json(); })
  .then(function(obj) { 
    document.body.innerHTML = obj[ "id" ] 
  })
  .catch(function(error) { document.body.innerHTML = error.message });
};



// Note 1: // Notice that the first then() is passed a callback function that takes in response as an argument. This is a [Response][response] object, representing what the destination server sent back to us. This object has a built in method, json(), that converts the body of the response from JSON to a plain old JavaScript object. The result of json() is returned and made available in the second then(). In this example, whatever response.json() returns will be logged in console.log(object).
