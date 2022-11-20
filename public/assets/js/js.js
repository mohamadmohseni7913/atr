let status = false;
const overLay=()=>{
    let button=document.getElementById("overLay");
 
    if (!status) {
        block(button);
    } else {
        none(button);
    }

    return;
}
function block(button) {
    // button.style.transform="scale(1)";
    button.style.height="330px";
    button.style.opacity=1;

       status = true;
   }

   function none(button) {

    // button.style.transform="scale(0)";
    button.style.height="0";

    button.style.opacity=0;


       status = false;

   }