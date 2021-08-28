// Header__search-select code section
var headerSearchSelect = document.getElementById('js__header__search-select');
var headerSearchOption = document.getElementById('js__header__search-option');
var headerSearchUp = document.getElementById('js__header__search-up');
var headerSearchDown = document.getElementById('js__header__search-down');

headerSearchSelect.addEventListener('click', headerSearchOpen);
function headerSearchOpen() {
    var isCloseSearch = headerSearchOption.classList.contains('js__close');
    if (isCloseSearch) {
        headerSearchOption.classList.remove('js__close');
    } else {
        headerSearchOption.classList.add('animation-close');
        setTimeout(function() {headerSearchOption.classList.add('js__close');}, 300);
        setTimeout(function() {headerSearchOption.classList.remove('animation-close');}, 300);
    }
    var isCloseSearchIcon = !headerSearchUp.classList.contains('display-none') && headerSearchDown.classList.contains('display-none');
    if (isCloseSearchIcon) {
        headerSearchUp.classList.add('display-none');
        headerSearchDown.classList.remove('display-none');
    } else {
        headerSearchUp.classList.remove('display-none');
        headerSearchDown.classList.add('display-none'); 
    }
}
//Header__cart-wrap code section
var headerCartWrap = document.getElementById('js__header__cart-wrap');
var headerCartList = document.getElementById('js__header__cart-list');

headerCartWrap.addEventListener('click', headerCartOpen)
function headerCartOpen() {
    var isCloseCart = headerCartList.classList.contains('js__close');
    if (isCloseCart) {
        headerCartList.classList.remove('js__close');
    } else {
        headerCartList.classList.add('animation-close');
        setTimeout(function() {headerCartList.classList.add('js__close');}, 300); 
        setTimeout(function() {headerCartList.classList.remove('animation-close');}, 300); 
    }
}
// Modal code section
var register = document.getElementById('js__register');
var login = document.getElementById('js__login');

var modal = document.getElementById('js__modal');
var modalBody = document.getElementById('js__modal__body');

var registerForm = document.getElementById('js__register-form');
var loginForm = document.getElementById('js__login-form');

var registerSwitch = document.getElementById('js__switch-of-register');
var loginSwitch = document.getElementById('js__switch-of-login');

register.addEventListener('click', modalRegisterOpen);
function modalRegisterOpen() {
    modal.classList.remove('js__close');
    registerForm.classList.remove('js__close');
}

login.addEventListener('click', modalLoginOpen)
function modalLoginOpen() {
    modal.classList.remove('js__close');
    loginForm.classList.remove('js__close');
}

modal.addEventListener('click', modalRegisterClose)
function modalRegisterClose() {
    modalBody.classList.add('animation-close');
    setTimeout(function() {registerForm.classList.add('js__close')}, 300);
    setTimeout(function() {modal.classList.add('js__close')}, 300);
    setTimeout(function() {modalBody.classList.remove('animation-close')}, 300);
}
modal.addEventListener('click', modalLoginClose)
function modalLoginClose() {
    modalBody.classList.add('animation-close');
    setTimeout(function() {loginForm.classList.add('js__close')}, 300);
    setTimeout(function() {modal.classList.add('js__close')}, 300);
    setTimeout(function() {modalBody.classList.remove('animation-close')}, 300);
}
registerForm.addEventListener('click', function(event) {event.stopPropagation()});
loginForm.addEventListener('click', function(event) {event.stopPropagation()});

registerSwitch.addEventListener('click', switchToLogin);
function switchToLogin() {
    modalBody.classList.add('animation-close');
    setTimeout(function() {registerForm.classList.add('js__close')}, 300);
    setTimeout(function() {modal.classList.add('js__close')}, 300);
    setTimeout(function() {modalBody.classList.remove('animation-close')}, 300);
    // 
    setTimeout(function() {modal.classList.remove('js__close')}, 300);
    setTimeout(function() {loginForm.classList.remove('js__close')}, 300);
}

