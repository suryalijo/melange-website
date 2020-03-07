var pics = [
	"images/kitty_bed.JPG",
	"images/kitty_basket.JPG", 
	"images/kitty_laptop.jpg",
	"images/kitty_door.jpg",
	"images/kitty_sink.JPG",
	"images/kitty_wall.jpg"
];

var buttonToChangeimage = document.querySelector("button");
var image = document.querySelector("img");

let counter = 1;
buttonToChangeimage.addEventListener("click", function(){
	if(counter === 6){
		counter=0;
	}
	image.src = pics[counter];
	counter++;
});

