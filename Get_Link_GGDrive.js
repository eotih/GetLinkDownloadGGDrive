function getLinkGgDrive(input) {
    const BASE_URL = "https://drive.google.com/uc?export=download&id="
    var result = BASE_URL + input;
    document.getElementById("data").href = result;
}
function splitLink() {
    var dataInput = document.getElementById("link").value;
    var url = dataInput.split('/');
    var resultID = url[url.length - 2];
    getLinkGgDrive(resultID)
}
