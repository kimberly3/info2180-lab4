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
	var ex5= document.getElementById("status");
	var red= null;
	var ex2= document.querySelectorAll("div .boundary");
	for (let a=0; a < ex2.length; a++){
		
		ex2[a].onmouseover= function(){

		// loops through the hey array and turns all the boxes red
		for(let i=0; i < ex2.length; i++){
		
			var result= ex2[i];
			result.classList.add('youlose');
			red= true;
			//exercise 5
			ex5.innerHTML="You LOSE! :("
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
	
	//<!-- EXERCISE 4 -->

	var ex4= document.getElementById("start");
	ex4.onclick = function(){
			//ex5.innerHTML="Move your mouse over the "S" to begin.";
			for(let c=0; c < ex2.length; c++){
				var nresult= ex2[c];
				
					nresult.classList.remove('youlose');
					red= false;

				
			}
			ex5.innerHTML='Move your mouse over the "S" to begin.'
		
	};

	//<!-- EXERCISE 5 -->

	

	ex3.onmouseover = function(){
		if(red!= true){
			ex5.innerHTML="You WIN!!!";
		}
	};



}

	
	
	




window.onload = function() {
	setEvents(); 
}