var show_PopUp = document.getElementById('popUp_box');

function show_popUp(){
    show_PopUp.classList.add('popUp_box_show');
}
function hide_popUp(){
    show_PopUp.classList.remove('popUp_box_show');
    show_PopUp.style.transition=".1s ease-out";
}