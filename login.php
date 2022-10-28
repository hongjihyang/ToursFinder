<?php

    include "connect.php";

    $email = $_GET['email'];
    $password = $_GET['pw'];

    $sql_id = "select email from user_info where email='$email'";
    $result_id=mysqli_query($conn, $sql_id);

    $sql_pw = "select pw from user_info where pw='$password'";
    $result_pw=mysqli_query($conn, $sql_pw);

    
    if ($result_id and $result_pw){
        echo "login";
    } else{
        echo "not login";
    }
    
    /*
    if (!$result_id){
        echo "id틀림";
    }
    if(!result_pw){
        echo "pw틀림";
    }
*/
?>