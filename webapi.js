const getdata = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.log("error", err);
  }
};

const appenddata = (todolist, id) => {
  const item = document.getElementById(id);
  let html = todolist.reduce((html, todo) => {
    return (html += `<li>
       ${todo.title}
      </li>`);
  }, "");
  
  html?item.innerHTML = html:item.innerHTML="No Data Found"
};



const handlesubmit = async (e) => {
  const form = document.getElementById("form");
  const id = form.elements[0].value;
  const data = await getdata();
  const todolist = data.filter((todo) => {
    return todo.userId == id && todo.completed == false;
  });
  const completedlist = data.filter((complete) => {
    return complete.userId == id && complete.completed == true;
  });
  appenddata(todolist, "pending");
  appenddata(completedlist, "completed");
};

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});