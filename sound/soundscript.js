var x = document.getElementById("busSound");
var a = document.getElementById ("parkSound");
var b = document.getElementById ("restaurantSound");
var c = document.getElementById ("bakerySound");
var d = document.getElementById ("luluSound");
var e = document.getElementById ("eveningSound");

var sound1isclicked= false;
var sound2isclicked= false;
var sound3isclicked= false;
var sound4isclicked= false;
var sound5isclicked= false;
var sound6isclicked= false;

var isPlaying = false;

var percentageValue = 0;

function sound1() {
    if (sound1isclicked==false){
        move(10);
        sound1isclicked=true;
    }
    

	if (isPlaying) {
		x.pause();
	} else {
		x.play();
	}
};

x.onplaying = function(){
	isPlaying = true;
}

x.onpause = function(){
	isPlaying = false
}

function sound2() {	
    if (sound2isclicked==false){
        move(20);
        sound2isclicked=true;
    }

	if (isPlaying) {
		a.pause();
	} else {
		a.play();
	}
};

a.onplaying = function(){
	isPlaying = true;
}

a.onpause = function(){
	isPlaying = false
}

function sound3() {
    if (sound3isclicked==false){
        move(20);
        sound3isclicked=true;
    }


	if (isPlaying) {
		b.pause();
	} else {
		b.play();
	}
};

b.onplaying = function(){
	isPlaying = true;
}

b.onpause = function(){
	isPlaying = false
}

function sound4() {
    if (sound4isclicked==false){
        move(20);
        sound4isclicked=true;
    }

	if (isPlaying) {
		c.pause();
	} else {
		c.play();
	}
};

c.onplaying = function(){
	isPlaying = true;
}

c.onpause = function(){
	isPlaying = false
}

function sound5() {
    if (sound5isclicked==false){
        move(20);
        sound5isclicked=true;
    }

	if (isPlaying) {
		d.pause();
	} else {
		d.play();
	}
};

d.onplaying = function(){
	isPlaying = true;
}

d.onpause = function(){
	isPlaying = false
}

function sound6() {
    if (sound6isclicked==false){
        move(10);
        sound6isclicked=true
    }


	if (isPlaying) {
		e.pause();
	} else {
		e.play();
	}
};

e.onplaying = function(){
	isPlaying = true;
}

e.onpause = function(){
	isPlaying = false
}


//move the battery bar 

function move(addPercentage) {
     if (percentageValue<100){
    var newPercentage = percentageValue + addPercentage;
    console.log("new percentage is", newPercentage,", old percentage is:",percentageValue);
    var elem = document.getElementById("myBar"); 
    var id = setInterval(frame, 10);
        function frame() {
            console.log("called!");
            if (percentageValue >= newPercentage) {
                clearInterval(id);
            } else {
                percentageValue++; 
                console.log(percentageValue);
                elem.style.width = percentageValue + '%'; 
            }
        }
     }
}