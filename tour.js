function setting(tab_number){
    console.log(tab_number);
    
    if(tab_number=="1"){
        var area_code = "31";
        var lis = document.getElementById("conbox1").getElementsByTagName("li");
    }else if(tab_number=="2"){
        var area_code = "33";
        var lis = document.getElementById("conbox2").getElementsByTagName("li");
    }else if(tab_number=="3"){
        var area_code = "35";
        var lis = document.getElementById("conbox3").getElementsByTagName("li");
    }else if(tab_number=="4"){
        var area_code = "37";
        var lis = document.getElementById("conbox4").getElementsByTagName("li");
    }else{
        var area_code = "32";
        var lis = document.getElementById("conbox5").getElementsByTagName("li");
    }
    console.log(area_code);
    
    

    //호출
    let areaBasedList = [];
    let index=0;
    $.ajax({
        method: "GET",
        url: "http://apis.data.go.kr/B551011/KorService/areaBasedList",
        data: { 
            numOfRows : "16",
            pageNo : "1",
            _type : "json",
            ServiceKey : "NjS7mB+1abE6kCTNfK5Zw8pCWqr30r7agSG+fgKc9zB0H6r0zYJRaSPj7J9wimfuydxwGm+jhEqFzx4Q9XAgCQ==",
            MobileOS : "ETC",
            MobileApp : "AppTest",
            areaCode : area_code
        }
        })
    .then(function(result){
        console.log(result);
        result.response.body.items.item.map(item =>{
            if(item.firstimage != '' || item.firstimage2 != ''){
                areaBasedList.push(item);
            }
        });
        areaBasedList.map(item => {
            const message1 = item.addr1;
            const arr1 = message1.split(" ")[1];


            lis[index].querySelector('img').src=item.firstimage;
            lis[index].querySelector('#arr1').innerHTML  = arr1.substr(0,2);
            lis[index].querySelector('.title').innerHTML  = item.title;
            lis[index].querySelector('#tour_address').innerHTML  = message1;

            index+=1;
            //console.log(item.addr1,"<tr>",item.title);
        });
    }); 
}