$(document).ready(function () {

    $('.header-contacts_button').on('click', function () {
        $('.overlay').show();
    });

    $('.popup-close').on('click', function () {
        $('.overlay').hide();
    })
});
