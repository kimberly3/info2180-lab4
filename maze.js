function setEvents(){


	//<!-- EXERCISE 1 -->
	var hi =  document.getElementById("boundary1");
	hi.onmouseover = function() {
		mouseOver()
	};
	
	
	//<!-- EXERCISE 2 -->

	var hey= document.querySelectorAll("div .boundary");
	for (let a=0; a < hey.length; a++){
		hey[a].onmouseover= function(){
	// loops through the hey array and turns all the boxes red
	for(let i=0; i < hey.length; i++){
		
		var result= hey[i];
		result.classList.add('youlose');
	
	}}}

	
	
	function mouseOver() {
		hi.classList.add('youlose');
		
		
	}

}


window.onload = function() {
	setEvents(); 
}