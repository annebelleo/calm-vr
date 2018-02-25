var size = Math.random()
var positionX;
var positionY;
var positionZ;
var points;
var colors = ["#ffffff", "#f2f2f2", "#e6e6e6", "#d9d9d9", "#cccccc"]; // white -> gray
var index;

function appendCloud() {


//     // creating a new sphere
//     for (var i = 0; i < 10; i++) {
//         positionX = Math.random() * 20 - 10;
//         positionY = Math.random() * 20 - 10;
//         positionZ = Math.random() * -10 + -10;
//         index = Math.floor(Math.random() * (colors.length));
//         points = `${positionX} ${positionY} ${positionZ}`;
//         var newCircle = document.createElement("a-circle");
//         newCircle.setAttribute("color", colors[index]);
//         newCircle.setAttribute("radius", `${size}`);
//         newCircle.setAttribute("position", `${points}`);
//         newCircle.addEventListener("click", function(){
//             this.setAttribute("visible", true);
//         });
//         document.getElementById("scene").appendChild(newCircle);
//     }
}

// .catch(function (err) {
//     // This will fix your error since you are now handling the error thrown by your first catch block
//     console.log(err.message)
// });