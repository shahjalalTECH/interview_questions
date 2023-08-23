/* ========================================= 
    #Form 
============================================  */

$(document).ready(function () {
    $(".bob-password .fa-solid").on("click", function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        if ($(this).hasClass('fa-eye-slash')) {
            $(this).parent('.bob-password').find('input').attr('type', 'text');
        } else {
            $(this).parent('.bob-password').find('input').attr('type', 'password');
        }
    });

    $(".bob-submit-btn").on("click", function (e) {
        e.preventDefault();
        $("#bob-main-form").css("display", "none");
        $("#bob-login").css("display", "flex");
    });

    $(".cross-register").on("click", function () {
        $("#bob-register").css("display", "none");
    });

    $(".closs_login").on("click", function () {
        $("#bob-login").css("display", "none");
    });

    $(".cross-forgot-password").on("click", function () {
        $("#bob-forgot-password").css("display", "none");
    });

    $(".bob-register-open").on("click", function (e) {
        e.preventDefault();
        $("#bob-login").css("display", "none");
        $("#bob-register").css("display", "flex");

    });

    $(".bob-login-open").on("click", function (e) {
        e.preventDefault();
        $("#bob-login").css("display", "flex");
        $("#bob-register").css("display", "none");
    });

    $(".bob-forgotten-password").on("click", function (e) {
        e.preventDefault();
        $("#bob-login").css("display", "none");
        $("#bob-forgot-password").css("display", "flex");
    })

    $(".bob_back_login").on("click", function (e) {
        e.preventDefault();
        $("#bob-forgot-password").css("display", "none");
        $("#bob-login").css("display", "flex");
    })
});

/* ========================================= 
    #Question List
============================================  */

$(document).ready(function () {
    $('.bob-container .bob-margin:nth-child(1) .bob-head').addClass('bob-active');
    $('.bob-container .bob-margin:nth-child(1) .bob-content').slideDown();
    $('.bob-head').on('click', function () {
        if ($(this).hasClass('bob-active')) {
            $(this).siblings('.bob-content').slideUp();
            $(this).removeClass('bob-active');
        } else {
            $('.bob-content').slideUp();
            $('.bob-head').removeClass('bob-active');
            $(this).siblings('.bob-content').slideToggle();
            $(this).toggleClass('bob-active');
        }
    });

    $('#basicDate').flatpickr();
});

