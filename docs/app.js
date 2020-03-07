var pics = [
	"images/kitty_bed.jpg",
	"images/kitty_basket.jpg", 
	"images/kitty_laptop.jpg",
	"images/kitty_door.jpg",
	"images/kitty_sink.jpg",
	"images/kitty_wall.jpg"
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

