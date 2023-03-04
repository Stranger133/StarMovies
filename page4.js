document.getElementById("add").addEventListener("click",function (){
	const movie = prompt("what Movie You want to add?");
	var new_movie = document.createElement("li");
	var n = movie.slice(1);
	var y = movie.charAt(0).toUpperCase();
	var all = y + n;
	new_movie.textContent = all;
	document.getElementById("list").appendChild(new_movie);
});

window.addEventListener("load", function () {
			var pop = document.getElementById("pop");
			var string = "Popular Movie";
			console.log(string);
			var len = string.length;
			console.log(len);
			for(var i = 0;i<len;i++){
				pop.textContent += string[i];
				console.log(pop.textContent);
				
			}
		});
		
		
		
document.getElementById("search").addEventListener("click", function () {
			document.addEventListener("keypress",function(e){
				console.log("e.charCode");
				var search = document.getElementById('search').value;
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
							
							
			})
		});
		
