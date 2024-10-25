        // Automatic Slideshow - change image every 4 seconds
        var myIndex = 0;
        carouselServices();


        imageCorrectionSmall();
        //correccion de imagenes small
        //Opacity change for slide show on small screens
        function imageCorrectionSmall(){
            if(screen.availWidth <= 600){

                var imagenes = document.getElementsByClassName("mySlides-images");

                for(i = 0; i < imagenes.length; i++){
                    imagenes[i].classList.add("w3-third");
                    imagenes[i].style.opacity = 1;                   
                } 
                
            }
        }



        //slides & dots services
        function carouselServices() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dotservice");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                dots[i].className = dots[i].className.replace(" w3-grey", "");
                }
            myIndex++;
            if (myIndex >= x.length) { myIndex = 0 }
            x[myIndex].style.display = "block";
            dots[myIndex].className += " w3-grey";
            
            setTimeout(carouselServices, 7000);
        }

        //slides & dots onclick
        function currentService(n) {
            var x = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dotservice");

            for (i = 0; i < x.length; i++) {
              if(n != i) x[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" w3-grey", "");
            }
            x[n].style.display = "block";  
            dots[n].className += " w3-grey";
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

        //buttón ver más mobile
        function showService(servicio){
            
            const btn = document.querySelector("button.buttonservices"+servicio);

            if(btn.innerHTML=="Ver más"){

                var listaServicios = document.querySelector("button.buttonservices"+servicio+" ~ ul");
                listaServicios.classList.remove("w3-hide");
                btn.innerHTML = "Ver menos";

            }else{

                var listaServicios = document.querySelector("button.buttonservices"+servicio+" ~ ul");
                listaServicios.classList.add("w3-hide");
                btn.innerHTML = "Ver más";
            }       


        }

