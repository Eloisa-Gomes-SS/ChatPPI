const areaMsgs = document.getElementById('msgsU')
function enviar(msg) {
    const mens = document.createElement('p')
    mens.innerText = msg
    msgsU.appendChild(mens)
    msgU.value = '';
}
send.onclick = () => {
    const texto = msgU.value;
    if (texto.trim().length > 0) {
      enviar(texto);
    }
  };