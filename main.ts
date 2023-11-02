const noteInput = document.getElementById("noteInput") as HTMLTextAreaElement;
const addNoteBtn = document.getElementById("addNote") as HTMLButtonElement;
const notesList = document.getElementById("notesList") as HTMLUListElement;

addNoteBtn.addEventListener("click", () => {
    const noteText = noteInput.value.trim();

    if (noteText) {
        const noteEl = document.createElement("li");
        noteEl.textContent = noteText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteNote");
        deleteBtn.addEventListener("click", () => {
            notesList.removeChild(noteEl);
        });

        noteEl.appendChild(deleteBtn);
        notesList.appendChild(noteEl);

        noteInput.value = "";
    }
});
