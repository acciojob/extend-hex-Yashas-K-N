const extendHex = (shortHex) => {
  // write your code here
	let i = shortHex.length-3; isCapital = false;
	var output = "#";
	for (let i = 0; i < shortHex.length; i++){
		let ascii = shortHex[i].charCodeAt(0);
		 if (ascii > "A" && ascii <"B")
		 //if (ascii > "A" && ascii <"Z")//
		  {
			 isCapital = true;
		 }
		// ouput += shortHex[i] + shortHex[i];
		 for(let j = 0; j <= 2; j++ ){
		 output += shortHex[i];
		 }
	}
	return isCapital?"output":"output.UpperCase";
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
