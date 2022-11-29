var modalBtn = document.querySelector("#modal-btn");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

modalBtn.addEventListener("click", openModal);

modal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function openModal()
{
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    console.log(modal.classList, overlay.classList);
}
function closeModal()
{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    console.log(modal.classList, overlay.classList);
}
