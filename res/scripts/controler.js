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
    $(document).on('click', '.navigation-item', function (event) {
        let id = event.target.id;
        if(id != 'nav-contact'){
            $('#content .content-block').hide();
            $('.nav-item').removeClass('active');
        }
        switch (id) {
            case 'nav-nono-mario':
                $('#nono-mario').show();
                $('#nav-nono-mario').parent().addClass('active');
                break;
            case 'nono-mario-card-button':
                $('#nono-mario').show();
                $('#nav-nono-mario').parent().addClass('active');
                break;
            case 'nav-marin':
                $('#marin').show();
                $('#nav-marin').parent().addClass('active');
                break;
            case 'marin-card-button':
                $('#marin').show();
                $('#nav-marin').parent().addClass('active');
                break;
            case 'nav-about-piran':
                $('#about-piran').show();
                $('#nav-about-piran').parent().addClass('active');
                break;
            case 'nav-contact':
                //$('#contact').show();
                //$('#nav-contact').parent().addClass('active');
                break;
            default:
                $('#home').show();
                $('#nav-home').parent().addClass('active');
        }

        if ($(window).width() <= 770 && !(id == 'brand-text' || id == 'nono-mario-card-button' || id == 'marin-card-button')) {
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
            text_model = $.getJSON("res/texts/english_text.json", function (obj) {
                setText(obj);
            });
        } else {
            if (current_language == SLOVENIAN_LANGUAGE) {
                return
            }
            current_language = SLOVENIAN_LANGUAGE;
            $.getJSON("res/texts/slovenian_text.json", function (obj) {
                setText(obj);
            });
        }
    });

}

// Carousel

function setupCarousels() {
    $.getJSON("res/carousel_picture_dirs.json", function (obj) {
        setPictures(obj.nono_mario, 'nono-mario');
        setPictures(obj.marin,'marin');
        setPictures(obj.about_piran,'about-piran');
        setPictures(obj.home, "home")
    });
}

function setPictures(model, id) {
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

    addTextToTextSection(model.home.text_sections, '#home-text-section');
    $('#nono-mario-card-header').append(model.home.nono_mario_card.header);
    $('#nono-mario-card-content').append(model.home.nono_mario_card.content);
    $('#nono-mario-card-button').append(model.home.nono_mario_card.button_text);
    $('#marin-card-header').append(model.home.marin_card.header);
    $('#marin-card-content').append(model.home.marin_card.content);
    $('#marin-card-button').append(model.home.marin_card.button_text);


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
    $('#footer-contacts').append(model.footer.contacts);
    $('#footer-booking').append(model.footer.booking_info);
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