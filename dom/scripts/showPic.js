function showPic(obj){
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",obj.getAttribute("href"));

    let description = document.getElementById("description");
    if(description.firstChild.nodeType == 3){//text
        description.firstChild.nodeValue = obj.getAttribute("title");
    }
}

window.onload = function(){
    let gallery = document.getElementById("imagegallery");
    let a = gallery.getElementsByTagName("a");
    for(let i = 0; i < a.length; i++){
       // a[i].setAttribute("onclick","showPic(this); return false;");

    //    a[i].onclick = function(){
    //        showPic(this);
    //        return false;//기본 이벤트 취소
    //    };
        
        a[i].addEventListener("click",function(event){
            showPic(this);
            event.preventDefault();//기본 이벤트 취소
        },false);
    }
}