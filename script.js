

function alert2() {
    var encode = document.querySelector("#first-name").value;
    encode = encode.split(''); encode = encode.reverse(); encode = encode.join(''); alert(encode);
}
