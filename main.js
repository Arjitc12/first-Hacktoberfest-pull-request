var button=document.querySelector("button");
var filled=false;
button.addEventListener("click",()=>{
	//alert('connected');
	filled ? document.body.style.background="blue" : document.body.style.background="green"
	filled=!filled;
});

