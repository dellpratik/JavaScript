let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');


(function() {
    console.log("Print Hello !!!");

    buttons.forEach((button)=> {        
        // Adding event listener here...
        button.addEventListener('click', (eve)=> {
            let value = eve.target.dataset.num;
            // screen.value = screen.value + value;
            screen.value += value;
        })
    });


    equal.addEventListener('click', (eve)=> {
        if(screen.value === '') {
            screen.value = "";
        }
        else {
            let answer = eval(screen.value);
            console.log("Answer Is ", answer);
            screen.value = answer ;           
        }
    })

    clear.addEventListener('click', (eve)=> {
        screen.value = 0;
    })

})();