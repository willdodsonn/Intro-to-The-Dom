// Your code here



//create element
// let elem = document.createElement("p");
// elem.innerHTML = "Hello World";
// elem.style.background ="yellow";
// document.body.appendChild(elem);


//add li onclick
// let button = document.querySelector("#addToDo");
// button.addEventListener("click", function() {
// 	 var ul = document.querySelector("#myList");
//   var li = document.createElement("li");
//   li.innerHTML = "Fourth Element";
//   ul.appendChild(li);

// });

//remove element
// let element = document.querySelector("#secondElement");
// element.parentNode.removeChild(element);

//change eventlistener 
let input = document.querySelector("input")
input.addEventListener('change', function () {
    var ul = document.querySelector("ul");
      var li = document.createElement("li");
      var span = document.querySelector("span");
      li.innerHTML=  input.value;
      ul.appendChild(li);
      li.appendChild(span);
    });
    
    //  <span><i class=\"fa fa-trash\"></i></span>
   
    //   var span = document.createElement("span");
    //   var span = li.appendChild("span");
    //   var i = span.appendChild("i");
    //   i.setAttribute("class", "fa fa-trash");
    //   i.appendChild("li")