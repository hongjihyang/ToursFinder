<?php
    include "connect.php";

    $sql = "select * from community order by date desc";
    $result=mysqli_query($conn, $sql);

    $rows = mysqli_num_rows($result);

    for($i=0;$i<$rows;$i++){
        $row= mysqli_fetch_array($result, MYSQLI_ASSOC);
         echo "$row[title]/$row[writer]/$row[date]/$row[view] ";
    }
?>