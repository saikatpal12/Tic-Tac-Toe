let btn = document.querySelectorAll(".btn");

let reset=document.querySelector("#reset");

let winer=document.querySelector("#k");

let new_btn=document.querySelector("#l");

let turn = "x";

let new_g=document.querySelectorAll(".winner");

const win =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let count=0;

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if((turn==="x")&&( box.innerText==="*")){
            box.innerText="X";
            turn="o";
            count++;
            
        }else if((turn==="o")&&( box.innerText==="*")){
            box.innerText="O"; 
            turn="x";
            count++;
            
        }
        wincheck();
    })
})

restart=()=>{
    btn.forEach((box)=>{
        box.innerText="*";
        turn="x";
    })    
    count=0;
    winer.style.visibility ='hidden';
    new_btn.style.visibility ='hidden';
}
reset.addEventListener("click",restart);

new_btn.addEventListener("click",restart);

let win_flag =0;

const wincheck=()=>{
    for(let pattern of win){
        let btn_1=btn[pattern[0]].innerText;
        let btn_2=btn[pattern[1]].innerText;
        let btn_3=btn[pattern[2]].innerText;
        if((btn_1!="*" && btn_2!="*" && btn_3!="*")&&(btn_1===btn_2 && btn_1===btn_3)&&(win_flag===0)){
                winer.innerText=`Winner is ${btn_1}`;
                winer.style.visibility = 'visible';
                new_btn.style.visibility = 'visible';
                win_flag=1;
            }
        else if(count>=9 && (win_flag===0)){
            winer.innerText="Draw";
            winer.style.visibility = 'visible';
            new_btn.style.visibility = 'visible';
        }
    }
}