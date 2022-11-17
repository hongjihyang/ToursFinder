function result(){

    var chk_arr = $("input[name='box']");

    for( var i=0; i<chk_arr.length; i++ ) {
        if( chk_arr[i].checked == true ) {
            console.log(chk_arr[i].value);
           var AreaCode = chk_arr[i].value;
        }
    }

    var TJ = ["A0101", "A0102", "A0201","A0202","A0203","A0204","A0205","A0302","A0303","A0304","A0305","A0401"]
    var TF = ["A0101", "A0102", "A0201","A0202","A0203","A0204","A0205","A0302","A0303","A0304","A0305","A0502"]
    var SP = ["A0101", "A0102", "A0201","A0202","A0203","A0204","A0205"]
    var SJ = ["A0101", "A0102", "A0201","A0202","A0203","A0204","A0205","A0401"]

    var cat1= "";
    var cat2= "";

    //S
    const ans3_1 = document.getElementsByName("radio8-1"); //T
    const ans3_2 = document.getElementsByName("radio8-2"); //F

    const ans4_1 = document.getElementsByName("radio9-1"); //T
    const ans4_2 = document.getElementsByName("radio9-2"); //F

    const ans5_1 = document.getElementsByName("radio10-1"); //T
    const ans5_2 = document.getElementsByName("radio10-2"); //F
    //N
    const ans6_1 = document.getElementsByName("radio11-1"); //J
    const ans6_2 = document.getElementsByName("radio11-2"); //P

    if(ans3_1 & ans4_1){//tj
        su= Math.floor(Math.random() * 12)
        cat2 = TJ[su];
    }
    else if(ans4_1 & ans5_1){//tj
        su= Math.floor(Math.random() * 12)
        cat2 = TJ[su];
    }
    else if(ans3_1 & ans5_1){ //tj
        su= Math.floor(Math.random() * 12)
        cat2 = TJ[su];
    }
    else if(ans3_2 & ans4_2){//tf
        su= Math.floor(Math.random() * 12)
        cat2 = TF[su];
    }
    else if(ans4_2 & ans5_2){//f
        su= Math.floor(Math.random() * 12)
        cat2 = TF[su];
    }
    else if(ans3_2 & ans5_2){//f
        su= Math.floor(Math.random() * 12)
        cat2 = TF[su];
    }
    else if(ans6_1){//j
        su= Math.floor(Math.random() * 8)
        cat2 = SJ[su];
    }
    else if(ans6_2){ //p
        su= Math.floor(Math.random() * 7)
        cat2 = SP[su];
    }

    cat1 = cat2.slice(0,3);

    //console.log(AreaCode);
    console.log(cat1);
    console.log(cat2);


    $.ajax({//ajax 호출하여 promise에 담음 
        method: "GET", 
        url: "http://apis.data.go.kr/B551011/KorService/areaBasedList", 
        data: {  
            numOfRows : "12", 
            _type : "json", 
            ServiceKey : "NjS7mB+1abE6kCTNfK5Zw8pCWqr30r7agSG+fgKc9zB0H6r0zYJRaSPj7J9wimfuydxwGm+jhEqFzx4Q9XAgCQ==", 
            MobileOS : "ETC", 
            MobileApp : "AppTest", 
            listYN : "Y",
            arrange : "A",
            areaCode : AreaCode,
            cat1 : cat1,
            cat2 : cat2
        }, 
    }).then(function(result){//ajax 한건 당 후처리
        console.log(result);
    });
}