document.getElementById('section_main_navigation').addEventListener('click', toggleNav)

function toggleNav() {
    console.log('e')
    const sectionMainNav = document.getElementById('section_main_navigation')
    const bodyTag = document.getElementsByTagName('body')[0]
    //const mobileMenuControlWrapper = document.getElementById('mobile_menu_control_wrapper')

    sectionMainNav.classList.toggle('mobile-nav-mode')
    sectionMainNav.classList.toggle('desktop-nav-mode')
    sectionMainNav.classList.toggle('toggled')
    if(sectionMainNav.classList.contains('toggled')) {
        bodyTag.classList.add('nav-open')
    }
    else {
        bodyTag.classList.remove('nav-open')
    }
}