//sidebar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let home = document.querySelector(".home-content");
let tabtitle = document.querySelector(".tabcontent-title");

btn.onclick = function () {
    sidebar.classList.toggle("active");
    home.classList.toggle("active");
    tabtitle.classList.toggle("active");

}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
};


//vertical tabs

function openIcon(evt, verticalTabs) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(verticalTabs).style.display = "block";
    evt.currentTarget.className += " active";
    setTitle(verticalTabs);
    setButton(verticalTabs);
};

function setTitle(sectionName) {
    var title = document.getElementById("pTitle");
    var subTitle = document.getElementById("pSubTitle");
    var sub = document.getElementById("pArrow");

    if (sectionName == "dashboard") {
        sub.classList = "none";
        title.textContent = "Hello Kinjal";
        subTitle.textContent = "Have a great day ahead.";
    } else if (sectionName == "user") {
        sub.classList = "fas fa-angle-left";
        title.textContent = "User Management";
        subTitle.textContent = "Have a great day ahead.";
    } else if (sectionName == "asset") {
        sub.classList = "fas fa-angle-left";
        title.textContent = "Asset Management";
        subTitle.textContent = "Have a great day ahead.";
    } else if (sectionName == "container") {
        sub.classList = "fas fa-angle-left";
        title.textContent = "Container Management";
        subTitle.textContent = "Checkout the Structure";
    } else if (sectionName == "assessment") {
        sub.classList = "fas fa-angle-left";
        title.textContent = "Assessment Master";
        subTitle.textContent = "2 Assessment Domains in list";
    } else if (sectionName == "status") {
        sub.classList = "fas fa-angle-left";
        title.textContent = "ITC Assest A - Runtime Status Update";
        subTitle.textContent = "Checkout the status of the project";
    }

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function setButton(headerButton) {
    var assessmentBtn = document.getElementById("assessmentButton");
    var accordionBtn = document.getElementById("accordionButton");

    if (headerButton == "dashboard") {
        assessmentBtn.style.display = "block";
        accordionBtn.style.display = "none";
    } else if (headerButton == "user") {
        assessmentBtn.style.display = "block";
        accordionBtn.style.display = "none";
    } else if (headerButton == "asset") {
        assessmentBtn.style.display = "block";
        accordionBtn.style.display = "none";
    } else if (headerButton == "container") {
        assessmentBtn.style.display = "none";
        accordionBtn.style.display = "block";
    } else if (headerButton == "assessment") {
        assessmentBtn.style.display = "block";
        accordionBtn.style.display = "none";
    } else if (headerButton == "status") {
        assessmentBtn.style.display = "block";
        accordionBtn.style.display = "none";
    }
}


//notification
//mail

const myNotification = document.getElementById("my_notification");

const openBellIcons = document.querySelectorAll(".open-bell-icon");
for (const openBellIcon of openBellIcons) {
    openBellIcon.addEventListener("click", function () {
        console.log('click');
        myNotification.style.display = "block";
    });
}


function close_btn2() {
    document.getElementById("my_notification").style.display = "none";
};

function showHide(elem) {
    if (elem.selectedIndex !== 0) {
        //hide the divs
        for (var i = 0; i < divsO.length; i++) {
            divsO[i].style.display = 'none';
        }
        //unhide the selected div
        document.getElementById(elem.value).style.display = 'block';
    }
}

window.onload = function () {
    //get the divs to show/hide
    divsO = document.getElementById("notification").getElementsByClassName('show-hide');
};


//assessment

const assessmentForm = document.getElementById("my_form");

const openAssessments = document.querySelectorAll(".header__assessment-btn");
for (const openAssessment of openAssessments) {
    openAssessment.addEventListener("click", function () {
        console.log("click");
        assessmentForm.style.display = "block";
    });
};

function myformclose() {
    document.getElementById("my_form").style.display = "none";
};



//body darkmode

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    // content.classList.toggle('darkmode');
});


const darkmodebtn = document.querySelectorAll(".label");

for (const bodydarkmode of darkmodebtn) {
    bodydarkmode.addEventListener("click", () => {
        document.body.classList.toggle("darkmode");
    });
}


//container card
var toggler = document.getElementsByClassName("container-card");
var i;
for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".containermanagement__nested-card").classList.toggle("active");
    });
}

//searchbar

function mySearchBar() {
    document.getElementById("searchBarWindow").classList.toggle("showsearchbar");
  }
