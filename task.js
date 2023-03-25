const elementModal = document.getElementsByClassName("modal");
const elementModalClose = document.getElementsByClassName("modal__close_times");
const elementModalBtn = document.getElementsByClassName("btn");


elementModal.item(0).className = "modal modal_active";

elementModalClose.item(0).onclick = function() {
    elementModal.item(0).className = "modal modal_close";
};

elementModalBtn.item(0).onclick = function() {
    elementModal.item(0).className = "modal modal_close";
    elementModal.item(1).className = "modal modal_active"
};

elementModalClose.item(1).onclick = function() {
    elementModal.item(1).className = "modal modal_close";
}

elementModalBtn.item(1).onclick = function() {
    elementModal.item(1).className = "modal modal_close";
};