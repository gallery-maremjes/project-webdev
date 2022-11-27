    $("#but-gal").click(function() {
        $(".second").show( "slow" )
        $("#but-gal").hide();
      });


      $('.card').on('click', function (){
        $('body').append('<div id="dialog" title="Image"><img src="' + $(this).attr('src') + '" width="300" /></div>');
        $('#dialog').dialog();
    });

    $(document).ready(function() {
        $("#top-img").click(function(){
          $.modal("<img src=\"https://i.pinimg.com/736x/36/57/b7/3657b789eb0c634712899fc94d196d9a.jpg\" style=\"\"/>");
        });
   });