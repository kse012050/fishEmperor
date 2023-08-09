$(document).ready(function(){
    $('[data-styleIdx]').length && styleIdx();
})


function styleIdx(){
    const selector = $('[data-styleIdx]');
    selector.each(function(){
        const attrValue = $(this).attr('data-styleIdx');
        $(this).children(attrValue || attrValue).each(function(i){
            $(this).css('--styleIdx', i);
        })
    })
}