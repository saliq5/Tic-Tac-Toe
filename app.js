const nameBox = document.getElementById("name");
const box = document.querySelector(".game");
const res = document.getElementById("res");
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const b7 = document.querySelector("#b7");
const b8 = document.querySelector("#b8");
const b9 = document.querySelector("#b9");

player='X';
let turn = 0;

updateName();

function updateName(){
    if(turn >= 9) {
        nameBox.innerHTML=`Game Tied!`;
        res.classList.add("active");
    }
    else if(turn %2 ===0){
        nameBox.innerHTML=`Current Player - X`;
        player ='X';
    }
    else {
        nameBox.innerHTML=`Current Player - O`;
        player='O';
    }
}

function checkFinish(num, str){
    if(num==1){
        if(b4.textContent==str && b7.textContent==str){
            b1.classList.add("win");
            b4.classList.add("win");
            b7.classList.add("win");
            return true;
        }

        else if(b2.textContent==str && b3.textContent==str){
            b1.classList.add("win");
            b2.classList.add("win");
            b3.classList.add("win");
            return true;
        }

        else if(b5.textContent==str && b9.textContent==str){
            b1.classList.add("win");
            b5.classList.add("win");
            b9.classList.add("win");
            return true;
        }
    }

    else if(num==2){
        if(b1.textContent==str && b3.textContent==str){
            b1.classList.add("win");
            b2.classList.add("win");
            b3.classList.add("win");
            return true;
        }

        else if(b5.textContent==str && b8.textContent==str){
            b2.classList.add("win");
            b5.classList.add("win");
            b8.classList.add("win");
            return true;
        }
    }

    else if(num==3){
        if(b1.textContent==str && b2.textContent==str){
            b1.classList.add("win");
            b2.classList.add("win");
            b3.classList.add("win");
            return true;
        }

        else if(b6.textContent==str && b9.textContent==str){
            b3.classList.add("win");
            b6.classList.add("win");
            b9.classList.add("win");
            return true;
        }

        else if(b5.textContent==str && b7.textContent==str){
            b3.classList.add("win");
            b5.classList.add("win");
            b7.classList.add("win");
            return true;
        }
    }

    else if(num==4){
        if(b1.textContent==str && b7.textContent==str){
            b1.classList.add("win");
            b4.classList.add("win");
            b7.classList.add("win");
            return true;
        }

        else if(b5.textContent==str && b6.textContent==str){
            b4.classList.add("win");
            b5.classList.add("win");
            b6.classList.add("win");
            return true;
        }
    }

    else if(num==5){
        if(b1.textContent==str && b9.textContent==str){
            b1.classList.add("win");
            b5.classList.add("win");
            b9.classList.add("win");
            return true;
        }

        else if(b2.textContent==str && b8.textContent==str){
            b8.classList.add("win");
            b2.classList.add("win");
            b5.classList.add("win");
            return true;
        }

        else if(b3.textContent==str && b7.textContent==str){
            b3.classList.add("win");
            b5.classList.add("win");
            b7.classList.add("win");
            return true;
        }

        else if(b4.textContent==str && b6.textContent==str){
            b4.classList.add("win");
            b5.classList.add("win");
            b6.classList.add("win");
            return true;
        }
    }

    else if(num==6){
        if(b3.textContent==str && b9.textContent==str){
            b3.classList.add("win");
            b6.classList.add("win");
            b9.classList.add("win");
            return true;
        }

        else if(b4.textContent==str && b5.textContent==str){
            b4.classList.add("win");
            b5.classList.add("win");
            b6.classList.add("win");
            return true;
        }
    }

    else if(num==7){
        if(b4.textContent==str && b1.textContent==str){
            b1.classList.add("win");
            b4.classList.add("win");
            b7.classList.add("win");
            return true;
        }

        else if(b8.textContent==str && b9.textContent==str){
            b7.classList.add("win");
            b8.classList.add("win");
            b9.classList.add("win");
            return true;
        }

        else if(b5.textContent==str && b3.textContent==str){
            b3.classList.add("win");
            b5.classList.add("win");
            b7.classList.add("win");
            return true;
        }
    }

    else if(num==8){
        if(b5.textContent==str && b2.textContent==str){
            b2.classList.add("win");
            b5.classList.add("win");
            b8.classList.add("win");
            return true;
        }

        else if(b7.textContent==str && b9.textContent==str){
            b7.classList.add("win");
            b8.classList.add("win");
            b9.classList.add("win");
            return true;
        }

    }

    else if(num==9){
        if(b8.textContent==str && b7.textContent==str){
            b9.classList.add("win");
            b8.classList.add("win");
            b7.classList.add("win");
            return true;
        }

        else if(b6.textContent==str && b3.textContent==str){
            b6.classList.add("win");
            b9.classList.add("win");
            b3.classList.add("win");
            return true;
        }

        else if(b5.textContent==str && b1.textContent==str){
            b1.classList.add("win");
            b5.classList.add("win");
            b9.classList.add("win");
            return true;
        }
    }

    return false;

}

function func2(et){
    b1.textContent=""; b1.classList.remove("win");
    b2.textContent=""; b2.classList.remove("win");
    b3.textContent=""; b3.classList.remove("win");
    b4.textContent=""; b4.classList.remove("win");
    b5.textContent=""; b5.classList.remove("win");
    b6.textContent=""; b6.classList.remove("win");
    b7.textContent=""; b7.classList.remove("win");
    b8.textContent=""; b8.classList.remove("win");
    b9.textContent=""; b9.classList.remove("win");
    turn = 0;
    updateName();
    box.addEventListener("click", func);
    res.removeEventListener("click", func2);
    res.classList.remove("active");
}



function func(e){
    let boxClicked = e.target;
    console.log(boxClicked.id[1]);
    if(boxClicked.textContent===""){
        if(player == 'X'){
            boxClicked.textContent = "X";
            if(!checkFinish(boxClicked.id[1], 'X')){
                turn++;
                updateName();
            }
            else {
                res.classList.add("active")
                res.addEventListener("click", func2);
                nameBox.innerHTML=`Winner - X`;
                box.removeEventListener("click", func);
            }
        }
        else {
            boxClicked.textContent = 'O';
            if(!checkFinish(boxClicked.id[1], 'O')){
                turn++;
                updateName();
            }
            else {
                res.classList.add("active")
                res.addEventListener("click", func2);
                nameBox.innerHTML=`Winner - O`;
                box.removeEventListener("click", func);
            }
        }
    }
}



box.addEventListener("click", func);

