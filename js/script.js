/*jshint esversion: 6 */

// cat names
var cats = ["Sima", "Pera", "Zuca", "Beli", "Tigar"];
// cat images
var images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg'];

// cat class
class Cat {
    constructor(name, image) {
        this.name = name;
        this.image = image;
        this.clicks = 0;
    }
}
// list of buttons from html
var buttList = document.querySelectorAll('.b');

// itarate trough button list
buttList.forEach((button) => {
    // add listener on button
    button.addEventListener('click', () => {
        // create a cat when button presed
        var cat = new Cat(cats[button.id], images[button.id]);
        // render cat
        displayCat(cat);
    }, false);
});

// render function
var displayCat = (cat) => {
    // make content visible
    document.querySelector('content').style.display = "block";
    // insert cat name
    document.getElementById('name').innerText = cat.name;
    // insert cat image
    document.getElementById('image').src = cat.image;
    // add listner on image 
    document.getElementById('image').addEventListener('click', function(){
        cat.clicks++;
        // update futter text
        document.querySelector('.clicks').innerHTML = `Number of cat clicks is ${cat.clicks}`;
    }, false);
};







