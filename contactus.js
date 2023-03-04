

function myFunction() 
{
	var x = document.getElementById("email1").value;
	var regex = /.+@.+\..+/;
	if(regex.test(x))
	{
		var content = document.getElementById("email2").value;
		if(content === ""){alert("Empty email slot 2");}
		else{
			if(regex.test(content))
			{
				var t = document.getElementById("txt").value;
				if(t === "")
				{
					alert("The Text area is empty type something");
				}
				else
				{
					alert("Message sent");
					document.getElementById("email2").style.background ='#dedede';
				}
			}
			else
			{
				alert("The email is wrong in input 2");
				document.getElementById("email2").style.background ='red';
			}
		}
	}
	else
	{
		
		alert("wrong email adress in input 1");
	}
}