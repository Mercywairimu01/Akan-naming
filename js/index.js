// var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// dsfsdAF
var akan = function(year, month, day, gender) {
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var male = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var day = new Date(year, month, day);
    if (gender === "Female") {
        return day && female[day.getDay()];
    } else {
        return day && male[day.getDay()];
    }
};

// User interface (or front-end) logic:
// $(document).ready(function(){
//     $("form.form").submit(function(event) {
//         event.preventDefault();
//         var year = parseInt($("#year").value());
//         var month = parseInt($("#month").value());
//         var day = parseInt($("#date").value());
//         var gender = $("input:radio[name=gender]:checked").val();
//         var result = akan(year, month, day, gender);
//         alert("Your akan name is:" + result);
//         //refresh page
//         document.getElementsByClassName("form").reset();
//     });
// });