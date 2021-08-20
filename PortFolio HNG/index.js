let formBtn = document.getElementById("form-btn"); 
let emailContent = document.getElementById("e-mail"); 
let formName = document.getElementById("name"); 
let messageContent = document.getElementById("message");  
let formSuccess = document.getElementById("form-success");

formBtn.addEventListener("click", function(){


    if(formName.value && emailContent.value){
        formSuccess.style.color ="blue"
        formSuccess.textContent = `Submitted Successfully`
        formName.value=""
        messageContent.value=""
        emailContent.value=""
    }else{
        formSuccess.textContent = `Please fill all fields`
    }
})




