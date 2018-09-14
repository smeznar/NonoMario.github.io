const ENGLISH_LANGUAGE = 0;
const SLOVENIAN_LANGUAGE = 1;
let current_language = 1;

setup();

function setup() {
    setupOnClickBehaviour();
    $('#english-lang').click();
    setupCarousels();
}

function setupOnClickBehaviour() {
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

        if ($(window).width() <= 970 && id != 'brand-text') {
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
        if (id == 'english-lang') {
            if (current_language == ENGLISH_LANGUAGE) {
                return;
            }
            current_language = ENGLISH_LANGUAGE;
            text_model = $.getJSON("https://nonomario.github.io/res/texts/english_text.json", function (obj) {
                setText(obj);
            });
        } else {
            if (current_language == SLOVENIAN_LANGUAGE) {
                return
            }
            current_language = SLOVENIAN_LANGUAGE;
            $.getJSON("https://nonomario.github.io/res/texts/slovenian_text.json", function (obj) {
                setText(obj);
            });
        }
    });

}

// Carousel

function setupCarousels() {
    $.getJSON("https://nonomario.github.io/res/carousel_picture_dirs.json", function (obj) {
        setPictures(obj.nono_mario, 'nono-mario');
        setPictures(obj.marin,'marin');
        setPictures(obj.about_piran,'about-piran');
    });
}

function setPictures(model, id) {
    // Home

    // Nono Mario
    let count = 0
    model.forEach(function (element) {
        $('#carousel-' + id + '-indicators').append('<li data-target="#carousel-' + id + '" data-slide-to="' + count + '"></li>');
        let caption = '';
        let title = '';
        let description = '';
        if (element.hasOwnProperty('title')) {
            title = '<h3>' + element.title + '</h3>';
        }
        if (element.hasOwnProperty('description')) {
            description = '<p>' + element.description + '</p>';
        }
        if (title !== '' || description !== '') {
            caption = '<div class="carousel-caption d-none d-md-block">' + title + description + '</div>';
        }
        $('#carousel-' + id + '-pictures').append('<div class="carousel-item"><img src="' + element.dir + '" class="mx-auto" alt="' + element.alt + '">' +
            caption + '</div>');
        count++;
    });
    $('#carousel-' + id + '-indicators li').first().addClass('active');
    $('#carousel-' + id + '-pictures div').first().addClass('active');
}

// Text

function setText(model) {
    $('.text').empty();

    // Navigation
    $('#brand-text').append(model.navigation.brand);
    $('#nav-home').append(model.navigation.home);
    $('#dropdownId').append(model.navigation.apartmant_dropdown);
    $('#nav-nono-mario').append(model.navigation.nono_mario);
    $('#nav-marin').append(model.navigation.marin);
    $('#nav-about-piran').append(model.navigation.about_piran);
    $('#nav-contact').append(model.navigation.contact);

    // Home

    // Nono Mario

    addTextToTextSection(model.nono_mario.text_sections, '#nono-mario-text-section');

    // Marin

    addTextToTextSection(model.marin.text_sections, '#marin-text-section');

    // About Piran

    addTextToTextSection(model.about_piran.text, '#about-piran-text');
    addTextToTextSection(model.about_piran.tartini, '#tartini-square');
    addTextToTextSection(model.about_piran.venetian_house, '#venetian-house');
    addTextToTextSection(model.about_piran.walls, '#walls');
    addTextToTextSection(model.about_piran.churches, '#churches');
    addTextToTextSection(model.about_piran.vicinity, '#vicinity');

    // Contact

    // Footer
    $('#footer-text').append(model.footer_text);
}

function addTextToTextSection(model, id) {
    model.forEach(function (element) {
        let title = '';
        let text = '';
        let section_text = '';
        if (element.hasOwnProperty('title')) {
            title = '<h3>' + element.title + '</h3>';
        }
        if (element.hasOwnProperty('text')) {
            text = '<p>' + element.text + '</p>';
            text = text.replace(/\n/g, '<br>');
        }
        section_text = '<div>' + title + text + '</div>';
        $(id).append(section_text);
    });
}