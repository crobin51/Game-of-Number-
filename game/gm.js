var nums= [0, 0 , 0, 0, 0, 0 , 0, 0 ,0,0 ]
var numId=0;
var numX=0;
function GetStarted(){

	var obj= document.getElementsByTagName("span");

	for(var i=0; i<10;i++){

		var id=obj[i].id;
		var numx =Math.round(Math.random()*100);
		obj[i].innerHTML= numx;
  		nums[i]=numx;
		console.log(obj[i].id + "  "  + Math.round(Math.random()))
	
	}

	numId=Math.round(Math.random()*10);
	numX=nums[numId];
	console.log(obj.length);
	var obj1= document.getElementById("comp");
	obj1.innerHTML="X";


	console.log("Started and working ");

}


$(document).ready(function(){

	$("#clcme").click( function (){

		console.log("Num1");


	
	});
	$("#plyagn").click( function (){

		GetStarted();


	
	});
	$("span").click( function (){

		var x=this.id;
		var y= x.charAt(3);
		var numC=nums[y-1]
		console.log(x + y + numC)
		if(numX==numC){

			alert("Win");
		}
else{
alert("Sorry")
}
		
	
	});





	








});



