        // Automatic Slideshow - change image every 4 seconds
        var myIndex = 0;
        carouselInicio();


        //Opacity change for slide show on small screens
        var imagenes = document.getElementsByClassName("mySlides-images");


        imageCorrectionSmall();
        //correccion de imagenes small
        function imageCorrectionSmall(){
            if(screen.availWidth <= 600){

                var imagenes = document.getElementsByClassName("mySlides-images");

                for(i = 0; i < imagenes.length; i++){
                    imagenes[i].classList.add("w3-third");
                                       
                } 
                
            }
        }

        if(screen.availWidth <= 600){
            
            for(i = 0; i < imagenes.length; i++){
                imagenes[i].style.opacity = 1;
            } 
            
        }
        //slides inicio
        function carouselInicio() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            
                }
            myIndex++;
            if (myIndex >= x.length) { myIndex = 0 }
            x[myIndex].style.display = "block";
            
            
            setTimeout(carouselInicio, 7000);
        }

        function toggleNavMobile() {
            var x = document.getElementById("navDemo");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else {
                x.className = x.className.replace(" w3-show", "");
            }
        }


        function copyTextToClipboard() {
            navigator.clipboard.writeText("fumigaciones.sep@gmail.com");
            alert("Email copiado!");
          }



      

       