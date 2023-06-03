let menu = document.getElementById("menu_links")
let menu_barras = document.getElementById("menu_barras")

function mostrarMenu()
{
 if(window.getComputedStyle(menu).display == "none")  
    {
        //mostre o menu
        menu.style.display = "flex";
        menu_barras.setAttribute("aria-expander","true")
        menu_barras.setAttribute("aria-label","fecha o menu")



    }else

    {
        //esconda o menu
        menu.style.display = "none";
        menu_barras.setAttribute("aria-expander","false")
        menu_barras.setAttribute("aria-label","abrir o menu")
    }
}  


addEventListener("resize",()=> 
{
    if(window.innerWidth>768)
    {
    menu.style.display="flex"

    }else
        {
        menu.style.display = "none";
        }

});





