// Смена картикнки

$(".selection_citroen").click(function(){
    $('.auto').attr('src', 'img/standard+c+.jpg');
});

$(".mazda_selection").click(function(){
    $('.auto').attr('src', 'img/стандарт+maz+.jpg');
});

$(".mercedes_selection").click(function(){
    $('.auto').attr('src', 'img/стандарт+m+ 2.jpg');
});

// Добавление курсора 

$('.selection_citroen').click(function(){
    $('.pointer_citroen').addClass('on');
    $('.pointer_mazda').removeClass('on');
    $('.pointer_mercedes').removeClass('on');
});

$('.mazda_selection').click(function(){
    $('.pointer_mazda').addClass('on');
    $('.pointer_citroen').removeClass('on');
    $('.pointer_mercedes').removeClass('on');
});

$('.mercedes_selection').click(function(){
    $('.pointer_mercedes').addClass('on');
    $('.pointer_citroen').removeClass('on');
    $('.pointer_mazda').removeClass('on');
});

// Добавление курсора hovera

$(".mini").hover(function(){
    $('.auto').attr('src', 'img/minimal.jpg');
});

$(".standard").hover(function(){
    $('.auto').attr('src', 'img/standard.jpg');
});

$(".standard_plus").hover(function(){
    $('.auto').attr('src', 'img/standard+.jpg');
});

$(".standard_plus_plus").hover(function(){
    $('.auto').attr('src', 'img/standard+c+.jpg');
});

$(".standard_plus_plus_plus").hover(function(){
    $('.auto').attr('src', 'img/standard+++.jpg');
});

$(".all").hover(function(){
    $('.auto').attr('src', 'img/all.jpg');
});

// Доп меню

$('#part').on('click', function(){    
    $('.one').toggle();
});

// ховер по меню 

$(".no_valid").hover(function(){
    $('.valid').css('background', '#fff');
    $('.valid').css('position', 'static');
});

