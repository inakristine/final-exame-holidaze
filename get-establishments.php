<?php
header('Access-Control-Allow-Origin: *'); 
$establishmentsList = file_get_contents('./holidaze-client/src/json/establishments.json');


header('Content-Type: application/json');
echo ($establishmentsList);

?>

