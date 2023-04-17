$('.toggle').click(function(){
    $('.toggle, .totalscreen, .gnb').toggleClass('active')
})
$('.gnb a').click(function(){
    $('.toggle, .totalscreen, .gnb').removeClass('active')
})