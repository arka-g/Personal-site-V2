$(document).ready(function(){
	$('.experience-font').on('click', function()
	{

      if ($('#sub-experience1').css('display') == 'none'){
		$('#sub-experience1').slideDown(500);
 		$('#sub-experience1').css('background-color','black');
      }
      else{
        $('#sub-experience1').slideUp(500);
        setTimeout(function() {
          $('#sub-experience1').removeAttr('style');
        }, 550);
      }

	});
});