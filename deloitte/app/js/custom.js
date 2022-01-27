//sidebar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let home = document.querySelector(".home-content");

btn.onclick = function () {
    sidebar.classList.toggle("active");
    home.classList.toggle("active");

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
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


//notification
//mail

const myNotification = document.getElementById("my_notification");

const openBellIcons = document.querySelectorAll(".open-bell-icon");
for (const openBellIcon of openBellIcons) {
    openBellIcon.addEventListener("click", function(){
console.log('click');
        myNotification.style.display = "block";
        });
}


// function open_form_btn2() {
 
// };

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


//body darkmode

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    // content.classList.toggle('darkmode');
});


const darkmodebtn = document.querySelectorAll(".label");
 
for (const bodydarkmode of darkmodebtn) {
    bodydarkmode.addEventListener("click",()=>{
        document.body.classList.toggle("darkmode");
    });
}


const assessmentmaster = document.querySelectorAll(".assessment-btn-wrapper");
 
for (const assessment of assessmentmaster) {
    assessment.addEventListener("click",()=>{
        document.body.classList.toggle(".header__assessment-btn");
        // assessmentmaster.body.classList.style.display="block";
    });
}




// const notificationwindow = document.querySelectorAll(".open-bell-icon");
 
// for (const dashboardnotification of notificationwindow) {
//     dashboardnotification.addEventListener("click",()=>{
//         document.body.classList.toggle(".header__mail_form");
//     });
// }


//container card
var toggler = document.getElementsByClassName("container-card");
var i;
for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".containermanagement__nested-card").classList.toggle("active");
  });
}