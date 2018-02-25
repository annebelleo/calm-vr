var max = 10;
var min = 3;
var size = Math.random() * (max - min) + min;
var positionX = Math.floor(Math.random() * 5);
var positionY = Math.floor(Math.random() * 5);
var positionZ = Math.floor(Math.random() * -5);

var points = `${positionX} ${positionY} ${positionZ}`;
var colors = ["white", "FloralWhite", "GhostWhite", "Ivory", "DarkGray", "DarkGrey", "LightGray", "LightGrey"] // white -> gray
var index = Math.floor(Math.random() * (colors.length));

function appendCloud() {
    // creating a new sphere
    for (var i = 0; i < 10; i++) {
        var newCircle = document.createElement("a-circle");
        newCircle.setAttribute("color", colors[index]);
        newCircle.setAttribute("radius", `${size}`);
        newCircle.setAttribute("position", `${points}`);
        newCircle.addEventListener("click", function(){this.setAttribute("visible", true)});
        document.getElementById("scene").appendChild(newCircle);
        console.log(newCircle);
    }
 
}

// .catch(function (err) {
//     // This will fix your error since you are now handling the error thrown by your first catch block
//     console.log(err.message)
// });