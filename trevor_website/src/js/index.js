/*
Get the position of an element relative to the document
*/
function getElementPosition(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// function createLine(x1, y1, x2, y2, lineId) {
//     // calculate the distance between the two points
//     var distance = Math.sqrt(((x1-x2)*(x1-x2)) + ((y1-y2)*(y1-y2)));
//     console.log(distance);

//     var xMid = (x1+x2)/2;
//     var yMid = (y1+y2)/2;

//     //slope of line between the points
//     var slopeInRad = Math.atan2(y1-y2,x1-x2);
//     var slopeInDeg = (slopeInRad * 180) / Math.PI;

//     var line = document.getElementById(lineId);
//     line.style.width = distance;
//     line.style.top = yMid;
//     line.style.left = xMid - (distance/2);
//     line.style.transform = "rotate("+slopeInDeg+"deg)";
// }

var point_start = document.getElementById("point_start");
var point_end = document.getElementById("point_end");
console.log(point_start);
console.log(point_end);
var pos_start = getElementPosition(point_start);
var pos_end = getElementPosition(point_end);
console.log(pos_start.left, pos_start.top);
console.log(pos_end.left, pos_end.top);


//createLine(503.3125, 1118.78125,503.3125,2176.78125,"line");

var line = $('#line');
var div1 = $('#one');
var div2 = $('#two');

//console.log(one);

// var x1 = div1.offset().left + (div1.width()/2);
// var y1 = div1.offset().top + (div1.height()/2);
// var x2 = div2.offset().left + (div2.width()/2);
// var y2 = div2.offset().top + (div2.height()/2);

// line.attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2);