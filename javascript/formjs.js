function validateForm() 
{
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let pass = document.forms["myForm"]["password"].value;
    let pass1 = document.forms["myForm"]["password2"].value;
    let mobile = document.forms["myForm"]["mobilenumber"].value;
    if (fname == "") 
    {
        alert("First Name must be filled out");
        return false;
    }
    if (lname == "") {
        alert(" Last Name must be filled out");
        return false;
    }
    if (pass1!=pass){
      alert("Password Error");
      return false;
    }
    if(pass1.length<8)       
    {
      alert("minimum 8 characters required")
      return false;
    }
    if(mobile =="")
    {
        alert("Mobile number must be filled out");
        return false;
    }
}
