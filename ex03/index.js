const getChien = async function (img) {
  let resultat = await fetch("https://dog.ceo/api/breeds/image/random");
};

class Chien {
  constructor(img) {
    this.img = "https://dog.ceo/api/breeds/image/random";
  }
}

let mesImages = document.getElementById("result");

const chiens = [];
for (let i = 0; i < 3; i++) {
  chiens.push(new Chien());
}
console.log(chiens);

//Utilisez l'API "https://dog.ceo/api/breeds/image/random" pour récupérer 3 images de chiens aléatoires et les afficher dans la balise 'result'.
