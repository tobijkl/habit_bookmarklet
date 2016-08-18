javascript:(function(){

var api_user = "api-user-goes-here";
var api_key = "api-key-goes-here";

var q=location.href;
var data = '{"text":"'+q+'","type":"todo","value":"0"}';

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 201) {
        window.alert("Task created.");
    }
};

xhr.open("POST", "https://habitica.com/api/v3/tasks/user", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-api-key", api_key);
xhr.setRequestHeader("x-api-user", api_user);
xhr.send(data);

})();
