function viewSetting(){
    var link = document.location.href;
    var afterStr1 = link.split('?');
    var afterStr2 = afterStr1[1].split('=')[1]
    

    $.get(
        "./comm_view_setting.php",
        {
            col_num : afterStr2
        }, function(data){

            
            var afterStr1= data.split('/');
            let res  = document.getElementsByClassName("borad_view con row"); 

            res[0].getElementsByTagName("tr")[0].querySelector("#a_tit").innerHTML=afterStr1[0];
            res[0].getElementsByTagName("tr")[1].querySelector("#writer").innerHTML=afterStr1[1];
            res[0].getElementsByTagName("tr")[1].querySelector("#date").innerHTML=afterStr1[2];
            res[0].getElementsByTagName("tr")[2].querySelector("#content").innerText=afterStr1[3];
    });
}