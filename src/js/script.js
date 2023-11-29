const form = document.querySelector("form")
const e_input = document.querySelector("#e_input");
const submit_btn = document.querySelector("#submit_btn")

window.addEventListener('load',()=>{
    e_input.value="";
})

form.addEventListener('submit', e => {
    e.preventDefault();
    show_alert();
})

function show_alert(){
    const e_Regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if(!e_Regex.test(e_input.value)){
        const div = document.createElement('div');
        div.className="alert text-xs font-semibold tracking-wider text-left text-Light_Red ps-9 mt-2"
        div.append("Please enter a valid email address");
        e_input.parentElement.after(div);
    }else{
       submit_btn=true; 
    }
    submit_btn.disabled=true;
    submit_btn.classList.add('cursor-not-allowed')
}

e_input.addEventListener('focus',()=>{
    document.querySelector('.alert').remove();
    submit_btn.disabled=false;
    submit_btn.classList.remove('cursor-not-allowed')
})
    