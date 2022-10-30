let tourList= []; 
let areaBasedList = [];

function setting(){

    let arrParam = [
        {areaCode : '31',end : 31},
        {areaCode : '33',end : 12},
        {areaCode : '35',end : 23},
        {areaCode : '37',end : 14},
        {areaCode : '32',end : 18},
        {areaCode : '39',end : 4}
    ]

    let res  = document.getElementsByClassName("swiper-slide");

    res[i].querySelector("#area").innerHTML = arr1.substr(0,2);
    res[i].querySelector("#place").innerHTML = item.title;
    res[i].getElementsByTagName("img")[0].src = item.firstimage;
    

    for(let i=0; i<6; i++){
        const rand1 = Math.floor(Math.random() * 6);

        let selectedArrParam = arrParam[rand1]; 
        let endNum = selectedArrParam.end;

        const sigungu = Math.floor(Math.random() * endNum-1)+1;

        $.ajax({
            method: "GET",
            url: "http://apis.data.go.kr/B551011/KorService/areaBasedList",
            data: { 
                numOfRows : "12",
                pageNo : "1",
                _type : "json",
                ServiceKey : "NjS7mB+1abE6kCTNfK5Zw8pCWqr30r7agSG+fgKc9zB0H6r0zYJRaSPj7J9wimfuydxwGm+jhEqFzx4Q9XAgCQ==",
                MobileOS : "ETC",
                MobileApp : "AppTest",
                areaCode : selectedArrParam.areaCode.toString(),
                sigunguCode : sigungu.toString()
            },
            async : false
        })
        .then(function(result){
            console.log(selectedArrParam.areaCode, " ", sigungu);
            const item = result.response.body.items.item[0];

            if(result.response.body.items == ''){
                i--;
            }else{
                if(item.firstimage != '' || item.firstimage2 != ''){
                    const message1 = item.addr1;
                    const arr1 = message1.split(" ")[1];
                    const temp = {area : arr1.substr(0,2), place : item.title, image : item.firstimage}
                    areaBasedList.push(temp);
                    console.log(temp);
                    
                    
                    
                }
            }
            console.log("i : "+ i);
        }); 
    }
    
}