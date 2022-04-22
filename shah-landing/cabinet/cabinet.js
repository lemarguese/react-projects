let clickedSidebar = false;

window.onload = function () {
    // sidebar logic
    let sidebarIcon = document.getElementsByClassName("sidebar-icon")[0];
    let sidebarMobile = document.getElementsByClassName("sidebar-mobile")[0];
    let closeIcon = document.getElementsByClassName("cross-close-mobile")[0];

    // modals
    let modals = document.getElementsByClassName("modals")[0];
    let regSuccessModal = document.getElementsByClassName("registrationSuccess-modal")[0];
    let registrationBtn = document.getElementsByClassName("registrationBtn")[0];
    let registerSuccessBtn = document.getElementsByClassName("registerBtn registerSuccess")[0];

    registrationBtn.addEventListener("click", function () {
       modals.style.display = "flex";
       regSuccessModal.style.display = "block";
    });

    registerSuccessBtn.addEventListener("click", function () {
        modals.style.display = "none";
        registerSuccessBtn.style.display = "none";
        window.location.assign("cabinet.html");
    })


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
    console.log(selects, selecter)
    for (let i = 0; i < selecter.length; i++) {
        selecter[i].addEventListener("click", function () {
            for (let i = 0; i < selects.length; i++) {
                selects[i].style.display = "block";
            }
        });
    }
}

function profileRouter() {
    window.location.assign('../profile/profile.html');
}

function changeLabel (label) {
    let locationLabel = document.getElementsByClassName("location-cover")[0];
    locationLabel.innerHTML = label.value;
    let locations = document.getElementsByClassName("location-select")[0];
    let dropdownArrow = document.getElementsByClassName("dropdown-select-arrow")[0];
    locations.style.display = "none";
    dropdownArrow.style.transform = "rotate(0deg)";
}

function closeModal (icon) {
    let modals = document.getElementsByClassName("modals")[0];
    modals.style.display = "none";
    icon.parentNode.parentNode.style.display = "none";
}

function filePickHandler (event) {
    let file = event.target.files[0];
    let fileText = document.getElementsByClassName("file-instruction_text")[0];
    fileText.innerHTML = 'Выбран файл:' + "<br />" + '<strong>' + file.name + '</strong>';
}

function dropFilesHandler(event) {

    let photoIcon = document.getElementsByClassName("photo-icon")[0];
    let fileText = document.getElementsByClassName("file-instruction_text")[0];

    if (event.dataTransfer.items) {
        photoIcon.style.display = "none";
        for (let i = 0; i < event.dataTransfer.items.length; i++) {
            if (event.dataTransfer.items[i].kind === 'file') {
                let file = event.dataTransfer.items[i].getAsFile();
                fileText.innerHTML = 'Выбран файл:' + "<br />" + '<strong>' + file.name + '</strong>';
            }
        }
    } else {
        for (let i = 0; i < event.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + event.dataTransfer.files[i].name);
        }
    }
}

function dragOverHandler(event) {
    event.preventDefault();
}

function checkHandler (checkbox) {
    let checkStatus = document.getElementsByClassName("status")[0];
    if (checkbox.checked) {
        checkStatus.style.display = "block";
    } else {
        checkStatus.style.display = "none";
    }
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
        location.assign('kz/cabinet.html');
    }
}


function dateChange (input) {
    let warningInfo = document.getElementsByClassName("incorrect-data")[0];
    let day = Number(input.value.slice(0, 2));
    let month = Number(input.value.slice(3, 5));
    let year = Number(input.value.slice(6, 10));
    console.log(day, month, year);
    let ok = false;
    ok = day >= 28 && month === 4 && year === 2022 || day <= 25 && month === 5 && year === 2022;
    if (ok) {
        input.className += "registration-input date correct";
        warningInfo.style.display = "none";
    } else {
        input.className = "registration-input date incorrect";
        warningInfo.style.display = "block";
    }
}