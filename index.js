"use strict";

const displayAddNoteForm = document.getElementById("add-note-form");
const addNewNoteBtn = document.getElementById("add-new-note-btn");
const darkOpacityBg = document.getElementById("opacity-bg");

// show add note form input implementation
addNewNoteBtn.addEventListener("click", displayNoteInput);
function displayNoteInput() {
  displayAddNoteForm.style.display = "flex";
  darkOpacityBg.classList.add("shadow-bg");
  document.body.style.overflow = "hidden";
}

// close note form implementation
const cancelNoteformBtn = document.getElementById("cancel-form");
cancelNoteformBtn.addEventListener("click", cancelNoteForm);

function cancelNoteForm() {
  displayAddNoteForm.style.display = "none";
  darkOpacityBg.classList.remove("shadow-bg");
  document.body.style.overflow = "auto";
}
// POST new note and send to api
