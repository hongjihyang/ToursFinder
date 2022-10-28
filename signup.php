<?php
    
    include "connect.php";

    $email = $_GET['email'];
    $user_name = $_GET['user_name'];
    $pw = $_GET['pw'];
    $phone_number = $_GET['phone_number'];
    $area = $_GET['area'];
    $gender = $_GET['gender'];

    $sql = "insert into user_info value('$email', '$user_name', '$pw', '$phone_number', '$area', '$gender')";
    $result=mysqli_query($conn, $sql);
    echo $result;

    mysqli_close($conn);
    
?>
