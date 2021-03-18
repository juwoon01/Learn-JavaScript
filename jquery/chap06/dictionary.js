
//step1
$(function(){
    $('#letter-a a').click(function(){
        $('#dictionary').hide().load('a.html', function(){
            $(this).fadeIn();
        });
        return false;
    });
});

// //step2
// $(function(){
//     $('#letter-b a').click(function(){
//         $.getJSON('b.json', function(data){//data에 json 값이 온다.
//             //json -> html
//             $('#dictionary').html(" ").hide();
//             $.each(data,function(index, item){
//                 let html = '<div class="entry">';
//                 html += '<h3 class="term">'+item.term +'</h3>';
//                 html += '<div class="part">'+item.part+'</div>';
//                 html += '<div class="definition">'+item.definition+'</div>';
//                 html += '</div>';

//                 $('#dictionary').append(html);
//             });//end each
//             $('#dictionary').fadeIn();
//         });//end json
//         return false;
//     });//end click
// });

// //step3
// $(function(){
// 	$('#letter-c a').click(function(){
// 		$.getJSON('ajax01.jsp',function(data){
// 			 $('#dictionary').html(" ").hide();
			
// 			let html = '<table border="1">';
// 			html += '<tr>';
// 			html += '<th>이름</th>';
// 			html += '<th>주소</th>';
// 			html += '</tr>';
// 			$.each(data, function(index, item){
// 				html += '<tr>';
// 				//html += '<th>'+item.name+'</th>';
// 				html += `<th>${item.name}</th>`;
// 				html += '<th>'+item.address+'</th>';
// 				html += '</tr>';
// 			});//end each
// 			html += '</table>';
// 			$('#dictionary').append(html).fadeIn();
// 		});//end json
// 		  return false;
// 	});//end click
// });

//step4
$(function(){
    $('#letter-c a').click(function(){
        $.getScript('c.js');
        return false;
    });
});

//step5
$(function(){
    $('#letter-d a').click(function(){
        $.get('d.xml',function(data){
            $(data).find('entry').each(function(index){
                $entry = $(this);

                let html = '<div class="entry">';
                html += '<h3 class="term">'+$entry.attr('term') +'</h3>';
                html += '<div class="part">'+$entry.attr('part')+'</div>';
                html += '<div class="definition">'+$entry.find('definition').text()+'</div>';
                html += '</div>';

                $('#dictionary').append(html);
            });
        });
        return false;
    });
});

// //step6
// $(function(){
//     $('#letter-e a').click(function(){
//         $.get('server3.jsp',{'term': $(this).text()},function(data){
//             $('#dictionary').html(data);
//         });
//         return false;
//     });
// });

//step6-1
$(function(){
    $('#letter-e a').click(function(){
        $.ajax({
            url: 'server3.jsp',
            type: 'get',
            dataType: 'text',
            data: {'term': $(this).text()},
            success: function(data){
                $('#dictionary').html(data);
            }
        });
        return false;
    });
});

function successHandler(data){
    $('#dictionary').html(data);
};

//step7
$(function(){
    $('#letter-f form').submit(function(){
        $.ajax({
            url: 'server3.jsp',
            type: 'post',
            dataType: 'text',
            data: $(this).serialize(),//form 안의 모든 값을 키벨류 형식으로 변환
            success: successHandler
        });
        return false;
    });
});

//step2_1
$(function(){
    $('#letter-b a').click(function(){
        $.ajax({
            url: 'b.json',
            type: 'post',
            dataType: 'json',
            success: function(data){
                $('#dictionary').empty().hide();

                data.sort(function(a,b){
                    if(a.term < b.term){
                        return 1;
                    }else if(a.term < b.term){
                        return -1;
                    }else{
                        return 0;
                    }
                });

                $.each(data,function(index, item){
                    let html = '<div class="entry">';
                    html += '<h3 class="term">'+item.term +'</h3>';
                    html += '<div class="part">'+item.part+'</div>';
                    html += '<div class="definition">'+item.definition+'</div>';
                    html += '</div>';
    
                    $('#dictionary').append(html);
                });//end each
                $('#dictionary').fadeIn();
            }
        });//end ajax
        return false;
    });//end click
});