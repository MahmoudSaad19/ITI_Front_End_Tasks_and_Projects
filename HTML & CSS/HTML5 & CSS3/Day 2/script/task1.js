var _username = location.search.split("&")[0].split("=")[1];
var password = location.search.split("&")[1].split("=")[1];
var address = location.search.split("&")[2].split("=")[1];



function go() {
    localStorage.setItem("username", _username);
    sessionStorage.setItem("password", password);
    localStorage.setItem("address", address);
}
