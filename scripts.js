// $('.image').css('background-image')
//
//
// var $getleftarrow = $('.fa-chevron-circle-left').val();
// var $getrightarrow = $('.fa-chevron-circle-right').val();
// console.log("left arrow" + $getleftarrow)
// console.log("right arrow" + $getrightarrow)
var counter = 1;
$('.fa-chevron-circle-left').on('click', function(){
  console.log("left arrow pushed")
  counter++;
$('.image').css('background-image', 'url("' + counter + '.jpeg")' );

})
