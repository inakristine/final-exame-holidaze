<?php
    header('Access-Control-Allow-Origin: *'); 
    $enquiriesList = file_get_contents('./holidaze-client/src/json/enquiries.json');
    header('Content-Type: application/json');
    echo ($enquiriesList);
?>