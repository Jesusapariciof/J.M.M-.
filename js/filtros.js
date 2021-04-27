//Filtros//

$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if(valor === 'todos'){
            $('.cont-work').show('1000');
        }else{
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let equipo = $('#equipo').offset().top,
    servicio = $('#servicio').offset().top,
    trabajo = $('#trabajo').offset().top;

    window.addEventListener('resize', function(){
        let equipo = $('#equipo').offset().top,
    servicio = $('#servicio').offset().top,
    trabajo = $('#trabajo').offset().top;
    })

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        }, 600)
    })
    $('#enlace-equipo').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:equipo -50
        }, 600)
    })
    $('#enlace-servicio').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:servicio -50
        }, 600)
    })
    $('#enlace-trabajo').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:trabajo -125
        }, 600)
    })
});


