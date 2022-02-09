let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	 var ul = document.querySelector("#myList");
  var li = document.createElement("li");
  li.innerHTML = "Fourth Element";
  ul.appendChild(li);

});
