const elForm = document.querySelector(".hero-form");
const elHeroBtn = document.querySelector(".js-hero-btn");
const elHero = document.querySelector(".hero");
const elUserName = document.querySelector(".js-name-input");
const elUserSure = document.querySelector(".js-sure-input");
const elErorNameSpan = document.querySelector(".js-name-span");
const elErorSureSpan = document.querySelector(".js-sure-span");
const elErorSureField = document.querySelector(".js-sure-f");
const elErorNameField = document.querySelector(".js-name-f");
const elEmail = document.querySelector(".js-email");
const elEmailF = document.querySelector(".js-email-fields");
const elEmailLegend = document.querySelector(".js-email-legend");
const elEmailEror = document.querySelector(".js-email-eror");

const elPass = document.querySelector(".js-pasw");
const elPassF = document.querySelector(".js-pasw-f");
const elPassL = document.querySelector(".js-pasw-l");
const elPassInput = document.querySelector(".js-pasw-span");
const elList = document.querySelector(".info-form__list")
let elProject = document.querySelector(".project")
let elResult = document.querySelector(".result")




 elForm.addEventListener('submit', function(evt){
  evt.preventDefault();
 let nameValue = elUserName.value.trim();
 let sureNameValue = elUserSure.value.trim();
 let emailValue = elEmail.value.trim();
 let pasw = elPass.value.trim();
 let paswRepeat = jsRepeatP.value.trim();


  if(nameValue.length<2 || nameValue>32 || (!isNaN(nameValue))){
    elErorNameSpan.classList.add("error");
    elUserName.classList.add("error-color");
    elErorNameField.classList.add("red-border");
    jsNameLegend.classList.add("error-color")

    return
  }
  else {
    elErorNameField.classList.remove("red-border");
    elUserName.classList.remove("error-color");
    elErorNameSpan.classList.remove("error");
    jsNameLegend.classList.remove("error-color")


  };

  if(sureNameValue.length<2 || sureNameValue>32){
    elUserSure.classList.add(".error-color");
    elErorSureSpan.classList.add("error");
    elErorSureField.classList.add("red-border");
    jsSureLegend.classList.add("error-color");
    return
  }
  else {
    elErorSureSpan.classList.remove("error");
    elUserSure.classList.remove(".error-color");
    elErorSureField.classList.remove("red-border");
    jsSureLegend.classList.remove("error-color");

  };

  if((!emailValue.endsWith('@gmail.com')) && (!emailValue.endsWith('@mail.ru'))){
    elEmail.classList.add("error-color")
    jsEmailBtn.classList.add("errorr")
    elEmailEror.classList.add("error");
    elEmailF.classList.add("red-border");
    elEmailLegend.classList.add("error-color"); 
    return
  }
  else {
    elEmail.classList.remove("error-color")
    jsEmailBtn.classList.remove("errorr")
    elEmailEror.classList.remove("error");
    elEmailF.classList.remove("red-border");
    elEmailLegend.classList.remove("error-color"); 

  };

  if(pasw.length != 8 || !isNaN(pasw) ){
    elPass.classList.add("error-color");
    elPassF.classList.add("red-border");
    elPassL.classList.add("error-color");
    elPassInput.classList.add("error");
    return
  }else{
    elPass.classList.remove("error-color");
    elPassF.classList.remove("red-border");
    elPassL.classList.remove("error-color");
    elPassInput.classList.remove("error");
  };

  if(pasw != paswRepeat){
    jsRepeatP.classList.add("error-color");
    jsRepeatF.classList.add("red-border");
    jsRepeatL.classList.add("error-color");
    jsRepeatSpan.classList.add("error");
    return

  }else{
    jsRepeatP.classList.remove("error-color")
    jsRepeatF.classList.remove("red-border");
    jsRepeatL.classList.remove("error-color");
    jsRepeatSpan.classList.remove("error");
  }
   
  

  elHeroBtn.addEventListener('click', function() {
    if (!checkbox.checked) {
        checkboxLabel.classList.add("error-color");
        return
    } else {
      checkboxLabel.classList.remove("error-color");
      elHero.classList.add("none")
      elProject.classList.add("blok")
    }
});
 })


 jsRepeatBtn.addEventListener('click', function() {
  if (jsRepeatP.type === "password") {
      jsRepeatP.type = "text";
  } else {
      jsRepeatP.type = "password";
  }
});

jsPassBtn.addEventListener('click', function() {
  if (elPass.type === "password") {
      elPass.type = "text";
  } else {
      elPass.type = "password";
  }
});





// slick 

$(document).ready(function(){
  $('.info-form__list').slick({
    dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
  });
});


