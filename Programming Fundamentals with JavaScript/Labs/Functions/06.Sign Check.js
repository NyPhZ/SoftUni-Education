function test (n1,n2,n3){
	let num1 = Number (n1);
	let num2 = Number (n2);
	let num3 = Number (n3);
	let sum = Number(num1*num2*num3);
	let answer="";
	
	if(sum>0){
		answer="Positive";
	}
	else{
		answer="Negative";
	}
	console.log(answer)
}