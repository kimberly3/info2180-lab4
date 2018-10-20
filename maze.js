function setEvents(){
//<!-- EXERCISE 1 -->
	var hi =  document.getElementById("boundary1");
	hi.onmouseover = function() {mouseOver()};

	function mouseOver() {
		hi.classList.add('youlose');
		

		//hi.style.backgroundColor = "red";
		//hi.setAttribute('onMouseOver','red')
}
}


window.onload = function() {
	setEvents(); 
}