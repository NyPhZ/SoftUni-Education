function test (snack,q){
	let quantity = Number(q);
	let price = 0;
	
	if(snack === "water"){
	price = 1.00;
	}
		if(snack === "coffee"){
	price = 1.50;
	}
		if(snack === "coke"){
	price = 1.40;
	}
		if(snack === "snacks"){
	price = 2.00;
	}
	
	console.log((price*quantity).toFixed(2))
	
}