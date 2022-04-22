let clickedSidebar = false;

window.onload = function () {
    // sidebar logic
    let sidebarIcon = document.getElementsByClassName("sidebar-icon")[0];
    let sidebarMobile = document.getElementsByClassName("sidebar-mobile")[0];
    let closeIcon = document.getElementsByClassName("cross-close-mobile")[0];

    //locations
    let dropdown = document.getElementsByClassName("dropdown-select")[0];
    let locations = document.getElementsByClassName("location-select")[0];
    let dropdownArrow = document.getElementsByClassName("dropdown-select-arrow")[0];

    dropdown.addEventListener("click", function () {
        locations.style.display = "flex";
        dropdownArrow.style.transform = "rotate(180deg)";
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
}

function changeLabel (label) {
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
    if (input.value === 'Рус') {
        location.assign('../profile.html');
    }
}

function cabinetRouter() {
    window.location.assign('../cabinet/cabinet.html');
}

function closeModal (icon) {
    let modals = document.getElementsByClassName("modals")[0];
    modals.style.display = "none";
    icon.parentNode.parentNode.style.display = "none";
}