const pets = [
  { name: "1", type: "Dog", age: 1, img: "images/dogs/dog01.jpg" },
  { name: "2", type: "Dog", age: 1, img: "images/dogs/dog02.jpg" },
  { name: "3", type: "Dog", age: 1, img: "images/dogs/dog03.jpg" },

  { name: "1", type: "Cat", age: 1, img: "images/cats/cat01.jpg" },
  { name: "2", type: "Cat", age: 1, img: "images/cats/cat02.jpg" },
  { name: "3", type: "Cat", age: 1, img: "images/cats/cat03.jpg" },

  { name: "1", type: "Bird", age: 1, img: "images/birds/bird01.jpg" },
  { name: "2", type: "Bird", age: 1, img: "images/birds/bird02.jpg" },

  { name: "1", type: "Capybara", age: 1, img: "images/capybaras/capybara01.jpg" },
  { name: "2", type: "Capybara", age: 1, img: "images/capybaras/capybara02.jpg" }
];

function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById("pet-list");
  

    pets.forEach(pet => {
        const petItem = document.createElement("div");
        petItem.className = "pet";
        petItem.innerHTML = `
        <img src="${pet.img}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button onclick="adoptPet()">Adopt Now</button>;
    `;
    petList.appendChild(petItem);
  });
}

function adoptPet() {
  alert("Thank you for your interest in adopting! Our team will contact you soon.");
}

document.addEventListener("DOMContentLoaded", loadPets);
