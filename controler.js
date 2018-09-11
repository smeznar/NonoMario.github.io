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
        case 'nav-about-piran':
            $('#about-piran').show();
            $('#nav-about-piran').parent().addClass('active');
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
    if(id == 'english-lang'){
        if(current_language == ENGLISH_LANGUAGE){
            return;
        }
        current_language = ENGLISH_LANGUAGE;
        text_model = $.getJSON( "https://nonomario.github.io/res/texts/english_text.json", function( obj ) {
            setText(obj);
          });
    } else {
        if(current_language == SLOVENIAN_LANGUAGE){
            return
        }
        current_language = SLOVENIAN_LANGUAGE;
        $.getJSON( "https://nonomario.github.io/res/texts/slovenian_text.json", function( obj ) {
            setText(obj);
          });
    }
});

function setText(model){
    $('.text').empty();

    // Navigation
    $('#brand-text').append(model.navigation.brand);
    $('#nav-home').append(model.navigation.home);
    $('#dropdownId').append(model.navigation.apartmant_dropdown);
    $('#nav-nono-mario').append(model.navigation.nono_mario);
    $('#nav-marin').append(model.navigation.marin);
    $('#nav-about-piran').append(model.navigation.about_piran);
    $('#nav-contact').append(model.navigation.contact);

    // Footer
    $('#footer-text').append(model.navigation.footer_text);
}