let addNoteButton = document.getElementById('add-note'); // Add button.


let textArea = document.querySelector('#text'); // Main input.


let noteBox = document.querySelector('#notes'); // The row of note.


/////////     CREATING A NEW TASK FUNCTION FOR "ADD BUTTON" PRESSED   ///////

function createTask() {

        let note = document.createElement('li'); // Wrapper for "p" element that will contain a task text.

        noteBox.prepend(note);

        // That condition looks if there entered a text in the input.

        if (!textArea.value) { // If not.

                let noticeMessage = document.createElement('li');

                noticeMessage.innerHTML = 'Please inter your task to the input';

                noticeMessage.style.color = "red";

                note.remove();

                noteBox.prepend(noticeMessage);

                addNoteButton.addEventListener('click', function () {

                        noticeMessage.remove();

                        note.remove();

                });

        } else { //  if it is.

                var text = document.createElement('p');

                note.append(text);

                text.innerHTML = textArea.value;

                textArea.value = '';

        }

        let removeButton = document.createElement('button'); // Creating "Remove" button.

        let editButton = document.createElement('button'); // Creating "Edit" button.

        let editableText = document.createElement('textarea'); // Creating second input field that will be enabled after "Edit button" press.

        removeButton.innerHTML = 'X';

        editButton.innerHTML = 'Edit';

        note.append(editButton);

        note.append(removeButton);

        ////  Creating funtion for "remove" button. ////

        function removeNote() {

                note.remove();

        }

        ////  Creating funtion for "edit" button. ////

        function editNote() {

                var saveButton = document.createElement('button'); // Creatin save button that will be replased with edit Button.

                saveButton.innerHTML = 'Save';

                note.append(saveButton);

                editButton.replaceWith(saveButton);

                text.replaceWith(editableText);

                editableText.value = text.textContent;

                ////  Creating funtion for "save" button. ////

                function saveNote() {

                        text.innerHTML = editableText.value;

                        editableText.replaceWith(text);

                        saveButton.replaceWith(editButton);

                };

                saveButton.addEventListener('click', saveNote);  // Calling the "saveNote" function ofter "saveButton" pressed.

        }

        removeButton.addEventListener('click', removeNote); // Calling the "removeNote" function ofter "removeButton" pressed.

        editButton.addEventListener('click', editNote); //Calling the "editNote" function ofter "editButton" pressed.

}

addNoteButton.addEventListener('click', createTask); // Calling the "createTask" function ofter "addNoteButton" pressed.