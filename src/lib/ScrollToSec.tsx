export const ScrollToSec = (id:string) =>{
    const elementById = document.getElementById(id);
    if(elementById){
        elementById.scrollIntoView({ behavior:"smooth"});
    }
};