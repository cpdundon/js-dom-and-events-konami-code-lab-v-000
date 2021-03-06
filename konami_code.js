const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const shiftCode = 16;

function init() {
  // Write your JavaScript code inside the init() function
	
	document.addEventListener('keydown', onKeyDownHandler);
 
	// Keep track of index outside of the event handler.
	let index = 0;
	
	// This is the function that would be invoked by the event listener.
	function onKeyDownHandler(e) {
		const key = parseInt(e.detail || e.which);
		
		if (key === code[index] && key !== shiftCode) {
			index++;
	 
			if (index === code.length) {
				alert("Hurray!");
	 
				index = 0;
			}
		} else if (key !== shiftCode){
			index = 0;
		}
	}
}
