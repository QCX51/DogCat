<?php
//Se llama al codigo que zhace la conexion a la base de datos
require("conexion.php");
//Se obtinen los datos
$nombre=$_POST['nombre'];
$sexo=$_POST['sexo'];
$talla=$_POST['talla'];
$raza=$_POST['raza'];
//Se hace la consulta para obtener los datos de las mascotas
$mascotas ="SELECT foto, id, nombre
FROM mascotas 
WHERE (nombre = :nombre or sexo = :sexo or talla = :talla) and raza = :raza";
$mascotasRow=[
    'nombre'=>$nombre,
    'sexo'=>$sexo,
    'talla'=>$talla,
    'raza'=>$raza
];
$mascotasQuery = $pcn->prepare($mascotas);
if($mascotasQuery->execute($mascotasRow)){
    $resultMascotas = $mascotasQuery->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(array("response"=>"SUCCESS", "detail"=>$resultMascotas));
}else{
    echo json_encode(array("response"=>'ERROR',"detail"=>$mascotasQuery->errorInfo()));
}
 
$conn->close();

?>
