$(document).ready(function(){
    $('#myModal1 .showcase ul img').on('click', function(event) {
      var fullSizeSrc = $(event.target).attr('data-fullsize-src');
      console.log(event.target, fullSizeSrc);
      $('.fullsize1').attr('src', fullSizeSrc);
    })
    $('#myModal2 .showcase ul img').on('click', function(event) {
      var fullSizeSrc = $(event.target).attr('data-fullsize-src');
      console.log(event.target, fullSizeSrc);
      $('.fullsize2').attr('src', fullSizeSrc);
    })
    $('#myModal3 .showcase ul img').on('click', function(event) {
      var fullSizeSrc = $(event.target).attr('data-fullsize-src');
      console.log(event.target, fullSizeSrc);
      $('.fullsize3').attr('src', fullSizeSrc);
    })
    $('#myModal4 .showcase ul img').on('click', function(event) {
      var fullSizeSrc = $(event.target).attr('data-fullsize-src');
      console.log(event.target, fullSizeSrc);
      $('.fullsize4').attr('src', fullSizeSrc);
    })
    
}); 