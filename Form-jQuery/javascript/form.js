$(document).ready(function () {
    $("#newform").click(function () {
        let fname = $("#first");
        let lname = $("#last");
        let name = /^[A-Za-z]+$/;
        let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        let password1 = $("#password1");
        let password2 = $("#password2");
        let emailnew = $("#email");
        let address = $("#address");
        let language1 = $("#language1");
        let language2 = $("#language2");
        let language3 = $("#language3");
        let birth = $("#dob");
        let gen1 = $("#gen1");
        let gen2 = $("#gen2");
        let number = $("#mobile");
        let file = $("#fileupload");
        let validmobile = /^\d{10}$/;
        let validemailid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (fname.val().trim() == "") {
            wrong(fname, "First Name must be filled outFirst");
        } else if (!isNaN(fname.val())) {
            wrong(fname, "First Name name should not be number");
        } else if (!fname.val().match(name)) {
            wrong(fname, "Name only allowed alphabets");
        } else {
            correct(fname, "");
        }
        if (lname.val().trim() == "") {
            wrong(lname, "Last Name must be filled out");
        } else if (!isNaN(lname.val())) {
            wrong(lname, "Last name should not be number");
        } else if (!lname.val().match(name)) {
            wrong(lname, "Name only allowed alphabets");
        } else {
            correct(lname, "");
        }
        if (emailnew.val().trim() == "") {
            wrong(emailnew, "Email Id must be filled out");
        } else if (!emailnew.val().match(validemailid)) {
            wrong(emailnew, "Email not valid");
        } else {
            correct(emailnew, "");
        }
        if (address.val().trim() == "") {
            wrong(address, "Adress must be filled out");
        } else if ((address.val().length < 15) || (address.val().length > 100)) {
            wrong(address, "Adress must be 15-100 characters length");
        } else {
            correct(address, "");
        }
        if ($('input[type="checkbox"]:checked' || 'input[type="checkbox"]:checked' || 'input[type="checkbox"]:checked').length > 0) {
            $('#language1').siblings("#block").text("");
        } else {
            $('#language1').siblings("#block").text("Languages must be filled out");
        }
        if (birth.val().trim() == "") {
            wrong(birth, "DOB must be filled out");
        } else {
            correct(birth, "");
        }
        if ($('input[type="radio"]:checked' && 'input[type="radio"]:checked' && 'input[type="radio"]:checked').length > 0) {
            $('#gen1').siblings("#block1").text("");
        } else {
            $('#gen1').siblings("#block1").text("Gender must be filled out");
        }
        if (number.val().trim() == "") {
            wrong(number, "Mobile number must be filled out");
        } else if (!number.val().match(validmobile)) {
            wrong(number, "Number not valid");
        } else {
            correct(number, "");
        }
        if (password1.val().trim() == "") {
            wrong(password1, "Password must be filled out");
        } else if (!password1.val().match(password)) {
            wrong(password1, "Password error");
        } else {
            correct(password1, "");
        }
        if (password2.val().trim() == "") {
            wrong(password2, "Password must be filled out");
        } else if (!password1.val().match(password) || !password2.val().match(password)) {
            wrong(password1, "Password which must include one small,capital,special letters");
        } else {
            correct(password2, "");
        }
        if (file.val() == "") {
            wrong(file, "Profile image must be filled out");
        } else if (file.val() != "") {
            let validPictureExtension = ["jpeg", "jpg", "png"];
            let pictureExtension = file.val().lastIndexOf(".");
            let inputExtension = file.val().substring(pictureExtension + 1);
            let result = validPictureExtension.includes(inputExtension);
            if (!result) {
                wrong(file, "File not valid");
            } else {
                correct(file, "");
            }
        } else {
            correct(file, "");
        }
    })
    function wrong(x, m) {
        x.siblings("i").addClass("icon")
        x.addClass("highlight");
        x.siblings('.Notvalid').text(m);
    }
    function correct(x, m) {
        // x.siblings().text(m);
        x.addClass("highlightnew");
        x.siblings('.Notvalid').text("");
    }
});