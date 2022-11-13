<?php

include "connect.php";

$user_email = $_GET["user_email"];
$user_password = $_GET["user_password"];


$sql = "select user_name from user_info where email='$user_email' and pw = '$user_password'";
$result=mysqli_query($conn, $sql);

$rows = mysqli_num_rows($result);
$data=mysqli_fetch_array($result);
if ($rows >= 1 && $data){
    session_start();
    $_SESSION['user_name'] = $data['user_name'];
    echo $_SESSION['user_name']; 
}
else{
    echo "";
}
?>