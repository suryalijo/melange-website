var pics = [
	"imgs/kitty_bed.jpg",
	"imgs/kitty_basket.jpg", 
	"imgs/kitty_laptop.jpg",
	"imgs/kitty_door.jpg",
	"imgs/kitty_sink.jpg",
	"imgs/kitty_wall.jpg"
]

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

