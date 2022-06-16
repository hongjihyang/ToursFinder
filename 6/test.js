function test() {

    console.log("전송하였습니다.");

    var obj = document.getElementsByName("box");
    var check_area = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var check_answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (var i = 0; i < obj.length; i++) {

        if (obj[i].checked == true) {
            if (i < 17)
                check_area[i] = 1;
            else
                check_answer[i - 17] = 1;
        }
    }

    const area = check_area.join(',');
    const answer = check_answer.join(',');

    $.post(
        "./test.php", { seq: area, seq2: answer }, function (data) {
            console.log(data);

            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "test.csv");
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status == 0) {
                        var allText = rawFile.responseText;
                        document.getElementsByName("textbox").text(allText);
                        console.log("text박스에 반영");
                    }
                }
            }
            rawFile.send(null);

        });
}