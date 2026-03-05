  const img = document.querySelector('img');

  async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=UeV3FLNC8UyWKfm5EOQZTNtalCvAhE9V&s=cats')
    const catData = await response.json();

    console.log(catData);
    
    if(response.ok) {
        img.src = catData.data.images.original.url;
    } else {
        console.log(response.status + " " + response.statusText);
    }
  }

  getCats();




// function getNewImage(text) {
//     const img = document.querySelector('img');
//     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=UeV3FLNC8UyWKfm5EOQZTNtalCvAhE9V&s=${text}`)
//     .then(function(response) {
//         return response.json();
//     })
//     .then((response) => {
//         if(response.ok) {
//             img.src = response.data.images.original.url;
//             console.log(response);
//         } else {
//             console.log(`${response.status}: ${response.statusText}`);
//         }
//     })
//     .catch(e => {
//         console.log(e);
//     }); 
// }

// let newImageButton = document.querySelector('#new-image');
// let searchInput = document.querySelector("input");

// newImageButton.addEventListener("click", () => {
//     let searchText = searchInput.value;

//     if(searchText.length > 1) {
//         searchText.replaceAll(" ", "+");

//         getNewImage(searchText);

//         console.log(searchText);
//     }
// });

// const server = {
//   people: [
//     {
//       name: "Odin",
//       age: 20,
//     },
//     {
//       name: "Thor",
//       age: 35,
//     },
//     {
//       name: "Freyja",
//       age: 29,
//     },
//   ],

//   getPeople() {
//     return new Promise((resolve, reject) => {
//       // Simulating a delayed network call to the server
//       setTimeout(() => {
//         resolve(this.people);
//       }, 2000);
//     });
//   },
// };

// async function getPersonInfo(name) {
//     const people = await server.getPeople();
//     const person = people.find(person => {return person.name === name});
//     console.log(person);
//     return person;
// }

// getPersonInfo("Odin")
// .then(result => {
//     console.log(result.name + " " + result.age);
// });