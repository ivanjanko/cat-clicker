/*jshint esversion: 6 */

var image,
    click,
    click2,
    cat1 = "Sima",
    cat2 = "Pera";

image = document.querySelector('.image');
image2 = document.querySelector('.image2');
clicks = 0;
clicks2 = 0;
document.querySelector('.name1').innerHTML = `Cat ${cat1}`;
document.querySelector('.name2').innerHTML = `Cat ${cat2}`;

image.addEventListener('click', function(){
    clicks++;
    document.querySelector('.clicks').innerHTML = `Number of cat clicks is ${clicks}`;
}, false);

image2.addEventListener('click', function(){
    clicks2++;
    document.querySelector('.clicks2').innerHTML = `Number of cat clicks is ${clicks2}`;
}, false);



class Cat {
    constructor(name) {
        this.name = name;
    }
}

new Cat("sima");