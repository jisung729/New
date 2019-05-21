
function menu_open(){
    if(document.querySelector('#menu_open').value === 'MENU'){
        document.querySelector('#samsna_backg').style.display='block';
        document.querySelector('#menu_open').value = 'Close';
    }else{
        document.querySelector('#menu_close').value === 'Close'
        document.querySelector('#samsna_backg').style.display='none';
        document.querySelector('#menu_open').value = 'MENU';
    };
};

function sub_menu_m(){
    if(document.querySelector('.samsna_text-m').value ==='sub_menu_on'){
        document.querySelector('.samsna_sub_menu_m').style.display='none';
        document.querySelector('.samsna_text-m').value = 'sub_menu_off';
    }else{
        document.querySelector('.samsna_text-m').value ==='sub_menu_off'
        document.querySelector('.samsna_sub_menu_m').style.display='block';
        document.querySelector('.samsna_text-m').value = 'sub_menu_on';
    };
};

function sub_menu_w(){
    if(document.querySelector('.samsna_text-w').value ==='sub_menu_on'){
        document.querySelector('.samsna_sub_menu_w').style.display='none';
        document.querySelector('.samsna_text-w').value = 'sub_menu_off';
    }else{
        document.querySelector('.samsna_text-w').value ==='sub_menu_off'
        document.querySelector('.samsna_sub_menu_w').style.display='block';
        document.querySelector('.samsna_text-w').value = 'sub_menu_on';
    };
};

$(document).ready(function(){
    $('#shop').click(function(){
        if(document.getElementById('hover_backg').className === 'remover_hover_backg'){
            $('#hover_backg').addClass('add_hover_backg').removeClass('remover_hover_backg');
        }else{
            $('#hover_backg').addClass('remover_hover_backg').removeClass('add_hover_backg');
        };
    });
    $("#hover_backg").mouseleave(function(){
        $("#hover_backg").removeClass("add_hover_backg");
        $('#hover_backg').addClass('remover_hover_backg');
      });
});


$(window).on('scroll',function(){
    if($(window).scrollTop()>100){
        $('.header_menu-b').addClass('musdownbg');
    }else{
        $('.header_menu-b').removeClass('musdownbg');
    };
});

$("a").length

document.getElementById("Search_input").onmouseover = function(){
    this.setAttribute("value","");
    this.style.color = "white";
};

























