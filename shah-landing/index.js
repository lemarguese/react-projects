function profileRouter() {
    location.assign("profile/profile.html");
}

let clickedSidebar = false;

window.onload = function () {
    let dropdown = document.getElementsByClassName("dropdown-select")[0];
    let locations = document.getElementsByClassName("location-select")[0];
    let dropdownArrow = document.getElementsByClassName("dropdown-select-arrow")[0];

    // modals
    let modals = document.getElementsByClassName("modals")[0];

    // registration
    let registrationModal = document.getElementsByClassName("registration-modal")[0];
    let loginFromRegisterBtn = document.getElementsByClassName("registerBtn registerLogin")[0];

    loginFromRegisterBtn.addEventListener("click", function () {
        registrationModal.style.display = "none";
        loginModal.style.display = "block";
    });

    // login
    let loginModal = document.getElementsByClassName("authorization-modal")[0];
    let registerFromLogin = document.getElementsByClassName("registerBtn login")[0];

    registerFromLogin.addEventListener("click", function () {
        loginModal.style.display = "none";
        registrationModal.style.display = "block";
    });

    // recovery
    let forgetAnchor = document.getElementsByClassName("forgetBtn")[0];
    let recoveryModal = document.getElementsByClassName("recovery-modal")[0];

    forgetAnchor.addEventListener("click", function () {
        recoveryModal.style.display = "block";
        loginModal.style.display = "none";
    });

    // emailSent
    let recreateBtn = document.getElementsByClassName("modalButton emailBtn")[0];
    let recoverySentModal = document.getElementsByClassName("recoverySent-modal")[0];

    recreateBtn.addEventListener("click", function () {
        recoverySentModal.style.display = "block";
        recoveryModal.style.display = "none";
    });

    // create NEW password
    let passChangeBtn = document.getElementsByClassName("agreementBtn recoveryBtn")[0];
    let passwordModal = document.getElementsByClassName("passwordNew-modal")[0];

    passChangeBtn.addEventListener("click", function () {
        passwordModal.style.display = "block";
        recoverySentModal.style.display = "none";
    });

    // authorize
    let authorizeBtn = document.getElementsByClassName("modalButton passwordBtn")[0];
    let authorizeModal = document.getElementsByClassName("authPassword-modal")[0];

    authorizeBtn.addEventListener("click", function () {
        authorizeModal.style.display = "block";
        passwordModal.style.display = "none";
    });

    // auth final
    let loginBtn = document.getElementsByClassName("modalButton authPasswordBtn")[0];

    loginBtn.addEventListener("click", function () {
        modals.style.display = "none";
        authorizeModal.style.display = "none";
        window.location.assign("index.html");
    });

    // question sent modal
    let questionBtn = document.getElementsByClassName("submitBtn")[0];
    let questionModal = document.getElementsByClassName("questionSent-modal")[0];

    questionBtn.addEventListener('click', function () {
        modals.style.display = "flex";
        questionModal.style.display = "block";
    });

    // question modal close
    let questionAgreementBtn = document.getElementsByClassName("agreementBtn questionBtn")[0];
    questionAgreementBtn.addEventListener('click', function () {
        modals.style.display = "none";
        questionModal.style.display = "none";
    });

    // buttons
    let registrationBtn = document.getElementsByClassName("header-registrationBtn")[0];
    let bodyRegBtn = document.getElementsByClassName("body-registrationBtn")[0];
    let criteriaRegBtn = document.getElementsByClassName("criteria-registrationBtn")[0];
    let regSuccess = document.getElementsByClassName("registerBtn registerSuccess")[0];

    // sidebar logic
    let sidebarIcon = document.getElementsByClassName("sidebar-icon")[0];
    let sidebarMobile = document.getElementsByClassName("sidebar-mobile")[0];
    let closeIcon = document.getElementsByClassName("cross-close-mobile")[0];

    dropdown.addEventListener("click", function () {
        locations.style.display = "flex";
        dropdownArrow.style.transform = "rotate(180deg)";
    });

    registrationBtn.addEventListener("click", function () {
        modals.style.display = "flex";
        registrationModal.style.display = "block";
    });

    bodyRegBtn.addEventListener("click", function () {
        modals.style.display = "flex";
        registrationModal.style.display = "block";
    });

    criteriaRegBtn.addEventListener("click", function () {
        modals.style.display = "flex";
        registrationModal.style.display = "block";
    });

    regSuccess.addEventListener("click", function () {
        modals.style.display = "flex";
        registrationModal.style.display = "block";
    });

    sidebarIcon.addEventListener("click", function () {
        sidebarMobile.style.display = "block";
        clickedSidebar = true;
    });

    closeIcon.addEventListener("click", function () {
        sidebarMobile.style.display = "none";
        clickedSidebar = false;
    });

    // selecter logic
    let selecter = document.getElementsByClassName("selecter-cover");
    let selects = document.getElementsByClassName("select-input");
    for (let i = 0; i < selecter.length; i++) {
        selecter[i].addEventListener("click", function () {
            for (let i = 0; i < selects.length; i++) {
                selects[i].style.display = "block";
            }
        });
    }

    qnaAnswerHandler();
    prizesListHandler();
}

