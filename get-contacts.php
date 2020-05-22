<?php
    header('Access-Control-Allow-Origin: *'); 
    $contactList = file_get_contents('./holidaze-client/public/contact.json');
    header('Content-Type: application/json');
    echo ($contactList);
?>