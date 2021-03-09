function kosta2(){
    alert("코스타");
    document.write("<b>kosta2</b>");
}

window.onload = function(){//html을 다 읽어 들인 후에 이 함수를 실행한다.
    var btn = document.getElementById("btn");
    btn.onclick = kosta2;//변수에 함수를 넣는것
}