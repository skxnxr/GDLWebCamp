(function() {
    "use strict";

    let regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function(){

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
        



    }); //DOM CONTENT LOADED
})();
