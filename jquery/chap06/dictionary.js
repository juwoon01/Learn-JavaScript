
//step1
$(function(){
    $('#letter-a a').click(function(){
        $('#dictionary').hide().load('a.html', function(){
            $(this).fadeIn();
        });
        return false;
    });
});

//step2
$(function(){
    $('#letter-b a').click(function(){
        $.getJSON('b.json', function(data){//data에 json 값이 온다.
            //json -> html
            $('#dictionary').html(" ").hide();
            $.each(data,function(index, item){
                let html = '<div class="entry">';
                html += '<h3 class="term"'+item.term +'</h3>';
                html += '<div class="part">'+item.part+'</div>';
                html += '<div class="definition">'+item.definition+'</div>';
                html += '</div>';

                $('#dictionary').append(html);
            });//end each
            $('#dictionary').fadeIn();
        });//end json
        return false;
    });//end click
});

//step3
$(function(){
	$('#letter-c a').click(function(){
		$.getJSON('ajax01.jsp',function(data){
			 $('#dictionary').html(" ").hide();
			
			let html = '<table border="1">';
			html += '<tr>';
			html += '<th>이름</th>';
			html += '<th>주소</th>';
			html += '</tr>';
			$.each(data, function(index, item){
				html += '<tr>';
				//html += '<th>'+item.name+'</th>';
				html += `<th>${item.name}</th>`;
				html += '<th>'+item.address+'</th>';
				html += '</tr>';
			});//end each
			html += '</table>';
			$('#dictionary').append(html).fadeIn();
		});//end json
		  return false;
	});//end click
});