$(function(){
    const $speech = $('div.speech'); //jquery 변수는 변수명 앞에 $로 구분
    const defaultSize = $speech.css('fontSize');// == const defaultSize = $speech.css('font-size');//12px
    
    $('#switcher button').click(function(){
        let num = parseInt($speech.css('fontSize'));//parseInt는 변환 가능한 숫자만 return (12)

        switch(this.id){
            case "switcher-large":
                num *= 1.2;
                break;
            case "switcher-small":
                num /= 1.2;
                break;
            default:
                num = parseInt(defaultSize);
                break;
        }
        $speech.animate({fontSize: num+'px'},'slow');
    });
});

$(function(){
    $('div.label').click(function(){
        const pWidth = $('div.speech p').outerWidth();
        const divWidth = $('#switcher').outerWidth();
        const num = parseInt(pWidth) - parseInt(divWidth);
        $('#switcher').fadeTo('fast',0.5)
                        .animate({marginLeft: num}, 'slow')
                        .fadeTo('fast',1.0)
                        .slideUp('slow', function(){
                        $(this).css('background','red');
                        })
                        .slideDown('slow');
        });
});

$(function(){
    //2번째 p태그 숨김
    //slideToggle
    //read more <=> read less : text()
   
    const $tagP = $('div.speech').find('p').eq(1);
    $tagP.css('display','none');
    //$('div.speech p').eq(1).hide();


    $('a.more').click(function(){
        $tagP.slideToggle('slow');
        const $link = $(this);//this를 많이 사용하면 가독성이 떨어진다.
        if($link.text() == "read more"){
            $link.text("read less");
        }else{
            $link.text("read more");
        }
    });
})

