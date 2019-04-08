/*
var menu = document.querySelector("#menu_open");
var bmenu= document.querySelector("#samsna_backg");
var i = 0;
if(i === menu){
    menu.onclick(bmenu).css({"display":"#block"});
}
*/
/*
if(this.value === 'menu'){
    var aaaa = document.querySelector("#samsna_backg");
    var i = 0;
    while(i < aaaa.length){
        aaaa[i].style.display= 'block';
    };
};

$("menu_open").click(function(){
    getElementsByName("samsna_backg").css({"display":"block"})
})
*/

function menu_open(){
    if(document.querySelector('#menu_open').value === 'menu'){
        document.querySelector('.samsna_backg').style.display='block';
        document.querySelector('#menu_open').value = 'off';
    }else{
        document.querySelector('.samsna_backg').style.display='none';
        document.querySelector('#menu_open').value = 'menu';
    };
};

/*
if(document.querySelector("#menu_open").value === 'menu'){
$('#menu_open').click(function(){
    $('.samsna_backg').css('display','block');
    document.querySelector("#menu_open").value = 'off'
});

}else{
$('#menu_open').click(function(){
    $(".samsna_backg").css('display','none');
    document.querySelector("#menu_open").value = 'menu'
});
};

if(){
    $('#menu_open').click(function(){
        $('.samsna_backg').css('display','block');
});
    }else{
    $('#menu_open').click(function(){
        $(".samsna_backg").css('display','none');
});
}
*/