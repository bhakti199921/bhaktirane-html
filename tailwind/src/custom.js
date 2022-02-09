function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[0]'), list.classList.add('opacity-100')) :
      (e.name = "menu", list.classList.remove('top-[0]'), list.classList.remove('opacity-100'))
  };

  function vmxDepartment(evt, vmxDepartment) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(vmxDepartment).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();