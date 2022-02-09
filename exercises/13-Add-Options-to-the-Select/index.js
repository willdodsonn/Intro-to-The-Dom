let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let input = document.querySelector("#mySelect");
for(var i = 0; i < countries.length; i++) {
    var opt = countries[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    input.appendChild(el);
}

input.addEventListener('change', function () {
   alert(input.value);
});
