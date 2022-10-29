<?php
    include "connect.php";

    $email = $_GET['email'];

    $sql = "select email from user_info where email='$email'";
    $result=mysqli_query($conn, $sql);
    
    if ($result){
        echo "dupl";
    } else{
        echo "not dupl";
    }
?>