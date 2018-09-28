/*
Get the position of an element relative to the document
*/




// var c = canvas.getContext("2d");
// c.beginPath();
// c.moveTo(100,100);
// c.lineTo(110,110);
// c.lineWidth=.5;
// c.stroke();



// var point_start = document.getElementById("point_start");
// var point_end = document.getElementById("point_end");
// console.log(point_start);
// console.log(point_end);
// var pos_start = getElementPosition(point_start);
// var pos_end = getElementPosition(point_end);
// console.log(pos_start.left, pos_start.top);
// console.log(pos_end.left, pos_end.top);


// var canvas = $("#canvas");
// var parent = $("#canvas_parent");
// const width = parent.clientWidth;
// const height = parent.clientHeight;

// console.log(canvas);
// console.log(parent);

// canvas.width = width;
// canvas.height = height;


// // $canvas.width($parent.width());
// // $canvas.height($parent.height());

// // window.addEventListener('resize', resizeCanvas, false);
// // resizeCanvas();

// var canvas = document.querySelector('canvas');
// var c = canvas.getContext('2d');
// c.beginPath();
// c.arc(100,100,10,0,Math.PI*2,false);
// c.stroke();

function getElementPosition(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

//createLine(503.3125, 1118.78125,503.3125,2176.78125,"line");

// var line = $('#line');
// var div1 = $('#one');
// var div2 = $('#two');

//console.log(one);

// var x1 = div1.offset().left + (div1.width()/2);
// var y1 = div1.offset().top + (div1.height()/2);
// var x2 = div2.offset().left + (div2.width()/2);
// var y2 = div2.offset().top + (div2.height()/2);

// line.attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2);


// var canvas;
// var canvasWidth;
// var ctx;
 
// canvas = document.getElementById('canvas');
// window.addEventListener('resize', resizeCanvas, false);
// window.addEventListener('orientationchange', resizeCanvas, false);
// resizeCanvas();
 
// function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }


line1 = $('#line1');   
div1 = $('#point_start');   
div2 = $('#point_end');

var pos1 = div1.offset();
var pos2 = div2.offset();
console.log(pos1);
console.log(pos2);


line1
  .attr('x1', pos1.left+7)
  .attr('y1', pos1.top+5)
  .attr('x2', pos2.left+7)
  .attr('y2', pos2.top+5);


  var svg = $('#svg1');
  svg.css('height', pos2.top+30);

  window.addEventListener('resize', resizeCanvas, false);
  window.addEventListener('orientationchange', resizeCanvas, false);
  resizeCanvas();

function resizeCanvas() {
    var pos1 = div1.offset();
    var pos2 = div2.offset();
    console.log(pos1);
    console.log(pos2);
    
    line1
  .attr('x1', pos1.left+7)
  .attr('y1', pos1.top+5)
  .attr('x2', pos2.left+7)
  .attr('y2', pos2.top+5);
}

