var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];




let button = document.getElementById("btn");
let form = document.getElementById("birth");
form.addEventListener("submit",(event) =>{
        event.preventDefault();
        
        let formData = new FormData(event.target)
        // let myDate = new Date(formData.get("date"));
        let year =document.getElementById("year").value;
        var month = document.getElementById("month").value;
        var date = document.getElementById("date").value;
        let myDate = new Date(year,--month,date);
        let dayOfWeek = myDate.getDay();
         alert(dayOfWeek)
       
          let gender = document.getElementsByName("gender");

           for (var i = 0; i < gender.length; i++) {
            if (gender[i].checked)
                var genderValue = gender[i].value;
        }
       
    
        if (genderValue == "Female"){
            document.getElementById("output").innerHTML = ("You were born on" + " "  + day[dayOfWeek]+ " " +"so your Akan name is"+ " " +  female[dayOfWeek] );
        }
        else {
            
            document.getElementById("output").innerHTML = ("You were born on" + " " + day[dayOfWeek]+ " " + "so your Akan name is"+ " " + male[dayOfWeek] );
        }
    
    });
     function output(){
     document.getElementById("output").innerHTML =""

    }


    // PREVIOUS CODE
 // var year = document.getElementById("year").value;
        // var month = document.getElementById("month").value;
        // var myDate = document.getElementById("date").value;
        // var gender = document.getElementsByName("gender");
     
    // console.log(typeof year)

 // let cen = Number(year.slice(0,2));
        // let yy = Number(year.slice(2));
        // console.log(yy)
        // let mm =Number(month)
        // let dd =Number(myDate)
        // let calculateDayOfWeek  = ( ( (cen/4) -2*cen-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
        // let dayOfWeek = calculateDayOfWeek.toFixed() -1;
       
