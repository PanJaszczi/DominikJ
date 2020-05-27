
var taskInput=document.getElementById("ListaD");
var addButton=document.getElementsByTagName("button")[0];
var Wypelnione=document.getElementById("Wypelnione");

var createNewTaskElement=function(taskString){
var listItem=document.createElement("li");
var label=document.createElement("label");
label.innerText=taskString;
listItem.appendChild(label);
return listItem;
}

var addTask=function(){
console.log("Add Task...");
var listItem=createNewTaskElement(taskInput.value);
Wypelnione.appendChild(listItem);
bindTaskEvents(listItem, taskCompleted);
taskInput.value="";
}
var editTask=function(){
var listItem=this.parentNode;
var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
}
var ajaxRequest=function(){
	console.log("AJAX Request");
}
addButton.addEventListener("click",addTask);

