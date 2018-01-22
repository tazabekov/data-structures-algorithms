var input = document.querySelector("#debounce");
var timeout;
input.addEventListener("keydown", e => {
    clearTimeout(timeout);
	 timeout = setTimeout(()=>{
	    console.log(e.target.value);
	}, 400);
});