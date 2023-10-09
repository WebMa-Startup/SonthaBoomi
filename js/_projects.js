console.log('Welcome to SonthaBoomi !');


// todo   Get The Dom Element for expand function



function expand(ExpandDiv) {
    //getting the division
    const expand_div = document.getElementById(`${ExpandDiv}`);
    console.log(expand_div);
    expand_div.style.display = 'block';
    expand_div.classList= 'animation';
    console.log(expand_div.classList);
}




