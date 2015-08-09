javascript:(function(){

var api_key = "api-key-goes-here";
var api_user = "api-user-goes-here";
var q=location.href;
var xhr = new XMLHttpRequest();

xhr.open("POST", "https://habitrpg.com:443/api/v2/user/tasks", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-api-key", api_key);
xhr.setRequestHeader("x-api-user", api_user);
var data = '{"text":"'+q+'","type":"todo","value":"0"}';
xhr.onreadystatechange = function() {
    if(this.readyState == 4) {
        window.alert("Task created.");
    }
};
xhr.send(data);

})();
