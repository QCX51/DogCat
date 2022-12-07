//Este fagmento de codigo es el que le da funcionalidad al formulario de la vista loguin

function btnLog() {
        //Se obtinen los datos del formulario
        let ema = document.getElementById('correo').value;
        let pas = document.getElementById('password').value;
        //Los datos son enviados a develop/php/selectLogin.php para ser procesados 
        console.log(ema+pas);
        $.post('php/selectLog.php',{
            email:ema,
            password:pas
        },function(data){
            //Aqui se obtiene la respuesta 
            var insertRespuesta = JSON.parse(data);
            if (insertRespuesta!=null) {
                if (insertRespuesta.response == "SUCCESS") {
                    //Si el proceso fue un exito los datos obtenidos son enviados a la funcion de loginLS(id,nom,jer) en cookies.js
                    window.location= 'admin.html';
                } 
    // en caso de que haya ocurrido un error este sera notificado
                else if (insertRespuesta.response == "ERROR1") {
                    alert(insertRespuesta.detail);
                } else {
                    alert('Ha ocurrido un error, intetelo mas tarde');
                    window.location= 'index.php';                        
                }
            }else{
                alert('Ha ocurrido un error, intetelo mas tarde');
                window.location= 'index.php';
            }
        });
}