// create a function and following the progressions inside the function.
const url = 'https://jsonplaceholder.typicode.com/users';
// Progression 1: Create a promise call which fetches data
const fetchdata = () => {
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      console.log(data);
      var player = '<h2>Lists of Users</h2>';
      data.forEach(function (user) {
        player += `<div class="player">
           <div class="strength">Name   : ${user.name}</div>
           <div>Email  : ${user.email}</div>
           <div>Phone  : ${user.phone}</div>
           <div>Website: ${user.website}</div>
           <div>Company: ${user.company.name}</div>
           <div>City   : ${user.address.city}</div>
           <div>Zipcode: ${user.address.zipcode}</div>
          </div>`;
      });
      console.log(player);
    })
    .catch((reject) => {
      console.log('Promise rejected.');
      console.log(reject.message);
    });
};
// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error
fetchdata();
