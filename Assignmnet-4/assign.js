const modalBtn = document.queryselector(". modal-btn");
const modal = document.querySelector(". modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventlistener("click", function () {
    modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
    modal.classlist.remove("open-moda1");
});
