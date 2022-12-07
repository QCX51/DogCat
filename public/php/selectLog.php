<?php 
//Se llama al codigo que zhace la conexion a la base de datos
require("conexion.php");
//Se obtinen los datos
$email=$_POST['email'];
$upassword=$_POST['password'];
$retorno = array();
//Se obtinen los datos
$event ="SELECT correo, contraseña FROM usuario WHERE correo = :correo";
$eventRow=['correo'=>$email];
$eventQuery = $pcn->prepare($event);
if($eventQuery->execute($eventRow)){
  $result = $eventQuery->fetchAll(PDO::FETCH_ASSOC);
  if($result){
    foreach($result as $row1){
        $passwordDB = $row1['contraseña'];
    }
    if($upassword==$passwordDB){
      echo json_encode(array(
        "response"=>'SUCCESS',
        "detail"=>"Acceso concedido"
      ));
    }else{
      echo json_encode(array(
        "response"=>'ERROR1',
        "detail"=>"La contraseña es incorrecta"
      ));
    }
  }else{
    echo json_encode(array(
      "response"=>'ERROR1',
      "detail"=>"El usuario no se encuentra registrado"
    ));
  }
}else{
  echo json_encode(array("response"=>'ERROR',"detail"=>$eventQuery->errorInfo()));
}

$conn->close();

?>