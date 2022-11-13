function session(){
    $.get(
        "./session.php",
        {
      }, function(data){
        if(data){
        
          //아이콘 유저 이름 나오게 하기
          document.getElementById("txt_login").text = data;
          //마이페이지 이동
          document.getElementById("img_login").href = "mypage.html";
          document.getElementById("txt_login").href = "mypage.html";
          //로그아웃 버튼 보이게 하기
          document.getElementById("logOut").style.display="block";

          console.log("session 상태 : ", data);
        }
        else{
            document.getElementById("txt_login").text = "로그인";
            //이미지,텍스트 클릭 시 로그인 화면으로 이동
            document.getElementById("img_login").href = "login.html"
            document.getElementById("txt_login").href = "login.html"
            console.log("session 상태 : X");
            //로그아웃 버튼 안보이게 하기
            document.getElementById("logOut").style.display="none";
        }
    });
}