var daysUntilMyBirthday = 60;
function countDown(){
    for (var i = daysUntilMyBirthday; i >= 0; i--){
        if (i > 1){
            document.write("<p>You only have " + i + " days until your birthday</p><br>");
        } else if (i == 1){
                document.write("<p>Only " + i + " day left...</p><br>");
        } else {
                document.write("<p class=\"bday\">HAPPY BIRTHDAY<p>");
        }
    }
}
function check (test){
    console.log(test = document.write("<p class=\"bday\">HAPPY BIRTHDAY<p>"));
}
countDown();
check();