<?php

require("conexion.php");

$nombre=$_POST['nombre'];
$color=$_POST['color'];
$sexo=$_POST['sexo'];
$esterilizado=$_POST['esterilizado'];
$talla=$_POST['talla'];
$edad=$_POST['edad'];
$raza=$_POST['raza'];
$foto=$_POST['foto'];

$addMascota ="INSERT INTO `mascotas` 
(`nombre`, `color`, `sexo`, `esterilizado`, `talla`, `edad`, `raza`, `foto`) 
VALUES (:nombre, :color, :sexo, :esterilizado, :talla, :edad, :raza, :foto)";
$mascotaRow=[
  'nombre'=>$nombre,
  'raza'=>$raza,
  'esterilizado'=>$esterilizado,
  'sexo'=>$sexo,
  'color'=>$color,
  'edad'=>$edad,
  'foto'=>$foto,
  'talla'=>$talla
];
$mascotaQuery = $pcn->prepare($addMascota);
if($mascotaQuery->execute($mascotaRow)){
  echo json_encode(array("response"=>"SUCCESS", "detail"=>"Mascota registrado con exito"));
}else{
  echo json_encode(array("response"=>'ERROR',"detail"=>$mascotaQuery->errorInfo()));
}


$conn->close();

?>