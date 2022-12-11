   /* Jesus Garcia
   Group Project */
   $("#but-gal-sec").click(function() {
        $(".second").show( "slow" )
        $("#but-gal-sec").hide();
      });

      $("#but-gal-third").click(function() {
        $(".third").show( "slow" )
        $("#but-gal-third").hide();
      });
      $("#but-gal-fourth").click(function() {
        $(".fourth").show( "slow" )
        $("#but-gal-fourth").hide();
      });
      $("#but-gal-fifth").click(function() {
        $(".fifth").show( "slow" )
        $("#but-gal-fifth").hide();
      });
      $("#but-gal-sixth").click(function() {
        $(".sixth").show( "slow" )
        $("#but-gal-sixth").hide();
      });
      $("#but-gal-seventh").click(function() {
        $(".seventh").show( "slow" )
        $("#but-gal-seventh").hide();
      });
      $("#but-gal-eighth").click(function() {
        $(".eighth").show( "slow" )
        $("#but-gal-eighth").hide();
      });
      $("#but-gal-ninth").click(function() {
        $(".ninth").show( "slow" )
        $("#but-gal-ninth").hide();
      });


      if (window.matchMedia("(min-width: 1000px)").matches) {
        document.querySelectorAll("#container img").forEach(img => {
          img.onclick = () => {
            document.querySelector(".popup-img").style.display = "block";
            document.querySelector(".popup-img img").src = img.getAttribute("src");
          }
        })
  
        document.querySelector(".popup-img span").onclick = () => {
          document.querySelector(".popup-img").style.display = "none";
        }
      }
     



      //contact us


      /* Documentation: https://developers.google.com/maps/documentation/javascript/overview */
      function initMap() {
        const uluru = { lat: 53.34888, lng: -6.24293 };
        const map = new google.maps.Map(document.getElementById("map-cont"), {
          zoom: 15,
          center: uluru,
        });
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      }
      
      window.initMap = initMap;



      function val() {
        let name = document.forms["form-cont"]["name"].value;
        let phone = document.forms["form-cont"]["phone"].value;
        let reason = document.forms["form-cont"]["reason"].value;
        
        if (name == "" || phone == "" || reason == "") {
          alert("Please fill up all the boxes");
          
          return false;
        }else {
           alert("Your enquiry has been sent")
        }
      }






    