function changeLabel(label) {
    let locationLabel = document.getElementsByClassName("location-cover")[0];
    locationLabel.innerHTML = label.value;
    let locations = document.getElementsByClassName("location-select")[0];
    let dropdownArrow = document.getElementsByClassName("dropdown-select-arrow")[0];
    locations.style.display = "none";
    dropdownArrow.style.transform = "rotate(0deg)";
}

function changeLanguage(input) {
    //language change logic
    let selectText = document.getElementById("select-text");
    if (window.matchMedia("(max-width: 425px)").matches) {
        selectText = document.getElementById("select-text-mobile");
        if (clickedSidebar) {
            selectText = document.getElementById("select-text-sidebar");
        }
    }
    selectText.innerHTML = input.value === 'Қаз' ? 'Рус' : 'Қаз';
    if (input.value === 'Қаз') {
        location.assign('kz/index.html');
    }
}

function activeRoute(route) {
    if (window.matchMedia("(max-width: 425px)")) {
        let sidebar = document.getElementsByClassName("sidebar-mobile")[0];
        sidebar.style.display = "none";
    }
    let routes = document.getElementsByClassName("routes");
    for (let i = 0; i < routes.length; i++) {
        if (route === routes[i]) {
            routes[i].className = "routes active-route";
        } else {
            routes[i].className = "routes";
        }
    }
}

function qnaAnswerHandler() {
    let arrow = document.getElementsByClassName("dropdown-arr");
    let hiddenAns = document.getElementsByClassName("hidd-answer");
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", function () {
            arrow[i].style.transform = "rotate(90deg)";
            hiddenAns[i].style.display = "block";
        });
    }
}

function prizesListHandler() {
    let weekList = document.getElementsByClassName("week")[0];
    let dayList = document.getElementsByClassName("day")[0];
    let dayToDay = document.getElementsByClassName("day-to-day_prizes")[0];
    let weekToWeek = document.getElementsByClassName("week-to-week_prizes")[0];
    let dayText = document.getElementsByClassName("day-prize_text")[0];
    let weekText = document.getElementsByClassName("week-prize_text")[0];

    dayToDay.addEventListener("click", function () {
        dayText.style.fontWeight = "bold";
        weekText.style.fontWeight = "normal";
        dayList.style.display = "flex";
        weekList.style.display = "none";
    })

    weekToWeek.addEventListener("click", function () {
        weekText.style.fontWeight = "bold";
        dayText.style.fontWeight = "normal";
        weekList.style.display = "flex";
        dayList.style.display = "none";
    })
}

function closeModal(icon) {
    let modals = document.getElementsByClassName("modals")[0];
    modals.style.display = "none";
    icon.parentNode.parentNode.style.display = "none";
}