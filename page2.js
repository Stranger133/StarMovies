var checkb = document.getElementById("mode");
checkb.addEventListener("click", function(e) {
    if( checkb.checked ) {
		document.getElementById('header').style.backgroundColor = '#c2c2c2';
		document.getElementById('input').style.backgroundColor = '#c2c2c2';
		document.getElementById('body').style.backgroundColor = '#EBEBEB';
		document.getElementById('text').style.color = "black";
		document.getElementById('a1').style.color = "black";
		document.getElementById('a2').style.color = "black";
		document.getElementById('label').style.color = "black";
		document.getElementById('label').textContent = "Dark Mode";

    } else {
	  document.getElementById('header').style.backgroundColor = '#1C2334';
	  document.getElementById('input').style.backgroundColor = '#dedede';
	  document.getElementById('body').style.backgroundColor = '#0f1622';
	  document.getElementById('text').style.color = "#dedede";
	  document.getElementById('a1').style.color = "#dedede";
	  document.getElementById('a2').style.color = "#dedede";
	  document.getElementById('label').style.color = "#dedede";
	  document.getElementById('label').textContent = "Light Mode";
    }
  });
  
  
function myFunction() 
{
	var x = prompt("What is your name ?")
	var n = x.slice(1);
	var y = x.charAt(0).toUpperCase();
	var all = y + n;
	var len = x.length;
	var regex =/[0-9]/;
	if(len < 3 || regex.test(all)){alert("Error, Try again");}
	else
	{
		document.getElementById("span").textContent = all;
	}

}

document.getElementById('but').addEventListener("click",function()
{
	var search = document.getElementById('input').value;
	var len = search.length;
	for(var i=0;i <= len;i++){
		var sea = search.split(' ');
		if (sea[i]==="spiderman")
		{
			window.location = "page5.html";
			break;
		}
		else
		{
			alert("The Movie is not Available");
			break;
		}
	}
	
});

