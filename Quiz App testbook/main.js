var sound2 = new Audio('Sound2.mp3');
var sound1 = new Audio('Sound1.mp3');






var button = document.querySelectorAll('.button');
Array.from(button).forEach((button)=>
{
    button.addEventListener("click",(e)=>{
        console.log(e.target.innerHTML);
        sound2.play();
        if(e.target.innerHTML=="W")
        {
            console.log("W");
            sound1.play();
        }
    })
}
)