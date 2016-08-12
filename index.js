//smallest number that can be divided by numbers 1-10 with no remainder

function smallestRemainder(){
	var i = 1;
 
	while (i %  2 != 0 || i %  3 != 0 || i %  4 != 0 || i %  5 != 0 ||
         i %  6 != 0 || i %  7 != 0 || i %  8 != 0 || i %  9 != 0 ||
         i % 10 != 0){
    i++;
	}
	document.getElementById("output").innerHTML= i+" is the smallest number that can be divided by numbers 1-10 with no remainder";
		
}//function

document.getElementById("btn").addEventListener("click",smallestRemainder);