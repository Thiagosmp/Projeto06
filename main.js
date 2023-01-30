const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


btnTry.addEventListener('click',clickTry)
btnReset.addEventListener('click',resetClick)

function clickTry(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")
  if(Number(inputNumber.value) == randomNumber){
    toggleScren()
    document.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts} tentativas` 
  }
  inputNumber.value = ""
  xAttempts ++
}

function resetClick(){
  toggleScren()
  xAttempts=1
}

function toggleScren(){
  document.querySelector(".screen1").classList.toggle("hide")
  document.querySelector(".screen2").classList.toggle("hide")
}