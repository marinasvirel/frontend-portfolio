let switchBtn = document.querySelector('.header-switch');
let switchCircle = document.querySelector('.header-switch-circle');
let entry = document.querySelector(".entry");
let inputs = document.querySelectorAll('input');
let textarea = document.querySelector('textarea');

switchBtn.addEventListener('click', function () {
    switchCircle.classList.toggle("header-switch-circle-active");
    switchBtn.classList.toggle("header-switch-active");
    entry.classList.toggle("entry-dark");
    document.body.classList.toggle('body-dark');
     textarea.classList.toggle('textarea-dark');
    inputs.forEach(item => {
        item.classList.toggle('input-dark');
    })
})