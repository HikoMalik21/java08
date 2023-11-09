//function myFunction() {
  //  document.getElementById("grey").style.backgroundColor = "grey";
    //document.getElementById("red").style.backgroundColor = "red";
    //document.getElementById("blue").style.backgroundColor = "blue";
    //document.getElementById("yellow").style.backgroundColor = "yellow";
  //}      

  //myFunction();

  let result = document.getElementById("grey");
 
        function changeColor(color) {
            document.body.style.background = color;
        }
 
        function myFunc() {
            changeColor('grey');
            result.innerHTML = "Background Color changed";
        }        