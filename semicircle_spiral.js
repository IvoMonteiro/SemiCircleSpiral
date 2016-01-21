var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var x = canvas.width / 2; //initial position x
var y = canvas.height / 2; //initial position y
var radius = 0; // define radius
var phi = (1 + Math.sqrt(5)) / 2;
var startAngle = 0;
var endAngle = Math.PI;
var counterClockwise = true;
radius_arr = []; // list of radius radius
radius_arr.push(0); //add initial radius
radius_arr.push(1); // first needed numbers of fibonacci
for (var i = 1; i < 20; i++) { // 10 half circles

    radius = radius_arr[i] + radius_arr[i - 1]; // adding the radius of the previous semi-circle (fibonacci numbers)
    // 0,1,1,2,3,5,8...

    if( i % 2 == 1 )
       x += -radius / phi;
    else { x += radius / phi; }
    // every other semi-circle the position of the circle changes to center itself with the forming spiral (WHY DOES THIS WORK??)

    x1 = x / phi; // needed to center correctly the center (???)

    context.beginPath();
    context.arc(x1, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 3;
    startAngle = startAngle == 0 ? Math.PI : 0;
    endAngle = endAngle == Math.PI ? 0 : Math.PI;
    // line color
    context.strokeStyle = 'black';
    context.stroke();
    radius_arr.push(radius);
}
