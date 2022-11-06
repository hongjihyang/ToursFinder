let areaList= [];  
let areaBasedList = [];
let swiperList = []; 
let resultCnt = 0;
let res  = document.getElementsByClassName("swiper-slide"); 
img=0;
function setting(){ 
 
    const arrParam = [ 
        {areaCode : '1',end : 25}, 
        {areaCode : '2',end : 10}, 
        {areaCode : '3',end : 5}, 
        {areaCode : '4',end : 8}, 
        {areaCode : '5',end : 5}, 
        {areaCode : '6',end : 16}, 
        {areaCode : '7',end : 5}, 
        {areaCode : '31',end : 31}, 
        {areaCode : '33',end : 12}, 
        {areaCode : '35',end : 23}, 
        {areaCode : '37',end : 14}, 
        {areaCode : '32',end : 18}

    ] 
    
    //지역코드
    for (i=0; i<12; i++) {
        su = Math.floor(Math.random() * 12)
        if (areaList.indexOf(su) === -1) {
            areaList.push(su)
        } else {
          i--
        }
    }


    for(let i=0; i<areaList.length; i++){
    
        AreaCode = arrParam[areaList[i]].areaCode;
        Sigungu = 0;
        if(AreaCode== '39'){
            Sigungu = 4;
        }
        else if(AreaCode== '8'){
            Sigungu = 1;
        }
        else{
            Sigungu=(Math.floor(Math.random() * arrParam[areaList[i]].end +1)).toString();
        }
        
        request(AreaCode, Sigungu);
    }
    
    //output

}

function request(AreaCode, Sigungu){
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
            sigunguCode : Sigungu 
        }, 
    }).then(function(result){//ajax 한건 당 후처리
        if(result){
            console.log("Ajax Call Success");
            SuccessPromised(result);// 지금 받아온 1건 당 하단 SuccessPromised 함수 호출 ==> 순서 보장된 상태로 한건씩 처리 가능
        }
        else{
            console.log(reject(new Error("Request is failed")));// 요청이 비정상일 시 오류
        }
    });
}

function SuccessPromised(resultList){
    const itemParam = resultList.response.body.items.item;

    su = Math.floor(Math.random() * 12+1);

    while(!itemParam[su] || itemParam[su].firstimage == ""){
        su = Math.floor(Math.random() * 12+1);
    }

    console.log(itemParam[su]);

    const message1 = itemParam[su].addr1;
    const arr1 = message1.split(" ")[1];

    res[img].querySelector("#area").innerHTML = arr1.substr(0,2);  // arr1이 addr1 split한 다음 substr했던건가..
    res[img].querySelector("#place").innerHTML = itemParam[su].title; 
    res[img].getElementsByTagName("img")[0].src = itemParam[su].firstimage; 
    img++;
}