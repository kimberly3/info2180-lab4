function setEvents(){


	//<!-- EXERCISE 1 -->
	var ex1 =  document.getElementById("boundary1");
	ex1.onmouseover = function() {
		mouseOver()
	};

	function mouseOver() {
		ex1.classList.add('youlose');
		
		
	}
	
	//<!-- EXERCISE 2 -->
	var red= null;
	var ex2= document.querySelectorAll("div .boundary");
	for (let a=0; a < ex2.length; a++){
		
		ex2[a].onmouseover= function(){

		// loops through the hey array and turns all the boxes red
		for(let i=0; i < ex2.length; i++){
		
			var result= ex2[i];
			result.classList.add('youlose');
			red= true;
		
			}
		
		}

	}
	//<!-- EXERCISE 3 -->
	
	var ex3= document.getElementById("end");
	ex3.onmouseover = function(){
		if(red!= true){
			alert("You WIN!!!");
		}
	}
	
	
	

}


window.onload = function() {
	setEvents(); 
}