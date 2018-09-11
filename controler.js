const ENGLISH_LANGUAGE = 0;
const SLOVENIAN_LANGUAGE = 1;
let current_language = 1;

// Navigation
$(document).on('click', '#navigation .navigation-item', function (event) {
    $('#content .content-block').hide();
    $('.nav-item').removeClass('active');
    let id = event.target.id;
    switch (id) {
        case 'nav-nono-mario':
            $('#nono-mario').show();
            $('#nav-nono-mario').parent().addClass('active');
            break;
        case 'nav-marin':
            $('#marin').show();
            $('#nav-marin').parent().addClass('active');
            break;
        case 'nav-contact':
            $('#contact').show();
            $('#nav-contact').parent().addClass('active');
            break;
        default:
            $('#home').show();
            $('#nav-home').parent().addClass('active');
    }

    if ($(window).width() <= 970 && id !='') {
        $('.navbar-toggler').click();
    }
});

// Map
$('.map-container')
    .click(function () {
        $(this).find('iframe').addClass('clicked')
    })
    .mouseleave(function () {
        $(this).find('iframe').removeClass('clicked')
    });

// Text
$(document).on('click', '#language-dropdown', function (event) {
    let id = event.target.id;
    let text_model = undefined;
    if(id == 'english-lang'){
        if(current_language == ENGLISH_LANGUAGE){
            return;
        }
        current_language = ENGLISH_LANGUAGE;
        $.getJSON( "http://nonomario.github.io/res/texts/english_text.json", function( obj ) {
            text_model = obj;
          });
    } else {
        if(current_language == SLOVENIAN_LANGUAGE){
            return
        }
        current_language = SLOVENIAN_LANGUAGE;
        $.getJSON( "http://nonomario.github.io/res/texts/slovenian_text.json", function( obj ) {
            text_model = obj;
          });
    }
    $('.text').empty();

});