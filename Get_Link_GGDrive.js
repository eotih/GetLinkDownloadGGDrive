function getLinkGgDrive(input) {
    const BASE_URL = "https://drive.google.com/uc?export=download&id="
    var result = BASE_URL + input;
    // document.getElementById("data2").href = result;
    // document.getElementById("data2").innerText = result;
    document.getElementById("myInput").value = result;
}
function splitLink() {
    var dataInput = document.getElementById("link").value;
    var url = dataInput.split('/');
    var resultID = url[url.length - 2];
    getLinkGgDrive(resultID)
}
function copyText() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copy: "+ copyText.value)
}