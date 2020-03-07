var pics = [
	"kitty_bed.jpg",
	"kitty_basket.jpg", 
	"kitty_laptop.jpg",
	"kitty_door.jpg",
	"kitty_sink.jpg",
	"kitty_wall.jpg"
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

