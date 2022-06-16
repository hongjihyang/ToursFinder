<?php
    header("Content-Type: text/html; charset=euc-kr");

    $seq = $_POST['seq'];
    $seq2 = $_POST['seq2'];


    $output = shell_exec("C:\\Users\\JYJ\\AppData\\Local\\Programs\\Python\\Python39\\python.exe C:\\APM_Setup\\htdocs\\test.py".' '.$seq.' '.$seq2);

    $temp= iconv("euc-kr", "utf-8", "$output");
    echo $temp;
?>