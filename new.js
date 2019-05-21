
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
    $('.menu_but').click(function(){
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

document.getElementById("Search_input").onmouseover = function(){
    this.setAttribute("value","");
    this.style.color = "white";
};
// overflow-x: hidden; css에 이거 들어가있으면 동작 안함.
$(window).scroll(function() {
	var scroll_top = $(window).scrollTop();
  if(scroll_top > 50) {
		$('.header_menu-b').addClass('add_menu_b');
	} else {
		$('.header_menu-b').removeClass('add_menu_b');
	}
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".up_img").style.display = "block";
  } else {
    document.querySelector(".up_img").style.display = "none";
  };
};
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }









