function openTab(evt, tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(c => c.classList.remove('active'));


    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(b => b.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}


window.addEventListener('load', function () {
    setTimeout(function () {
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    }, 2000); 
});




document.getElementById("submitForm").addEventListener("click", function () {
    const fields = ["f_name", "l_name", "phone", "email", "message"];
    let allFilled = true;

    fields.forEach(id => {
        const field = document.getElementById(id);
        if (!field.value.trim()) {
            allFilled = false;
        }
    });


    if (!allFilled) {
        alert("Please Fill ")
    } else {
        alert("Form submitted successfully!");
    }
});


window.addEventListener('scroll', function () {
    const nav = document.querySelector('.sm-nav');
    if (window.scrollY > 0) {
      nav.classList.add('sm-nav-bg');
    } else {
      nav.classList.remove('sm-nav-bg');
    }
  });