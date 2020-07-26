var list=document.getElementById("list");

function addTodo()
{
    var todo_item=document.getElementById("todo-item");


    //create li text node
    var li=document.createElement("li");
  

    //create element span

    var para=document.createElement("span");
    para.setAttribute("id","para");

    para.innerHTML=todo_item.value;

    li.appendChild(para);


    //create delete button
    var delBtn=document.createElement("img");
    delBtn.setAttribute("src","Images/delete.png");
    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onclick","deleteItem(this)");

    //create edit Button
    var editBtn=document.createElement("img");
    editBtn.setAttribute("src","Images/edit.png");
    
    editBtn.setAttribute("class","editButton");
    editBtn.setAttribute("onclick","editItem(this)");

    li.appendChild(editBtn);
    li.appendChild(delBtn);

    list.appendChild(li);


    todo_item.value="";
}

function deleteItem(e)
{

    e.parentNode.remove();
}

function deleteAll()
{
    list.innerHTML="";
}

function editItem(e)
{
    var val=document.getElementById("para").innerHTML;
    console.log(val)
    var editValue = prompt("Enter edit value",val);
    document.getElementById("para").innerHTML=editValue;
}
