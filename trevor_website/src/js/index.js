$( document ).ready(function() {

/* 
 *Paddings used to space SVG elements and make them look cleaner
*/
var padding_left=7;
var padding_top=5;
var padding_point=30;

/*
 *Get the position of an element relative to the document
*/
function getElementPosition(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

/*
 *Resize the canvas and the SVG line when the window width and height change.
 *Also, redraws the line from the new positions.
*/
function resizeCanvas() {
    pos1 = div1.offset();
    pos2 = div2.offset();
    svg.css('height', pos2.top + padding_point);

    line1
  .attr('x1', pos1.left + padding_left)
  .attr('y1', pos1.top + padding_top)
  .attr('x2', pos2.left + padding_left)
  .attr('y2', pos2.top + padding_left);
}

/*
 *function to determine if an element is in the viewport
 */
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
 
// Get the SVG line, the start point, and end point of the line.
line1 = $('#line1');   
div1 = $('#point_start');   
div2 = $('#point_end');

//Get the document position of the start point and end point for the line.
var pos1 = div1.offset();
var pos2 = div2.offset();

// Set the SVG canvas height dynamically (the width is set to 100% in css)
var svg = $('#svg1');
svg.css('height', pos2.top + padding_point);

//if the start point is in the viewport, draw the svg line
if($('#point_start').isInViewport()) {
    $('#line1').addClass('draw-line');
    line1
        .attr('x1', pos1.left + padding_left)
        .attr('y1', pos1.top + padding_top)
        .attr('x2', pos2.left + padding_left)
        .attr('y2', pos2.top + padding_top);
}

$(window).scroll(function() {
    if($('#point_start').isInViewport()) {
        $('#line1').addClass('draw-line');
        line1
            .attr('x1', pos1.left + padding_left)
            .attr('y1', pos1.top + padding_top)
            .attr('x2', pos2.left + padding_left)
            .attr('y2', pos2.top + padding_top);
    }
})

// When the user is in the experience section, draw the svg line
var experienceOffset = $('#Experience').offset().top;
    if($(window).scrollTop() + $(window).height() >= experienceOffset) {
        $('#line1').addClass('draw-line');
        line1
            .attr('x1', pos1.left + padding_left)
            .attr('y1', pos1.top + padding_top)
            .attr('x2', pos2.left + padding_left)
            .attr('y2', pos2.top + padding_top);
    }

// Event listener to resize the svg canvas and redraw the line when the window is resized.
  window.addEventListener('resize', resizeCanvas, false);
  window.addEventListener('orientationchange', resizeCanvas, false);
  resizeCanvas();


  // Navbar smooth scroll effect
  var scrollLink = $('.scroll');
  scrollLink.click(function(e){
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000);
  })


  //if on top of the page, home should be selected
  if($(window).scrollTop() === 0) {
    $('#nav-home').addClass('active');
    $('#nav-home').parent().siblings().children().removeClass('active');

  }
    //Active link switching
  $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      scrollLink.each(function() {
          var sectionOffset = $(this.hash).offset().top - 10;
          if(sectionOffset <= scrollbarLocation) {
              $(this).addClass('active');
              $(this).parent().siblings().children().removeClass('active');
          }

          //case for contact since the navbar never touches the contact section (trigger with bootom of page hit)
          if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('#nav-contact').addClass('active');
            $('#nav-contact').parent().siblings().children().removeClass('active');
        }
      })
  })

  //Scroll Reveal
  ScrollReveal().reveal('.scrollReveal',{delay:300, duration:800, easing:'ease-in', interval: 500});
});