<?php
    include "connect.php";

    $col_num = $_GET["col_num"];

    $sql = "select * from community where idx=$col_num";
    $result=mysqli_query($conn, $sql);
    $row= mysqli_fetch_array($result, MYSQLI_ASSOC);
    echo "$row[title]/$row[writer]/$row[date]/$row[content] ";

    $viewCount = (int)$row['view']+1;
    $sql = "update community set view=$viewCount where idx=$col_num";
    $result=mysqli_query($conn, $sql);
?>