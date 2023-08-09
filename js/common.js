$(document).ready(function(){
    // css index
    $('[data-styleIdx]').length && styleIdx();

    // 텝
    $('[data-tab="btns"]').length && tab();

    // 어복황제
    $('.fishPage').length && fishPage();
})

// css index
function styleIdx(){
    const selector = $('[data-styleIdx]');
    selector.each(function(){
        const attrValue = $(this).attr('data-styleIdx');
        $(this).find(attrValue ? attrValue : '> *').each(function(i){
            $(this).css('--styleIdx', i);
        })
    })
}

// 텝
function tab(){
    const attrKey = 'data-tab';
    $(`[${attrKey}]`).each(function(){
        $(this).children().first().addClass('active');
    })
    $(`[${attrKey}="btns"]`).children().click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(`[${attrKey}="contents"]`).children().eq($(this).index()).addClass('active').siblings().removeClass('active');
    })
}

// 어복황제
function fishPage(){
    var fishSwiper = new Swiper(".fishSwiper", {
        slidesPerView: 3,
        navigation: {
            prevEl: '.btn-prev',
            nextEl: '.btn-next',
        },
    });
}