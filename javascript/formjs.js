let form=document.getElementById("newform");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateForm();
});
function validateForm() 
{
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let name= /^[A-Za-z]+$/;
    let password= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let pass = document.forms["myForm"]["password"].value;
    let pass1 = document.forms["myForm"]["password2"].value;
    let emailnew = document.forms["myForm"]["email"].value;
    let address = document.forms["myForm"]["address"].value;
    let language1 = document.getElementById("language1").checked;
    let language2 = document.getElementById("language2").checked;
    let language3 = document.getElementById("language3").checked;
    // let language1 = document.forms["myForm"]["hindi"];
    // let language2 = document.forms["myForm"]["mal"];
    let birth = document.forms["myForm"]["dob"].value;
    let gender1 = document.forms["myForm"]["gen1"].value;
    let number = document.forms["myForm"]["mobile"].value;
    let file = document.forms["myForm"]["fileupload"].value;
    let validmobile=/^\d{10}$/;
    // let Notvalid = document.getElementsByClassName("Notvalid");
    if (fname == "") 
    {
        // Notvalid[0].innerHTML="First Name must be filled out";
        alert("First Name must be filled out");
        return false;
    }
    else if(!isNaN(fname))
    {
        // Notvalid[0].innerHTML="First Name name should not be number";
        alert("First name should not be number");
        return false;
    }
    else if(!fname.match(name))
    {
        // Notvalid[0].innerHTML="Name only allowed alphabets";
        alert("Name only allowed alphabets");
        return false;
    }
    else
    {
        // Notvalid[0].innerHTML="";
    }
    if (lname == "") 
    {
        // Notvalid[1].innerHTML="Last Name must be filled out";
        alert(" Last Name must be filled out");
        return false;
    }
    else if(!isNaN(lname))
    {
        // Notvalid[1].innerHTML="Last name should not be number";
        alert("Last name should not be number");
        return false;
    }
    else if(!lname.match(name))
    {
        // Notvalid[1].innerHTML="Name only allowed alphabets";
        alert("Name only allowed alphabets");
        return false;
    }
    else
    {
        // Notvalid[1].innerHTML="";
    }
    if (emailnew == "") 
    {
        // Notvalid[2].innerHTML="Email Id must be filled out";
        alert("Email Id must be filled out");
        return false;
    }
    else
    {
        // Notvalid[2].innerHTML="";
    }
    if (address == "") 
    {
        // Notvalid[3].innerHTML="Adress must be filled out";
     alert("Adress must be filled out");
     return false;
    }
    else
    {
        // Notvalid[3].innerHTML="";
    }
    if (language1==false && language2==false && language3==false) 
    {
        // Notvalid[4].innerHTML="Languages must be filled out";
        alert("Languages must be filled out");
        return false;
    }
    else
    {
        // Notvalid[4].innerHTML="";
    }
    if (birth == "") 
    {
        // Notvalid[5].innerHTML="DOB must be filled out";
        alert("DOB must be filled out");
        return false;
    }
    else
    {
        // Notvalid[5].innerHTML="";
    }
    if (gender1) 
    {
        // Notvalid[6].innerHTML="Gender must be filled out";
        alert("Gender must be filled out");
        return false;
    }
    else
    {
        // Notvalid[6].innerHTML="";
    }
    if (number == "") 
    {
        // Notvalid[7].innerHTML="Mobile number must be filled out";
        alert("Mobile number must be filled out");
        return false;
    }
    else if(!number.match(validmobile))
    {
        // Notvalid[7].innerHTML="Number not valid";
        alert("Number not valid");
        return false;
    }
    else
    {
        // Notvalid[7].innerHTML="";
    }
    if(!pass.match(password)||!pass1.match(password))
    {
        // Notvalid[8].innerHTML="Password which must include one small,capital,special letters";
        alert("Password which must include one small,capital,special letters");
        return false;
    }
    else
    {
        // Notvalid[8].innerHTML="";
    }
    if (file=="") 
    {
        // Notvalid[9].innerHTML="Profile image must be filled out";
        alert("Profile image must be filled out");
        return false;
    }
    else
    {
        // Notvalid[9].innerHTML="";
    }
}

    

    // if (pass!=pass1)
    // {
    //     alert("Password Error");
    //     return false;
    // }
    // else if(!pass.match(password))       
    // {
    //     alert("Enter correct password");
    //     return false;
    // }
    // else if(pass1.match(password))
    // {
    //     alert("Enter correct password");
    //     return false;
    // }
    // else if( pass==pass1)
    // {
    //     alert("correct");
    // }
    // if(mobile =="")
    // {
    //     alert("Mobile number must be filled out");
    //     return false;
    // }
    
