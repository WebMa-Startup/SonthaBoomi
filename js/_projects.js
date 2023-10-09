/*

Author : Webma 
Version: 1.0

Code Logic

1.Getting the Divisions using js GetElementById Function.
2. Adding onclick Events. 
3.These functionality written as Expand function

Variables Defenition

expand_btn stores the onclick btn to perform the expand funciton

Expand_div stores the expansion division.

exit stores the exit btn to perform exit action.

*/






console.log('Welcome to SonthaBoomi !');
// todo   Get The Dom Element for expand function

function expand(Expandbtn, Expand_Div, Exit) {
    //getting the division
    const expand_btn = document.getElementById(`${Expandbtn}`);

    const expand_Div = document.getElementById(`${Expand_Div}`);
  

    const exit = document.getElementById(`${Exit}`);
    

    expand_btn.onclick = () => {
        expand_Div.style.display = 'block';
    };
    exit.onclick = () => {
        expand_Div.style.display = 'none';
    };
};
// funciton call
expand('expand' , 'expand-div' , 'exit');




