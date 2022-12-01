$(document).ready(function () {
    mostrarMascotas();
});

function addMascota() {
    console.log("agregar mascotas");
    let form = new FormData($("#formParte1")[0]);
    console.log(form);
    $.ajax({
        data: form,
        url:'php/addMascota.php',
        type: "POST",
        contentType: false,
        processData: false,
        beforesend: function () {},
        success: function(response) {
            var data2 = JSON.parse(response);
            console.log(data2);
            if (data2.response == "SUCCESS") {
                console.log("SUCCESS");
                alert(data2.detail);
                window.location.reload();
              } else {
                alert('Ha ocurrido un error, intetelo mas tarde');
              }
        }
    });
}

function mostrarMascotas() {
    console.log("mostra mascota");
    $.ajax({
        data: {I:"D"},
        url:'php/selectMascota.php',
        type: "POST",
        contentType: false,
        processData: false,
        beforesend: function () {},
        success: function(response) {
            var data2 = JSON.parse(response);
            console.log(data2);
            if (data2!=null) {
                //Si se obtuvieron los datos correctos serán mostrados en pantalla
                if (data2.response == "SUCCESS") {
                  console.log("SUCCESS");
                  let tab = document.getElementById('tab-body');
                  let values = data2.detail;
                  values.forEach(element => {
                    tab.innerHTML += `
                        <tr>
                            <td>${element.nombre}</td>
                            <td>${element.talla}</td>
                            <td>${element.edad}</td>
                            <td>${element.color}</td>
                            <td>${element.sexo}</td>
                            <td>${element.esterilizado}</td>
                            <td><img alt="image" class="thumbnail" src="${element.foto}"></td>
                            <td>${element.raza}</td>
                            <td>
                                <button onclick="deleteMascota(${element.id})" class="action-delete"><span class="icon-delete"></span>Eliminar</button>
                            </td>
                        </tr>
                    `;
                  });
                } else {
                  alert('Ha ocurrido un error, vuelva mas tarde');
                  window.location= 'index.php';
                }
            }else{
                alert('Ha ocurrido un error, intetelo mas tarde');
                window.location= 'index.php';
            }
        }
    });
}

function deleteMascota(idMascota) {
    console.log("eliminar mascotas");
    console.log(idMascota);

    $.post('php/deleteMascota.php',{id:idMascota},function(data){
        //Aqui se obtiene la respuesta 
        var data2 = JSON.parse(data);
        console.log(data2);
        if (data2!=null) {
            //Si se obtuvieron los datos correctos serán mostrados en pantalla
            if (data2.response == "SUCCESS") {
              console.log("SUCCESS");
              alert(data2.detail);
              window.location.reload();
            } else {
              alert('Ha ocurrido un error, intetelo mas tarde');
              window.location.reload();
            }
        }else{
            alert('Ha ocurrido un error, intetelo mas tarde');
            window.location= 'index.php';
        }
    });
}


/* 


    $.ajax({
        data: {id:idMascota},
        url:'php/deleteMascota.php',
        type: "POST",
        contentType: false,
        processData: false,
        beforesend: function () {},
        success: function(response) {
            let data2 = JSON.parse(response);
            console.log(data2);
        }
    });



    let values = {
        fotoF : ft.files[0]
    };

    console.log(values);
    $.ajax({
        data: values,
        url:'php/addMascota.php',
        type: "POST",
        contentType: false,
        processData: false,
        beforesend: function () {
            
        },
        success: function(response) {
            console.log(response);
        }
    });


    $.post('php/addMascota.php',values,function(data){
        //Aqui se obtiene la respuesta 
        var data2 = JSON.parse(data);
        console.log(data2);
        if (data2!=null) {
            //Si se obtuvieron los datos correctos serán mostrados en pantalla
            if (data2.response == "SUCCESS") {
              console.log("SUCCESS");
              alert(data2.detail);
            } else {
              alert('Ha ocurrido un error, intetelo mas tarde');
            }
        }else{
            alert('Ha ocurrido un error, intetelo mas tarde');
            window.location= 'index.php';
        }
    });



        let fileReader = new FileReader();
    fileReader.readAsDataURL(imagen);
    fileReader.onload = function(){
        let fb64 = fileReader.result;
        console.log(fb64);
        let values = {
            nombre: document.querySelector("#nombre").value,
            talla: document.querySelector("#talla").value,
            edad: document.querySelector("#edad").value,
            color: document.querySelector("#color").value,
            sexo: document.querySelector("#sexo").value,
            raza: document.querySelector("#raza").value,
            foto : fb64,
            descripcion: document.querySelector("#descripcion").value,
            razon: document.querySelector("#razon").value
        };
        console.log(values);
    }



*/