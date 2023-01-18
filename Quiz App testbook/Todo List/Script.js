// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#newtask input').value.length == 0){
//         alert("Kindly Enter Task Name!!!!")
//     }

//     else{
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }
// document.querySelector('#push').onclick=function(){
//     if(document.querySelector('#newtask input').value.length==0)
//     alert("hi enter ");
// }
// else
// {

// }
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
// return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
// return false;
}
}