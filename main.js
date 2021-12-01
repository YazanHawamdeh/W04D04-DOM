console.log("arrowTitle");
/* START CODE UNDER THIS LINE */
const body = document.querySelector("body");
const hh = document.createElement("h1");
const ul = document.createElement("ul");
const input = document.createElement("input");
const b1 = document.createElement("button");
const del = document.createElement("button");

hh.innerText = "Todo List";
body.append(hh);
body.append(ul);

const toDos = ["wakeup", "eat beakefast", "code"];
const renderList = () => {
  for (let index = 0; index < toDos.length; index++) {
    const li = document.createElement("li");

    li.innerHTML = toDos[index];
    ul.appendChild(li);
  }
};
//renderList();

b1.innerText = "click me";
body.append(input);
body.append(b1);
const cb = () => {
  toDos.push(input.value);
  renderList();
};

b1.addEventListener("click", cb);
del.innerText = "delete";

li.appendChild(del);
