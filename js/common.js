
$(document).ready(function(){
    
    let isMedia = media();
    let prevMedia = media();
    contentChange(isMedia);
    $(window).resize(function(){
        isMedia = media();
        if(isMedia !== prevMedia){
            contentChange(isMedia);
            prevMedia = isMedia
        }
    })

    function contentChange(isMedia){
        $('[data-content]').each(function(){
            const content = $(this);
            const attrValue = $(this).attr('data-content')
            $(`[data-${attrValue}]`).each(function(){
                const type = $(this).attr(`data-${attrValue}`).split('-')[0];
                const test = $(this).attr(`data-${attrValue}`).split('-')[1];
                if(type === isMedia){
                    test === 'before' && $(this).before(content)
                    test === 'after' && $(this).after(content)
                }
            })
        })
    }

    function media(){
        return ($(window).width() + (!/Mobi|Android/i.test(navigator.userAgent) ? 17 : 0)) >= 950 ? 'desktop' : 'mobile';
    }
    // css index
    $('[data-styleIdx]').length && styleIdx();

    // 모바일
    mobile();

    // 텝
    $('[data-tab="btns"]').length && tab();

    // 어복황제
    $('.fishPage').length && fishPage();
    
    // FAQ
    $('.faqPage').length && faqPage();
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

// 모바일
function mobile(){
    $('header button').click(function(){
        $('header nav').toggleClass('active');
    });
    $('header nav').click(function(){
        $(this).removeClass('active');
    })
    $('header nav ul').click(function(e){
        e.stopPropagation();
    })
}

// 텝
function tab(){
    const attrKey = 'data-tab';
    $(`[${attrKey}]`).each(function(){
        $(this).children().first().addClass('active');
    })
    $(`[${attrKey}="btns"]`).find('button').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        $(`[${attrKey}="contents"]`).children().eq($(this).parent().index()).addClass('active').siblings().removeClass('active');
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

// FAQ
function faqPage(){
    $('[data-formData="btns"]').children().first().addClass('active');
    $('[data-formData="btns"]').find('button').click(function(){
        console.log($(this).parent().index());
        $(this).parent().addClass('active').siblings().removeClass('active');
    })
    $('[data-formData="contents"]').find('button').click(function(){
        $(this).parent().hasClass('active') ?
            $(this).parent().removeClass('active') :
            $(this).parent().addClass('active');
    })
}