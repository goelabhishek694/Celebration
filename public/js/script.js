const myForm=document.querySelector('#my-form');
var name2=document.getElementById("name");
var email2=document.getElementById("email");
var phoneNumber2=document.getElementById("phoneno");

console.log("hello");

async function submitData(name,email,phoneNumber){
    const response = await axios.post("/invitation", {
       name:name,
       email:email,
       phoneNumber:phoneNumber
      });
      window.location.assign("/");
}

if (myForm) {
    myForm.addEventListener("submit", function (e) {
      e.preventDefault();
     const name=name2.value;
     const email=email2.value;
     const phoneNumber=parseInt("91"+phoneNumber2.value);
      submitData(name,email,phoneNumber);
    })
  }