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
$('#menu_open').click(function(){
    $('.samsna_backg').css('display','block');
});


