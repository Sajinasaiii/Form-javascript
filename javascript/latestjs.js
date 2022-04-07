function validateForm() 
{
    let fname = document.forms["myForm"]["fname"];
    let lname = document.forms["myForm"]["lname"];
    let name= /^[A-Za-z]+$/;
    let password= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let password1 = document.forms["myForm"]["password1"];
    let password2 = document.forms["myForm"]["password2"];
    let emailnew = document.forms["myForm"]["email"];
    let address = document.forms["myForm"]["address"];
    let language1 = document.getElementById("language1");
    let language2 = document.getElementById("language2");
    let language3 = document.getElementById("language3");
    // let language1 = document.forms["myForm"]["hindi"];
    // let language2 = document.forms["myForm"]["mal"];
    let birth = document.forms["myForm"]["dob"];
    let gen1 = document.getElementById("gen1");
    let gen2 = document.getElementById("gen2");
    let number = document.forms["myForm"]["mobile"];
    let file = document.forms["myForm"]["fileupload"];
    let validmobile=/^\d{10}$/;
    let form=document.getElementById("newform");
    let validemailid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let highlight = document.getElementsByClassName(highlight);
    // let nextSibling = currentNode.nextElementSibling;
    // let Notvalid = document.getElementsByClassName("Notvalid");
form.addEventListener("submit",(e)=>{
        e.preventDefault();
        validateForm();
});
if (fname.value.trim() == "") 
    {
        fname.nextElementSibling.innerHTML="First Name must be filled out";
        fname.className="highlight";
        fname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else if(!isNaN(fname.value))
    {
        fname.nextElementSibling.innerHTML="First Name name should not be number";
        fname.className="highlight";
        fname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else if(!fname.value.match(name))
    {
        fname.nextElementSibling.innerHTML="Name only allowed alphabets";
        fname.className="highlight";
        fname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else
    {
        fname.nextElementSibling.innerHTML="";
        fname.className="highlightnew";
        fname.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
if (lname.value.trim() == "") 
    {
        lname.nextElementSibling.innerHTML="Last Name must be filled out";
        lname.className="highlight";
        lname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else if(!isNaN(lname.value))
    {
        lname.nextElementSibling.innerHTML="Last name should not be number";
        lname.className="highlight";
        lname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else if(!lname.value.match(name))
    {
        lname.nextElementSibling.innerHTML="Name only allowed alphabets";
        lname.className="highlight";
        lname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else
    {
        lname.nextElementSibling.innerHTML="";
        lname.className="highlightnew";
        lname.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
if (emailnew.value.trim() == "") 
    {
        emailnew.nextElementSibling.innerHTML="Email Id must be filled out";
        emailnew.className="highlight";
        emailnew.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else if(!emailnew.value.match(validemailid))
{
        emailnew.nextElementSibling.innerHTML="Email not valid";
        emailnew.className="highlight";
        emailnew.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
}
else
    {
        emailnew.nextElementSibling.innerHTML="";
        emailnew.className="highlightnew";
        emailnew.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
if (address.value.trim() == "") 
    {
        address.nextElementSibling.innerHTML="Adress must be filled out";
        address.className="highlight";
        address.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else if((address.value.length < 15) || (address.value.length > 100))
    {
        address.nextElementSibling.innerHTML="Adress must be 15-100 characters length";
        address.className="highlight";
        address.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else
    {
        address.nextElementSibling.innerHTML="";
        address.className="highlightnew";
        address.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
if (language1.checked==false && language2.checked==false && language3.checked==false) 
    {
        language3.nextElementSibling.innerHTML="Languages must be filled out";
    }
else
    {
        language3.nextElementSibling.innerHTML="";
    }
if (birth.value == "") 
    {
        birth.nextElementSibling.innerHTML="DOB must be filled out";
        birth.className="highlight";
        birth.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else
    {
        birth.nextElementSibling.innerHTML="";
        birth.className="highlightnew";
        birth.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
if (gen1.checked==false && gen2.checked==false ) 
    {
        gen2.nextElementSibling.innerHTML="Gender must be filled out";
    }
else
    {
        gen2.nextElementSibling.innerHTML="";
    }
if (number.value.trim() == "") 
    {
        number.nextElementSibling.innerHTML="Mobile number must be filled out";
        number.className="highlight";
        number.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else if(!number.value.match(validmobile))
    {
        number.nextElementSibling.innerHTML="Number not valid";
        number.className="highlight";
        number.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else
    {
        number.nextElementSibling.innerHTML="";
        number.className="highlightnew";
        number.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
if (password1.value.trim() == "") 
    {
        password1.nextElementSibling.innerHTML="Password must be filled out";
        password1.className="highlight";
        password2.className="highlight";
        password1.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
        password2.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else if(!password1.value.match(password)||!password2.value.match(password))
    {
        password2.nextElementSibling.innerHTML="Password which must include one small,capital,special letters";
        password1.className="highlight";
        password2.className="highlight";
        password1.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
        password2.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    }
else
    {
        password1.nextElementSibling.innerHTML="";
        password2.nextElementSibling.innerHTML="";
        password1.className="highlightnew";
        password2.className="highlightnew";
        password1.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
        password2.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
if (file.value=="") 
    {
        file.nextElementSibling.innerHTML="Profile image must be filled out";
    }
else if(file.value!="")
    {
        let validExtension=["jpeg","jpg","png"];
        let imageExtensionPosition=file.value.lastIndexOf(".");
        let inputExtension=file.value.substring(imageExtensionPosition+1);
        let result=validExtension.includes(inputExtension);
        if(!result)
        {
            file.nextElementSibling.innerHTML="File not valid";
        }
        else
        {
            file.nextElementSibling.innerHTML="";
        }
    }
else
    {
        file.nextElementSibling.innerHTML="";
    }
}

    

    
    
