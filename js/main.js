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
        let resultado = document.getElementById('lista-productos');

        calcular.addEventListener('click', calcularMontos);

        function calcularMontos(event){
            event.preventDefault;
            //console.log(regalo.value);
            if(regalo.value === ''){
                alert("Debes elegir un regalo");
                regalo.focus();
            }else{
                let boletosDia = pase_dia.value,
                    boletos2dias = pase_dosdias.value,
                    boletoCompleto = pase_completo.value;
                
                let totalPagar = (boletosDia * 30 ) + (boletos2dias * 45) + (boletoCompleto * 50);
                console.log(totalPagar);
            }
        }



    }); //DOM CONTENT LOADED
})();
