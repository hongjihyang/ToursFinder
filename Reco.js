function setting(){
    $.ajax({//ajax 호출하여 promise에 담음 
        method: "GET", 
        //url: "https://apis.data.go.kr/B551011/DataLabService/locgoRegnVisitrDDList", //시군구
        url : "https://apis.data.go.kr/B551011/DataLabService/metcoRegnVisitrDDList?",
        data: {  
            _type : "json", 
            ServiceKey : "NjS7mB+1abE6kCTNfK5Zw8pCWqr30r7agSG+fgKc9zB0H6r0zYJRaSPj7J9wimfuydxwGm+jhEqFzx4Q9XAgCQ==", 
            MobileOS : "ETC", 
            MobileApp : "AppTest",
            numOfRows : "10000",
            startYmd : "20220716",
            endYmd : "20220930"
        }, 
    }).then(function(result){//ajax 한건 당 후처리
        console.log(result);
    });
}