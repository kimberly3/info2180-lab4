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

		// loops through the ex2 array and turns all the boxes red
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

	
	//<!-- EXERCISE 4 --> a START OVER
	var start= null;
	var ex4= document.getElementById("start");

	ex4.onclick = function(){
			//ex5.innerHTML="Move your mouse over the "S" to begin.";
			for(let c=0; c < ex2.length; c++){
				var nresult= ex2[c];
				
					nresult.classList.remove('youlose');
					red= false;

				/*for(let j=0; j < ex6.length; j++){
				var n2result= ex2[j];
				
					n2result.classList.remove('youlose');
				}*/
			}
			ex5.innerHTML='Move your mouse over the "S" to begin.'
		start= true;
		ex6.classList.remove('youlose');
	};

	//<!-- EXERCISE 5 -->

	
	var leave= null;
	//if (leave ==true){
	ex3.onmouseover = function(){
		if(red!= true){
			ex5.innerHTML="You WIN!!!";
			leave=true;
		}
	};
	
	
	//<!-- EXERCISE 6 -->
	var ex6= document.getElementById("maze");
	if (start!=false){
		ex6.onmouseleave = function (){
			
			//ex6.classList.add('youlose');

			//for (let a=0; a < ex2.length; a++){
		
			//ex2[a].onmouseover= function(){

		// loops through the ex2 array and turns all the boxes red
			for(let i=0; i < ex2.length; i++){
		
				var result= ex2[i];
				result.classList.add('youlose');
				red= true;
				//exercise 5
				ex5.innerHTML="You LOSE! :("
			}
		
		};

	}
			
		
	

	
	/*ex6.onmouseleave = function (){
		ex3.onmouseover = false;
		leave=true;
	}*/



	
	
	
}



window.onload = function() {
	setEvents(); 
}