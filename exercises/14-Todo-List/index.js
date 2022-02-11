
//remove event
// let element = document.querySelector("#secondElement");
// element.parentNode.removeChild(element);

//add event

let input = document.querySelector("input")
input.addEventListener('change', function () {
    var ul = document.querySelector("ul");
      var li = document.createElement("li");
      var span = document.querySelector("span");
      var clone = span.cloneNode(true);
      clone.addEventListener("click", function(e) {
        var li = e.currentTarget.parentNode.parentNode;
        //  var li = document.querySelector("li");
         li.parentNode.removeChild(li); 
        });
      var text = document.createTextNode(input.value);
      li.appendChild(clone);
      li.appendChild(text);
      ul.appendChild(li);
    
    });
    
  


document.querySelectorAll(".fa").forEach(function(clickedButton){
clickedButton.addEventListener("click", function(e) {
  var li = e.currentTarget.parentNode.parentNode;
  //  var li = document.querySelector("li");
   li.parentNode.removeChild(li); 
  })
});
//   let button = document.querySelector(".fa")   
//  button.addEventListener('click', function(clickedButton) {
//    var li = clickedButton.currentTarget.parentNode.parentNode;
//   //  var li = document.querySelector("li");
//    li.parentNode.removeChild(li); 
//  });