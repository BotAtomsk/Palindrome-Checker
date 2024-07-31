

// referencias a los elementos HTML
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultSpan = document.getElementById("result");

// funciones (están definidas como funciones flecha)
const cleanString = (str) => {
  const regex = /[^a-zA-Z\d]/g;
  return str.replace(regex, "");
}

const check = () => {
  if (textInput.value === "") {
    resultSpan.innerText = "";
    return alert("Please input a value");
  }

  // cada vez que comprobamos eliminamos el class de resultSpan
  resultSpan.classList.remove("isPalindrome");
  resultSpan.classList.remove("isNotPalindrome");

  // limpiamos el input del usuario y almacenamos la mitad de la longitud del string
  const sanitizedString = cleanString(textInput.value).toLowerCase();
  const halfLen = Math.floor(sanitizedString.length / 2);

  // establecemos un bucle para comprobar el primer y el último índice del string
  let isPalindrome = true;
  let last = sanitizedString.length - 1;
  for (let first = 0; first < halfLen; first++) {
    if (sanitizedString[first] !== sanitizedString[last]) {
      isPalindrome = false;
    }
    last--;
  }
  resultSpan.innerHTML = `<b>${textInput.value}</b> is ${isPalindrome ? "" : "<b>not</b>"} a palindrome`;
  isPalindrome ? resultSpan.classList.add("isPalindrome") : resultSpan.classList.add("isNotPalindrome");
}

// listeners
checkButton.addEventListener("click", check);


