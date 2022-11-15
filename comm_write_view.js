function wrtie_view(idx){
    let res  = document.getElementsByClassName("board")[0].getElementsByTagName("tr")[idx].querySelector("#lis").innerHTML;
    location.href = "comm_write_view.html?content="+res

}