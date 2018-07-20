/*jshint esversion: 6 */

// cat names
var names = ["Sima", "Pera", "Zuca", "Beli", "Tigar"];
// cat images
var images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg'];
// cat objects
var cats = [];
// activ cat
var currentCat;
// cat class
class Cat {
    constructor(name, image) {
        this.name = name;
        this.image = image;
        this.clicks = 0;
    }
}

// create buttons for each cat name add listener and insert in DOM
names.forEach(catName => createAndInsertButton(catName));
// create button function
function createAndInsertButton(name) {
    var button = document.createElement('button');
    button.addEventListener('click', function() {
        getCat(name);
        displayCat(name);
    });
    button.innerHTML = name;
    var buttons = document.body.querySelector('#buttons');
    buttons.appendChild(button);
}

// create cats
names.forEach(catName => createCat(catName));
// create a cat function
function createCat(catName) {
    var catIndex = names.indexOf(catName);
    var newCat = new Cat(catName, images[catIndex]);
    cats.push(newCat);
}

// set event listener on image element
document.getElementById('image').addEventListener('click', function(){
    currentCat.clicks++;
    // update click text
    document.querySelector('.clicks').innerHTML = `${currentCat.clicks} cat click`;
});

function getCat(catName) {
    cats.forEach( cat => {
        if (catName === cat.name) { currentCat = cat; } 
    });
}

function displayCat(name) {
    // insert cat name
    document.getElementById('name').innerText = currentCat.name;
    // insert cat image
    document.getElementById('image').src = currentCat.image;
    // update clik text
    document.querySelector('.clicks').innerHTML = `${currentCat.clicks} cat clicks`;
    // make content visible
    document.querySelector('content').style.display = "block";
}







