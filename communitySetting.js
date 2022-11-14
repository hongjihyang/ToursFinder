function commSetting(){
    let res  = document.getElementsByClassName("board"); 

    $.get(
        "./communitySetting.php",
        {
        }, function(data){

        var afterStr = data.split(' ');

        idx=(afterStr.length)-1;

        for(var i=0; i<(afterStr.length)-1; i++){
            var afterStr2= afterStr[i].split('/');
            
            res[0].getElementsByTagName("tr")[i].style.display="";

            res[0].getElementsByTagName("tr")[i].querySelector("#lis").innerText=idx;
            res[0].getElementsByTagName("tr")[i].querySelector("#a_tit").innerText=afterStr2[0];
            res[0].getElementsByTagName("tr")[i].querySelector("#writer").innerText=afterStr2[1];
            res[0].getElementsByTagName("tr")[i].querySelector("#date").innerText=afterStr2[2];
            res[0].getElementsByTagName("tr")[i].querySelector("#view").innerText=afterStr2[3];

            idx--;
        }
    });
}