// ------------------------------------------
 const eluserName = document.querySelector(".item-name")
 const  eluserEmail = document.querySelector(".item-email")
 const eluserNum = document.querySelector(".userNumber")
 const eluserCompany = document.querySelector(".item-company")
 const elRadio = document.querySelector(".radio")

  userForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    let userNameValue = eluserName.value.trim();

    if(userNameValue.length<2 || userNameValue>30 ||!isNaN(userNameValue) ){
  eluserName.classList.add("error-color");
  eluserName.classList.add("red-border");
  erorSpan.classList.add("error");
  
      return
    }
    else {
      eluserName.classList.remove("error-color");
      eluserName.classList.remove("red-border");
      erorSpan.classList.remove("error");
  
  
    };

  let userEmailName = eluserEmail.value.trim();

    if((!userEmailName.endsWith('@gmail.com')) && (!userEmailName.endsWith('@mail.ru'))){
      eluserEmail.classList.add("error-color");
      eluserEmail.classList.add("red-border");
  erorSpan2.classList.add("error");
  return
    }else{
      eluserEmail.classList.remove("error-color");
      eluserEmail.classList.remove("red-border");
  erorSpan2.classList.remove("error");
  

    }
  


let phoneNumber = eluserNum.value.trim();
const phoneNumberPattern = /^(\+998)[0-9]{9}$/; // RegExp Pattern

if (!phoneNumberPattern.test(phoneNumber)) {
    eluserNum.classList.add("error-color");
    eluserNum.classList.add("red-border");
    erorSpan3.classList.add("error");
return
   
} else {
  eluserNum.classList.remove("error-color");
  eluserNum.classList.remove("red-border");
  erorSpan3.classList.remove("error");  
}

let company = eluserCompany.value.trim();
if( company.length<3 || company.length>20){
  eluserCompany.classList.add("error-color")
  eluserCompany.classList.add("red-border")
  erorSpan4.classList.add("error")
return
}
else{
  eluserCompany.classList.remove("error-color")
  eluserCompany.classList.remove("red-border")
  erorSpan4.classList.remove("error")
}


const radioLabels = document.querySelectorAll('.labRadio input[type="radio"]');



    let selectedRadio = false;

    radioLabels.forEach(function(radio) {
        if (radio.checked) {
            selectedRadio = radio;
            radio.closest('label').classList.add("radio-label-checked");
          

        } else  {
            radio.closest('label').classList.remove("radio-label-checked");
          
        }
    });

     
let radiovalue = selectedRadio.value;

// ------------------------------------------


const radioP = document.querySelector('.radio-p');
const radioP1 = document.querySelector('.radio-p1');
const radioP2 = document.querySelector('.radio-p2');
const radioP3 = document.querySelector('.radio-p3');
const radioLabelP = document.querySelector('.radio-label-p');
const radioLabelP1 = document.querySelector('.radio-label-p1');
const radioLabelP2 = document.querySelector('.radio-label-p2');
const radioLabelP3 = document.querySelector('.radio-label-p3');

let radioPvalue = 0;

if (radioP.checked) {
  radioPvalue = radioP.value.trim();
  radioLabelP.classList.add("radio-label-checked");
  radioLabelP2.classList.remove("radio-label-checked");
  radioLabelP3.classList.remove("radio-label-checked");
  radioLabelP1.classList.remove("radio-label-checked");

} else if (radioP1.checked) {
  radioPvalue = radioP1.value.trim();
  radioLabelP1.classList.add("radio-label-checked");
  radioLabelP.classList.remove("radio-label-checked");
  radioLabelP2.classList.remove("radio-label-checked");
  radioLabelP3.classList.remove("radio-label-checked");


} else if (radioP2.checked) {
  radioPvalue = radioP2.value.trim();
  radioLabelP2.classList.add("radio-label-checked");
  radioLabelP1.classList.remove("radio-label-checked");
  radioLabelP.classList.remove("radio-label-checked");
  radioLabelP3.classList.remove("radio-label-checked");


} else if (radioP3.checked) {
  radioPvalue = radioP3.value.trim();
  radioLabelP3.classList.add("radio-label-checked");
  radioLabelP1.classList.remove("radio-label-checked");
  radioLabelP2.classList.remove("radio-label-checked");
  radioLabelP.classList.remove("radio-label-checked");



} else {
  alert("Bdetingizni tanlang!");
}
if( radioP3.checked ||radioP2.checked ||radioP1.checke ||radioP.checked){
  elProject.classList.add("nonep");
elResult.classList.add("blok")

}


const nameSpan = document.querySelector("#NAME");
const emailSpan = document.querySelector("#EMAIL");
const contactSpan = document.querySelector("#CONTACT");
const companySpan = document.querySelector("#COMPANY");
const serviceSpan = document.querySelector("#SERVICE");
const budgetSpan = document.querySelector("#BUDGET");

nameSpan.textContent = userNameValue;

emailSpan.textContent = userEmailName;

contactSpan.textContent = phoneNumber;

companySpan.textContent = company;

serviceSpan.textContent = radiovalue;

budgetSpan.textContent = radioPvalue;



  })



