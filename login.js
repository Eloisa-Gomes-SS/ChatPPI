artlog1.style.display = "none";
artlog2.style.display = "none";
artlog3.style.display = "none";
artlog4.style.display = "none";
artlogM.style.display = "none";

const ver = {
    psw1: false,
    psw2: false,
    psw3: false,
    psw4: false,
    pswM: false
}

const tent = {
    psw1: 0,
    psw2: 0,
    psw3: 0,
    psw4: 0,
    pswM: 0
}

function mostrar(key){
    let input, id;
    switch (key) {
        case 1: input = psw1; id = 'psw1'; break;
        case 2: input = psw2; id = 'psw2'; break;
        case 3: input = psw3; id = 'psw3'; break;
        case 4: input = psw4; id = 'psw4'; break;
        case 5: input = pswM; id = 'pswM'; break;
    }

    ver[id] =!ver[id]
    input.setAttribute("type", ver[id]? "text" : "password")
}
ver1.onclick = () => {mostrar(1);}
ver2.onclick = () => {mostrar(2);}
ver3.onclick = () => {mostrar(3);}
ver4.onclick = () => {mostrar(4);}
verM.onclick = () => {mostrar(5);}

function show(aba){

    cincoU.style.display = "none";
    artlog1.style.display = "none";
    artlog2.style.display = "none";
    artlog3.style.display = "none";
    artlog4.style.display = "none";
    artlogM.style.display = "none";

    switch(aba){
        case 1: artlog1.style.display = "block";
            break;
        case 2: artlog2.style.display = "block";
            break;
        case 3: artlog3.style.display = "block";
            break;
        case 4: artlog4.style.display = "block";
            break;
        case 5: artlogM.style.display = "block";
            break;
        case 6: cincoU.style.display = "block";
            break;
    }
}
btn1.onclick = () => {show(1);}
btn2.onclick = () => {show(2);}
btn3.onclick = () => {show(3);}
btn4.onclick = () => {show(4);}
btnM.onclick = () => {show(5);}
bvo1.onclick = () => {show(6);}
bvo2.onclick = () => {show(6);}
bvo3.onclick = () => {show(6);}
bvo4.onclick = () => {show(6);}
bvoM.onclick = () => {show(6);}

function logar(butn){
    let input, id, psw, idArt, idBtn, pg;
    switch (butn) {
        case 1:
            input = psw1
            id = 'psw1'
            psw = 'chat'
            idArt = 'artlog1'
            idBtn = 'btn1'
            pg = 'chat1.html'
            break;
        case 2:
            input = psw2
            id = 'psw2'
            psw = 'chat'
            idArt = 'artlog2'
            idBtn = 'btn2'
            pg = 'chat1.html'
            break;
        case 3:
            input = psw3
            id = 'psw3'
            psw = 'chat'
            idArt = 'artlog3'
            idBtn = 'btn3'
            pg = 'chat1.html'
            break;
        case 4:
            input = psw4
            id = 'psw4'
            psw = 'chat'
            idArt = 'artlog4'
            idBtn = 'btn4'
            pg = 'chat1.html'
            break;
        case 5:
            input = pswM
            id = 'pswM'
            psw = 'teste123'
            idArt = 'artlogM'
            idBtn = 'btnM'
            pg = 'chatM.html'
            break;
    }

    if (input.value === psw) {
        window.location.href = pg
        return
    }else{
        tent[id]++
        input.value = ""
        alert("Senha incorreta!\n"+(4-tent[id])+" tentativas restantes.")
        if (tent[id] >= 4) {
            cincoU.style.display = "block";
            idArt.style.display = "none";
            alert("Limite de tentativas de login atingido.")
            idBtn.disabled = 'disabled';
        }
    }
}

log1.onclick = () => {logar(1);}
log2.onclick = () => {logar(2);}
log3.onclick = () => {logar(3);}
log4.onclick = () => {logar(4);}
logM.onclick = () => {logar(5);}