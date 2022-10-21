$(document).ready(function(){
    var toDay = new Date();
    var year = toDay.getFullYear();
    var month = toDay.getMonth() + 1;
    var days = toDay.getDate();

    $(".date").text(year + "-" + String(month).padStart(2, "0") + "-" + String(days).padStart(2, "0"))
});

//게시판 페이징네이션
function paging(totalDate, currentPage){
  const dataPerPage = 10;
  const pageCount = 5;

  //consloe.log("currentPage : " + currentPage);
  //consloe.log("totalDate : " + totalData);
  const totalPage = Math.ceil(totalDate / dataPerPate) //총 페이지 수 

  // console.log("pageGroup : " pageGroup);
  // console.log("totalPage : " totalPage);
  let last = pageGroup * pageCount; //화면에 보여질 마지막 페이지 번호
  if(last > totalPage){
    last = totalPage;
  }
  let first = last - (pageCount - 1); // 화면에 보여질 첫번째 페이지 번호
  const next = last + 1;
  const prev = first - 1;

  if(totalPage < 1){
    first = last;
  }
  const pages = $("#pages");
  pages.empty();
  if(first > 5){
    pages.append("li class=\"pagination-item\">" +
    "<a onclick=\"GetTarget(" + (prev) + 
    )
  }
}