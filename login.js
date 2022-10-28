function userlogin(){
    let email = document.getElementById("id").value;
    let password = document.getElementById("password").value;

     //php전달
    $.get(
        "./login.php",
        {
          email: email,
          pw : password
      }, function(data){
        if(data=="login"){
          alert('로그인이 되었습니다.');
        }else{
          alert("ID 또는 PASSWORD가 틀렸습니다.");
        }
      });
}