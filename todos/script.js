const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoText = input.value;
    if (todoText) {
        const todoEl = document.createElement("li");
        todoEl.classList.add("list-element")
        todoEl.innerText = todoText;
        todoEl.addEventListener("click", () => {
            saveText();
            todoEl.classList.toggle("completed");
        });
        todoEl.addEventListener("contextmenu",
        (e) => {
          e.preventDefault();
          todoEl.remove();
          saveText();
        });
        todos.appendChild(todoEl);
        input.value = "";
        saveText();
    }
});

function saveText(){
var selectall=document.querySelectorAll(".list-element");
  let dataArr=[];
  for(let i=0;i<selectall.length;i++){
    dataArr[i]=selectall[i].innerText;
  }
  let dataArrString=JSON.stringify(dataArr);
  localStorage.setItem("list-string",dataArrString);

}

window.addEventListener("load",() => {
    let dataArrStringLC=localStorage.getItem("list-string");
    console.log(dataArrStringLC);
    if(dataArrStringLC){
        
        let dataArrLC=JSON.parse(dataArrStringLC);
        for(let i=0;i<dataArrLC.length;i++){
            const todoText = dataArrLC[i];
            if (todoText) {
                const todoEl = document.createElement("li");
                todoEl.classList.add("list-element")
                todoEl.innerText = todoText;
                todoEl.addEventListener("click", () => {
                    saveText();
                    todoEl.classList.toggle("completed");
                });
                todoEl.addEventListener("contextmenu",
                () => {
                  todoEl.remove();
                  saveText();
                });
                todos.appendChild(todoEl);
                input.value = "";
                saveText();
            }
        }


    }


})