// APP.JS: (at the end of 6/25 morning class session)

// DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  console.log(pokemon[0]);
  res.send("Homepage.");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
    res.send(`Congratulations you have made a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}.`);
});

app.get("/bugs", (req, res) => {
    res.send(`<div>
        <h3>99 little bugs in the code</h3>
        <a href="bugs/101">pull one down, patch it around</a>
    </div>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    if (req.params.numberOfBugs <= 200) {
        res.send(`<div>
            <h3>${req.params.numberOfBugs} little bugs in the code</h3>
            <a href="${Number(req.params.numberOfBugs) + 2}">pull one down, patch it around</a>
        </div>`);
    } else {
        res.send(`<div>
            <h3>${req.params.numberOfBugs} little bugs in the code</h3>
            <a href="/bugs">Start over</a>
        </div>`);
    }
});
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  let pokemonName = req.query.name
  let targetPokeman = pokemon.find((poke)=> {
    return poke.name.toLowerCase() === pokemonName.toLowerCase()
  })
  res.send(targetPokeman);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  let index = req.params.indexOfArray
  if(pokemon[index]){
    res.send(pokemon[index]);
  } else{
    res.send(`Sorry no pokemon found at pokemon[${index}]`)
  }
});



// EXPORT
module.exports = app;




// // DEPENDENCIES
// const express = require("express");


// // CONFIGURATION
// const app = express();

// // ROUTES
// app.get("/", (request, response) => {
//   response.send("Welcome to Express Lab Home Page!");
// });
// app.get("/:verb/:adjective/:noun", (request, response) => {
//   // response.send(request.params);
//   response.send(`Congratulations you have made a new project called ${request.params.verb}-${request.params.adjective}-${request.params.noun}`)
// });
// app.get("/bugs", (request, response) => {
//   response.send(
//     `<div>
//       <h3>99 little bugs in the code</h3>
//       <a href="bugs/101">pull one down, patch it around</a>
//     </div>`
//   );
// });

// app.get("/bugs/:numberOfBugs", (request, response) => {
//   if(request.params.numberOfBugs < 200){
//     response.send(`<div>
//       <h3>${request.params.numberOfBugs} little bugs in the code</h3>
//       <a href="${Number(request.params.numberOfBugs) + 2}">link</a>
//     </div>`
//     );
//   } else {
//     response.send(`<div>
//       <h3>${request.params.numberOfBugs} little bugs in the code</h3>
//       <a href="/bugs">Start Over</a>
//     </div>`);
//   }
// });


// const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);


// module.exports = app;