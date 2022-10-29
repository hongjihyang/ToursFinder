function userlogin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

     //php전달
     $.get(
      "./login.php",
      {
        user_email: email,
        user_password : password
    }, function(data){
      if(data != "not login"){
        alert(data + '님 환영합니다!');
        location.href = "/MainPage.html"
      }else{
        alert("ID 또는 PASSWORD가 틀렸습니다.");
      }
    });
}

