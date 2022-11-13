function loginOut(){
    $.get(
        "./logOut.php",
        {
      }, function(data){
        alert(data);
        location.href = "MainPage.html"
    });
}