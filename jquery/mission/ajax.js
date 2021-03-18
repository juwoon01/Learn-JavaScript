let lastIndex = 100;
let firstIndex = 0;
$(function(){
    $('input').click(function(){
        $.ajax({
            url: 'MOCK_DATA.json',
            type: 'get',
            dataType: 'json',
            success: successHandler
        });//end ajax
    });//end click
});

function successHandler(data){
    $.each(data,function(index, item){
        if(index >= firstIndex && index < lastIndex){
            let html = '<div> ';
            html += '<span>id: '+item.id +'</span>';
            html += '<span>이름: '+item.name +'</span>';
            html += '<span> 국적: '+item.country+'</span>';
            html += '<span> 도시: '+item.city+'</span>';
            html += '</div>';
            $('#list').append(html);
        }else if(index >= lastIndex){
            lastIndex += 100;
            firstIndex += 100;
            return false;
        }
    });
};

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= $('body').height() - $(this).height()){
            $.ajax({
                url: 'MOCK_DATA.json',
                type: 'get',
                dataType: 'json',
                success: successHandler
            });//end ajax
        }
    });//end click
});