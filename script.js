var max = 10
var min = 3

function appendSphere() {
    // creating a new sphere
    for (var i = 0; i < Math.random() * 50; i++) {
        var size = Math.random() * (max - min) + min;
        var positionX = Math.floor(Math.random() * 5);
        var positionY = Math.floor(Math.random() * 5);
        var positionZ = Math.floor(Math.random() * -5);
        var newCircle = document.createElement("a-circle");
        newCircle.setAttribute("color", "white");
        // preferably a scale of diff shades of white to gray
        newCircle.setAttribute("radius", `${size}`);
        newCircle.setAttribute("position", `${positionX} ${positionY} ${positionZ}`);
        document.getElementById("scene").appendChild(newCircle);
    }
}

// .catch(function (err) {
//     // This will fix your error since you are now handling the error thrown by your first catch block
//     console.log(err.message)
// });