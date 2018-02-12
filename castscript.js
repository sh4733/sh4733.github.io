function myFunction(){
	var x=document.getElementByI("topmenu");
	if (x.className === "menu-bar"){
		x.className += "responsive";
	} else{
		x.className = "menu-bar"
	}
}