(function() {
    "use strict";

    let regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function(){

        var map = L.map('mapa').setView([10.496262, -66.848937], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([10.496262, -66.848937]).addTo(map)
            .bindPopup('GDLWebCamp 2020<br> Boletos ya disponibles.')
            .openPopup();
            // .bindTooltip('Un Tooltip')
            // .openTooltip()

        //Datos usuarios
        let nombre = document.getElementById('nombre');
        let apellido = document.getElementById('apellido');
        let email = document.getElementById('email');

        //Campos pases 
        let pase_dia = document.getElementById('pase_dia');
        let pase_dosdias = document.getElementById('pase_dosdias');
        let pase_completo = document.getElementById('pase_completo');
        
        //Botonoes y divs
        let calcular = document.getElementById('calcular');
        let errorDiv = document.getElementById('error');
        let botonRegistro = document.getElementById('btnRegistro');
        let lista_productos = document.getElementById('lista-productos');
        let suma = document.getElementById('suma-total');

        //Extras
        let etiquetas = document.getElementById('etiquetas');
        let camisas = document.getElementById('camisa_evento');

        if (document.getElementById('calcular')) {
            
        

        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarEmail);

        function validarCampos() {
            if (this.value == '') {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Este campo es obligatorio";
                this.style.border = '1px solid red';
            }else{
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        }

        function validarEmail() {
            if (this.value.indexOf("@") > -1) {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }else{
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Comprueba tu E-mail";
                this.style.border = '1px solid red';
            }
        }

        function calcularMontos(event){
            event.preventDefault;
            //console.log(regalo.value);
            if(regalo.value === ''){
                alert("Debes elegir un regalo");
                regalo.focus();
            }else{
                let boletosDia = parseInt(pase_dia.value, 10)|| 0, 
                    boletos2dias = parseInt(pase_dosdias.value, 10)|| 0,
                    boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10)|| 0,
                    cantCamisas = parseInt(camisas.value, 10)|| 0;
                
                let totalPagar = (boletosDia * 30 ) + (boletos2dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);
                console.log(totalPagar);

                let listadoProductos = [];

                if (boletosDia >= 1) {
                    listadoProductos.push(boletosDia + ' pases por día');    
                }               
                if (boletos2dias >= 1) {
                    listadoProductos.push(boletos2dias + ' pases por 2 días');
                }
                if (boletoCompleto >= 1) {
                    listadoProductos.push(boletoCompleto + ' pases completos');
                }
                if (cantCamisas >= 1) {
                    listadoProductos.push(cantCamisas + ' camisas');
                }
                if (cantEtiquetas >= 1) {
                    listadoProductos.push(cantEtiquetas + ' etiquetas');
                }
                
                lista_productos.style.display = "block";

                lista_productos.innerHTML = '';

                for (let i = 0; i < listadoProductos.length; i++) {
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                }
                suma.innerHTML = "$ " + totalPagar.toFixed(2);

            } 
        }
            function mostrarDias() {
                let boletodia = parseInt(pase_dia.value, 10)|| 0, 
                    boletos2dias = parseInt(pase_dosdias.value, 10)|| 0,
                    boletoCompleto = parseInt(pase_completo.value, 10)|| 0;

                let diasElegidos = [];

                if (boletodia > 0) {
                    diasElegidos.push('viernes');
                }
                if (boletos2dias > 0) {
                    diasElegidos.push('viernes', 'sabado');
                }
                if (boletoCompleto > 0) {
                    diasElegidos.push('viernes', 'sabado', 'domingo');
                }
                for (let i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = 'block';
                    
                }

            }
        
        }


    }); //DOM CONTENT LOADED
})();


$(function(){

    //Lettering
    $('.nombre-sitio').lettering();

    //Menu fijo
    let windowHeight = $(window).height();
    let barraAltura = $('.barra').innerHeight();

    $(window).scroll(function() {
       let scroll = $(window).scrollTop();
       if (scroll > windowHeight) {
           $('.barra').addClass('fixed');
           $('body').css({'margin-top': barraAltura+'px'});
       }else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
       }
    });

    //Menú responsive
    $('.menu-movil').on('click', function() {
        $('.navegacion-principal').slideToggle();
    });

    //Programa de conferencias
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click', function() {
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();

       let enlace =  $(this).attr('href');
       $(enlace).fadeIn(1000);
       return false;
    });
    
    //Animaciones para los números
    let resumenLista = jQuery('.resumen-evento');
    if (resumenLista.length > 0) {
        $('.resumen-evento').waypoint(function(){
            $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
            $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
            $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1400);
            $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);

        }, {
            offset: '60%'
        });
    }

    
    //Cuenta regresiva
    $('.cuenta-regresiva').countdown('2020/04/10 09:00:00', function(event) {
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });




});