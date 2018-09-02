$(document).on("click","#navigation .navigation-item",function(event) {
    $('#content .content-block').hide();
    let id = event.target.id;
    switch(id){
        case 'nav-nono-mario':
            $('#nono-mario').show();
            break;
        case 'nav-marin':
            $('#marin').show();
            break;
        case 'nav-contact':
            $('#contact').show();
            break;
        default:
            $('#home').show();
    }
});