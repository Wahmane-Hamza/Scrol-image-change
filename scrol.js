let section1 =document.getElementById("section1");

window.addEventListener('scroll',function (){
    let value=parseInt(window.scrollY);

    if (value===0){
        section1.style.backgroundImage ="url('2.png')";
    }
    
    if (value>=40 && value<150){
        section1.style.backgroundImage ="url('3.png')";
        }
    if (value>=150){
            section1.style.backgroundImage ="url('4.png')";
            }

})

