
function blu(){
var pass = document.getElementById("pass")
pass.style.opacity = "1";
pass.style.backgroundColor = "#dedede";
var len = document.getElementById("pass").value.length
if(len >= 8){

	document.getElementById("txt").textContent = "Good !!";
	document.getElementById("txt").style.color = "white";
}
else{
	document.getElementById("txt").textContent = "Your Password must be 8 characters or higher";
}

}
function inp(){
var pass = document.getElementById("pass");
var len = pass.value.length;
var x = 8-len;
var y = x.toString();
if(len < 8){document.getElementById("txt").textContent = y + " characters more...";}
else{document.getElementById("txt").textContent = "Strong Password";}
pass.style.opacity = "1";
pass.style.backgroundColor = "#C26E13";
}
function clic(){
document.getElementById("pass").style.opacity = "0.2";
}

function myFunction() 
{
var y = document.getElementById("email");
	y.style.background ='#dedede';
var x = document.getElementById("email").value;
var regex = /.+@.+\..+/;
var len = document.getElementById("pass").value.length;
if(regex.test(x))
{
	if(len >= 8){window.location = "page2.html";}
	else{
		 document.getElementById("txt").textContent = "Your Password must be 8 characters or higher";
		 document.getElementById("pass").style.background ='red';
	     
			}
}
else
{
	var content = document.getElementById("email").value
	if(document.getElementById("email").value === ""){document.getElementById("txt").textContent = "The email Input is blank";}
	else{content = document.getElementById("email").value;
	document.getElementById("txt").textContent = content + " is an invalid Email Adress";
	}
	document.getElementById("email").style.background ='red';
}
}
