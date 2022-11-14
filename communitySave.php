<?php
    session_start();

    include "connect.php";

    $title = $_POST["title"];
    $content = $_POST["content"];
    $writer = $_SESSION['user_name'];
    $date = date("Y-m-d");
    $view = 0;

    // echo "제목 : ".$title."</br>";
    // echo "내용 : ".$content."</br>";
    // echo "글쓴이 : ".$writer."</br>";
    // echo "날짜 : ".$date."</br>";

    $sql = "insert into community(title, content, writer, date, view)VALUES('".$title."','".$content."','".$writer."','".$date."','".$view."');";
    
    $result = mysqli_query($conn, $sql);

    if($result){
        echo "성공";
    }else{
        echo mysqli_error($conn);
    }

   mysqli_close($conn);

    echo "<script>alert('저장되었습니다.');</script>";
    echo "<script>location.href = 'community.html'</script>";
    
?>