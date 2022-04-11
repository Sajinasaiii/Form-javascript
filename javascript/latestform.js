function validateForm() {
    let fname = document.getElementById("first");
    let lname = document.getElementById("last");
    let name = /^[A-Za-z]+$/;
    let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    let emailnew = document.getElementById("email");
    let address = document.getElementById("address");
    let language1 = document.getElementById("language1");
    let language2 = document.getElementById("language2");
    let language3 = document.getElementById("language3");
    // let language1 = document.forms["myForm"]["hindi"];
    // let language2 = document.forms["myForm"]["mal"];
    let birth = document.getElementById("dob");
    let gen1 = document.getElementById("gen1");
    let gen2 = document.getElementById("gen2");
    let number = document.getElementById("mobile");
    let file = document.getElementById("fileupload");
    let validmobile = /^\d{10}$/;
    let form = document.getElementById("newform");
    let validemailid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let highlight = document.getElementsByClassName(highlight);
    // let nextSibling = currentNode.nextElementSibling;
    // let Notvalid = document.getElementsByClassName("Notvalid");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validateForm();
    });
    if (fname.value.trim() == "") {
        wrong(fname,"First Name must be filled outFirst");
        // fname.nextElementSibling.innerText = "First Name must be filled out";
        // fname.className = "highlight";
        // fname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else if (!isNaN(fname.value)) {
        wrong(fname,"First Name name should not be number");
        // fname.nextElementSibling.innerText = "First Name name should not be number";
        // fname.className = "highlight";
        // fname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else if (!fname.value.match(name)) {
        wrong(fname,"Name only allowed alphabets");
        // fname.nextElementSibling.innerText = "Name only allowed alphabets";
        // fname.className = "highlight";
        // fname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else {
        correct(fname,"");
        // fname.nextElementSibling.innerText = "";
        // fname.className = "highlightnew";
        // fname.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
    if (lname.value.trim() == "") {
        wrong(lname,"Last Name must be filled out");
        // lname.nextElementSibling.innerText = "Last Name must be filled out";
        // lname.className = "highlight";
        // lname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else if (!isNaN(lname.value)) {
        wrong(lname,"Last name should not be number");
        // lname.nextElementSibling.innerText = "Last name should not be number";
        // lname.className = "highlight";
        // lname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else if (!lname.value.match(name)) {
        wrong(lname,"Name only allowed alphabets");
        // lname.nextElementSibling.innerText = "Name only allowed alphabets";
        // lname.className = "highlight";
        // lname.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else {
        correct(lname,"");
        // lname.nextElementSibling.innerText = "";
        // lname.className = "highlightnew";
        // lname.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
    if (emailnew.value.trim() == "") {
        wrong(emailnew,"Email Id must be filled out");
        // emailnew.nextElementSibling.innerText = "Email Id must be filled out";
        // emailnew.className = "highlight";
        // emailnew.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else if (!emailnew.value.match(validemailid)) {
        wrong(emailnew,"Email not valid");
        // emailnew.nextElementSibling.innerText = "Email not valid";
        // emailnew.className = "highlight";
        // emailnew.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else {
        correct(emailnew,"");
        // emailnew.nextElementSibling.innerText = "";
        // emailnew.className = "highlightnew";
        // emailnew.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
    if (address.value.trim() == "") {
        wrong(address,"Adress must be filled out");
        // address.nextElementSibling.innerText = "Adress must be filled out";
        // address.className = "highlight";
        // address.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else if ((address.value.length < 15) || (address.value.length > 100)) {
        wrong(address,"Adress must be 15-100 characters length");
        // address.nextElementSibling.innerText = "Adress must be 15-100 characters length";
        // address.className = "highlight";
        // address.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else {
        correct(address,"");
        // address.nextElementSibling.innerText = "";
        // address.className = "highlightnew";
        // address.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
    if (language1.checked == false && language2.checked == false && language3.checked == false) {
        language3.nextElementSibling.innerText = "Languages must be filled out";
    } else {
        language3.nextElementSibling.innerText = "";
    }
    if (birth.value == "") {
        wrong(birth,"DOB must be filled out");
        // birth.nextElementSibling.innerText = "DOB must be filled out";
        // birth.className = "highlight";
        // birth.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else {
        correct(birth,"");
        // birth.nextElementSibling.innerText = "";
        // birth.className = "highlightnew";
        // birth.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
    if (gen1.checked == false && gen2.checked == false) {
        gen2.nextElementSibling.innerText = "Gender must be filled out";
    } else {
        gen2.nextElementSibling.innerText = "";
    }
    if (number.value.trim() == "") {
        wrong(number,"Mobile number must be filled out");
        // number.nextElementSibling.innerText = "Mobile number must be filled out";
        // number.className = "highlight";
        // number.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else if (!number.value.match(validmobile)) {
        wrong(number,"Number not valid");
        // number.nextElementSibling.innerText = "Number not valid";
        // number.className = "highlight";
        // number.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else {
        correct(number,"");
        // number.nextElementSibling.innerText = "";
        // number.className = "highlightnew";
        // number.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
    if (password1.value.trim() == "") {
        wrong(password1,"Password must be filled out");
        // password1.nextElementSibling.innerText = "Password must be filled out";
        // password1.className = "highlight";
        // password1.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else if (!password1.value.match(password)) {
        wrong(password1,"Password error");
        // password1.className = "highlight";
        // password1.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
        // password1.nextElementSibling.innerText = "Password error";
    } else {
        correct(password1,"");
        // password1.nextElementSibling.innerText = "";
        // password1.className = "highlightnew";
        // password1.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
    if (password2.value.trim() == "") {
        wrong(password2,"Password must be filled out");
        // password2.nextElementSibling.innerText = "Password must be filled out";
        // password2.className = "highlight";
        // password2.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else if (!password1.value.match(password) || !password2.value.match(password)) {
        wrong(password1,"Password which must include one small,capital,special letters");
        // password1.nextElementSibling.innerText = "Password correct";
        // password2.nextElementSibling.innerText = "Password which must include one small,capital,special letters";
        // password2.className = "highlight";
        // password2.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
    } else {
        correct(password2,"");
        // password2.nextElementSibling.innerText = "";
        // password2.className = "highlightnew";
        // password2.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
    }
    if (file.value == "") {
        wrong(file,"Profile image must be filled out");
        // file.nextElementSibling.innerText = "Profile image must be filled out";
    } else if (file.value != "") {
        let validPictureExtension = ["jpeg", "jpg", "png"];
        let pictureExtension = file.value.lastIndexOf(".");
        let inputExtension = file.value.substring(pictureExtension + 1);
        let result = validPictureExtension.includes(inputExtension);
        if (!result) {
            // file.nextElementSibling.innerText = "File not valid";
            wrong(file,"File not valid");
        } else {
            // file.nextElementSibling.innerText = "";
            correct(file,"");
        }
    } else {
        correct(file,"");
    }
}
function wrong(x,m){
    x.nextElementSibling.innerText = m;
    x.className = "highlight";
    x.parentElement.querySelector('.fa-circle-exclamation').classList.add('icon');
}
function correct(x,m){
    x.nextElementSibling.innerText = "";
    x.className = "highlightnew";
    x.parentElement.querySelector('.fa-circle-exclamation').classList.remove('icon');
}
