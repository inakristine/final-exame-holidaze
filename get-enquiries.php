<?php
    header('Access-Control-Allow-Origin: *'); 
    $enquiriesList = file_get_contents('./holidaze-client/public/enquiries.json');
    header('Content-Type: application/json');
    echo ($enquiriesList);
?>