let btnCrypt = document.getElementById("crypt");

btnCrypt.addEventListener("click", () => {
  let input = document.getElementById("input").value;

  let btnCopy = document.getElementById("btn-copy");
  btnCopy.removeAttribute("hidden");

  let outputContent = document.getElementById("output-content");
  outputContent.setAttribute("hidden", "false");

  let outputText = document.getElementById("output-text");

  let encrypted = (input) => {
    var input = input.replace(/e/g, "enter");
    var input = input.replace(/i/g, "imes");
    var input = input.replace(/a/g, "ai");
    var input = input.replace(/o/g, "ober");
    var input = input.replace(/u/g, "ufat");

    return input;
  }
  outputText.innerText = encrypted(input);

  btnCopy.addEventListener("click", () => {

    navigator.clipboard.writeText(outputText.innerText);

  });

});

let btnDecrypt = document.getElementById("decrypt");

btnDecrypt.addEventListener("click", () => {

  let input = document.getElementById("input").value;

  let btnCopy = document.getElementById("btn-copy");
  btnCopy.removeAttribute("hidden");

  let outputContent = document.getElementById("output-content");
  outputContent.setAttribute("hidden", "false");

  let outputText = document.getElementById("output-text");

  let decrypted = (input) => {
    console.log("Desde decrypt");

    var input = input.replace(/enter/g, "e");
    var input = input.replace(/imes/g, "i");
    var input = input.replace(/ai/g, "a");
    var input = input.replace(/ober/g, "o");
    var input = input.replace(/ufat/g, "u");

    return input;
  }
    outputText.innerText = decrypted(input);

    btnCopy.addEventListener("click", () => {

        navigator.clipboard.writeText(outputText.innerText);
    
      });
    
});