loginSwitch.addEventListener('click', switchToRegister);
function switchToRegister() {
    modalBody.classList.add('animation-close');
    setTimeout(function() {loginForm.classList.add('js__close')}, 300);
    setTimeout(function() {modal.classList.add('js__close')}, 300);
    setTimeout(function() {modalBody.classList.remove('animation-close')}, 300);
    //
    setTimeout(function() {modal.classList.remove('js__close')}, 300);
    setTimeout(function() {registerForm.classList.remove('js__close')}, 300);
}
//User login code section
var userLogin = document.getElementById('js__user-login');
var loginBtn = document.getElementById('js__login-btn');
var userLogout = document.getElementById('js__user-logout');

loginBtn.addEventListener('click', userLoginFunction);
function userLoginFunction() {
    modalBody.classList.add('animation-close');
    setTimeout(function() {loginForm.classList.add('js__close')}, 300);
    setTimeout(function() {modal.classList.add('js__close')}, 300);
    setTimeout(function() {modalBody.classList.remove('animation-close')}, 300);
    register.classList.add('js__close');
    login.classList.add('js__close');
    userLogin.classList.remove('js__close');
}

userLogout.addEventListener('click', userLogoutFunction);
function userLogoutFunction() {
    register.classList.remove('js__close');
    login.classList.remove('js__close');
    userLogin.classList.add('js__close');
}
//Select-input code section
var selectInput = document.getElementById('js__select-input');
var selectInputList = document.getElementById('js__select-input-list');
var selectInputIconDown = document.getElementById('js__select-input-icon-down');
var selectInputIconUp = document.getElementById('js__select-input-icon-up');

selectInput.addEventListener('click', selectInputOpen);
function selectInputOpen() {
    var selectInputIsClose = selectInputList.classList.contains('js__close');
    if (selectInputIsClose) {
        selectInputList.classList.remove('js__close');
        selectInputIconDown.classList.remove('display-none');
        selectInputIconUp.classList.add('display-none');
    } else {
        selectInputList.classList.add('animation-close');
        selectInputIconDown.classList.add('display-none');
        selectInputIconUp.classList.remove('display-none');        
        setTimeout(function() {selectInputList.classList.remove('animation-close');}, 300);
        setTimeout(function() {selectInputList.classList.add('js__close');}, 300);
    }
}
//Header__mennu-icon code section
var headerMenuIcon = document.getElementById('js__header__menu-icon');
var headerSidebar = document.getElementById('js__header__sidebar');
var headerSidebarBody = document.getElementById('js__header__sidebar-body');
var sidebarCloseIcon = document.getElementById('js__sidebar-close-icon');


headerMenuIcon.addEventListener('click', headerSidebarOpen);
function headerSidebarOpen() {
    headerSidebar.classList.remove('display-none-m-c');
}

sidebarCloseIcon.addEventListener('click', headerSidebarClose);
function headerSidebarClose() {
    headerSidebarBody.classList.add('animation-close');
    setTimeout(function() {headerSidebar.classList.add('display-none-m-c');}, 300);
    setTimeout(function() {headerSidebarBody.classList.remove('animation-close');}, 300);
}
headerSidebar.addEventListener('click', headerSidebarClose);
headerSidebarBody.addEventListener('click', function(event) {event.stopPropagation()});
//Header__search code section
var headerSearchBtn = document.getElementById('js__header__search-btn');
var headerSearchOnMobile = document.getElementById('js__header__search-on-mobile');
var headerSearchBtnOnMobile = document.getElementById('js__header__search-btn-on-mobile');

headerSearchBtn.addEventListener('click', headerSearchMobileOpen);
function headerSearchMobileOpen() {
    headerSearchOnMobile.classList.remove('js__close');
}
headerSearchBtnOnMobile.addEventListener('click', headerSearchMobileClose);
function headerSearchMobileClose() {
    headerSearchOnMobile.classList.add('animation-close');
    setTimeout(function() {headerSearchOnMobile.classList.remove('animation-close');}, 300);
    setTimeout(function() {headerSearchOnMobile.classList.add('js__close');}, 300);
}