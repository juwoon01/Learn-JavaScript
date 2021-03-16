// //step1
// $(function(){
//     $('#switcher-large').on('click',function(){
//         $('body').addClass('large').removeClass('narrow');
//     });

// //step2 removeClass()
//     $('#switcher-default').on('click',function(){
//         $('body').removeClass('large').removeClass('narrow');
//     });

//     $('#switcher-narrow').on('click',function(){
//         $('body').addClass('narrow').removeClass('large');
//     });
// });

// //step3: 클릭한 버튼만 selected 스타일 적용
// $(function(){
//     $('#switcher-large').on('click',function(){
//         $('body').addClass('large').removeClass('narrow');
//         $('.button').removeClass('selected');
//         $(this).addClass('selected');   
//     });

//     $('#switcher-default').on('click',function(){
//         $('body').removeClass('large').removeClass('narrow');
//         $('.button').removeClass('selected');
//         $(this).addClass('selected');
//     });

//     $('#switcher-narrow').on('click',function(){
//         $('body').addClass('narrow').removeClass('large');
//         $('.button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// });

// //step4: selected 관련 중복된 코드를 최소화
// $(function(){
//     $('#switcher-large').on('click',function(){
//         $('body').addClass('large').removeClass('narrow');
//     });

//     $('#switcher-default').on('click',function(){
//         $('body').removeClass('large').removeClass('narrow');
//     });

//     $('#switcher-narrow').on('click',function(){
//         $('body').addClass('narrow').removeClass('large');
//     });

//     $('#switcher .button').on('click',function(){
//         $('.button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// });

// //step5: 중복된 코드를 최소화
// $(function(){
//     $('#switcher .button').on('click',function(){
//         $('.button').removeClass('selected');
//         $(this).addClass('selected');
//         $('body').removeClass();//class 전부 삭제
//     });

//     $('#switcher-large').on('click',function(){
//         $('body').addClass('large');
//     });

//     $('#switcher-narrow').on('click',function(){
//         $('body').addClass('narrow');
//     });
// });

// //step6: .button에 모두 포함=> id로 구별(this.id)
// $(function(){
//     $('#switcher .button').on('click',function(){
//         $('.button').removeClass('selected');
//         $(this).addClass('selected');
//         $('body').removeClass();//class 전부 삭제
//         if($(this).attr('id') == "switcher-large"){
//             $('body').addClass('large');
//         } else if($(this).attr('id') == "switcher-narrow"){
//             $('body').addClass('narrow');
//         }
//     });
// });

// //step7: 이벤트 통합함수 => 개별함수
// $(function(){
//     $('#switcher .button').click(function(){
//         $('.button').removeClass('selected');
//         $(this).addClass('selected');
//         $('body').removeClass();//class 전부 삭제
//         if(this.id == "switcher-large"){
//             $('body').addClass('large');
//         } else if(this.id == "switcher-narrow"){
//             $('body').addClass('narrow');
//         }
//     });
// });

//step8: hover 이벤트
$(function(){
    $('#switcher .button').hover(function(){
        $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
    });
});

//step9: 스타일 변환기를 클릭 => 버튼 3게가 화면에서 사라지게
// $(function(){
//     $('#switcher > h3').click(function(){
//         $('#switcher > .button').toggleClass('hidden');//add, remove 동시에
//     });


//     $('#switcher .button').click(function(){
//         $('.button').removeClass('selected');
//         $(this).addClass('selected');
//         $('body').removeClass();//class 전부 삭제
//         if(this.id == "switcher-large"){
//             $('body').addClass('large');
//         } else if(this.id == "switcher-narrow"){
//             $('body').addClass('narrow');
//         }
//     });
// });

// //step10: 이벤트 버블링 방지
// $(function(){
//         $('#switcher').click(function(event){
//             event.stopPropagation();
//             $('#switcher > .button').toggleClass('hidden'); //add, remove 동시에
//         });
    
    
//         $('#switcher .button').click(function(){
//             $('.button').removeClass('selected');
//             $(this).addClass('selected');
//             $('body').removeClass();//class 전부 삭제
//             if(this.id == "switcher-large"){
//                 $('body').addClass('large');
//             } else if(this.id == "switcher-narrow"){
//                 $('body').addClass('narrow');
//             }
//         });
// });

//step11: on()으로 이벤트 발생 => off('click) 이벤트 해제
// large, narrow 버튼 클릭 후 버튼들이 사라지는 이벤트를 해제
$(function(){
    $('#switcher').on('click.kosta1',function(){
        
        $('#switcher > .button').toggleClass('hidden'); //add, remove 동시에
    });
    $('#switcher').on('click',function(){
        alert("다른 이벤트");
    });

    $('#switcher .button').click(function(event){
        $('.button').removeClass('selected');
        $(this).addClass('selected');
        $('body').removeClass();//class 전부 삭제

        if(this.id == "switcher-large"){
            $('body').addClass('large');
        } else if(this.id == "switcher-narrow"){
            $('body').addClass('narrow');
        }
        event.stopPropagation();
      //  $('#switcher').off('click');
    });

    $('#switcher-large, #switcher-narrow').click(function(){
        $('#switcher').off('click.kosta1');
    });

    $('#switcher').trigger('click.kosta1');//시작과 함깨 발생
});