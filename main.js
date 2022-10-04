window.onload = function(){
    var toggle = document.getElementById('chek');
    toggle.addEventListener('change', event =>{
        if(event.target.checked){
            document.body.classList.add('dark');
            var menu = document.getElementsByClassName('menu')[0].getElementsByTagName('a');
            for(let i=0; i<menu.length; i++){
                menu[i].style.color = "white"
                menu[i].style.background = "midnightblue"
                menu[i].addEventListener('mouseover', function(){
                    menu[i].style.background = "grey"
                });
                menu[i].addEventListener('mouseleave', function(){
                    menu[i].style.background = "midnightblue"  
                    menu[i].style.color = "white"
                });
            }
        }else{
            document.body.classList.remove('dark');
            var menu = document.getElementsByClassName('menu')[0].getElementsByTagName('a');
            for(let i=0; i<menu.length; i++){
                menu[i].style.color = "black"
                menu[i].style.background = "#40e0d0"
                menu[i].addEventListener('mouseover', function(){
                    menu[i].style.color = "white"
                    menu[i].style.background = "black"
                });
                menu[i].addEventListener('mouseleave', function(){
                    menu[i].style.background = "#40e0d0"
                    menu[i].style.color = "black"
                });
            }
        }
    })
}