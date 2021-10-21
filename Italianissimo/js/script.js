const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("active");
})


$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden')
        }
    })
})

// Skift til nyt billede:
    function setNewImage()
      {
        document.getElementById("img1").classList.remove("qrimg");
        document.getElementById("img1").src ="img/visit.jpg"; 
        document.getElementById("img1").classList.add("visitimg");
        }

// Skift til gammelt billede:
    function setOldImage()
      
      {
        document.getElementById("img1").classList.remove("visitimg"); 
        document.getElementById("img1").src ="img/visitkort.png";
        document.getElementById("img1").classList.add("qrimg"); 
      }