window.addEventListener('load', () => {

// alert("Hello There");
// console.log("Window Loaded");
const input = document.querySelector("#new-task-input");
const form = document.querySelector("#new-task-form");
const list_el = document.querySelector(".tasks");

const edit_btn = document.querySelector(".edit");

console.log(edit_btn);

// console.log("List element is ", list_el1);
// console.log(form);

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log("Submit Event Occurred");

    const task_note = input.value;
    // const tasks = document.createElement("div");
    // tasks.classList.add("tasks");
    const task_ele = document.createElement("div");
    task_ele.classList.add("task");
    // task_ele.innerHTML = `${task_note}`;

    const task_input_ele = document.createElement("input");
    task_input_ele.type = "text";
    task_input_ele.classList.add("text");
    task_input_ele.value = task_note;
    task_input_ele.setAttribute('readonly','readonly');
    task_edit_btn = document.createElement("button");
    task_edit_btn.classList.add("edit");
    task_edit_btn.innerText = "Edit";
    task_delete_btn = document.createElement("button");
    task_delete_btn.classList.add("delete");
    task_delete_btn.innerText = "Delete";
    

    task_edit_btn.addEventListener("click", (e)=> {
        if(task_edit_btn.innerText.toLowerCase() == "edit") {
            console.log("Runtime Edit Button Pressed");
            task_input_ele.removeAttribute("readonly");
            task_edit_btn.innerText = "Save";            
        } else {
            task_input_ele.setAttribute('readonly','readonly');
            task_edit_btn.innerText = "Edit";
        }

    });

    task_delete_btn.addEventListener("click", (e)=> {
        console.log("Delete Button Pressed");
        list_el.removeChild(task_ele);

    });


    task_ele.appendChild(task_input_ele);
    task_ele.appendChild(task_edit_btn);
    task_ele.appendChild(task_delete_btn);

    // tasks.appendChild(task_ele);
    
    list_el.appendChild(task_ele);

    console.log(list_el);
    
});

edit_btn.addEventListener("click", (e)=> {
    console.log("Edit Pressed",edit_btn.parentElement);
});



});


