const menu = $('#mobile-menu')
console.log(menu)

const menuLinks = $('.navbar__menu')
console.log(menuLinks)

$('#mobile-menu').click(() => {
    $('#mobile-menu').toggleClass('is-active')
    $('.navbar__menu').toggleClass('active')
})