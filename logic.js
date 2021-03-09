let validated = false
let emptyfields = {};
const checkForm = (e) => {
   let formDivs = document.querySelectorAll(".form-control");
   validated = true;
   formDivs.forEach(element => {
       console.log(`${element.id} -->${element.value}`)
       if (!element.value) {
           validated = false;
           emptyfields[element.id] = true
        } else {emptyfields[element.id] = false}
        console.log(emptyfields[element.id])
   });
   console.log(`Am I validated? ${validated}`);
}
const validate = (e) => {
    checkForm(e);
    if (!validated) {
        e.preventDefault();
        document.getElementById("alert_fm").classList.remove("invisible");
    } 
}
submitBtn = document.getElementById("send").onclick = (e)=>{validate(e)};