
//  setitem é para adicionar na memoria 
//  getitem é pra pegar na memoria  
//  json.stringify é pra guardar arrays na memoria
//  json.parse é pra pegar arrays na memoria


// ------- CADASTRO ----------

const botao = document.getElementById("btn1")

if(botao){botao.addEventListener("click", ()=>{
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    if(!nome || !idade || !email || !senha){
        document.getElementById("campos").style.display = "block"
        setTimeout(() =>{
            document.getElementById("campos").style.display = "none"
        },3000)
        return;
    }
    if(!email.endsWith("@gmail.com") && !email.endsWith("@outlook.com")){
        document.getElementById("emailfalse").style.display = "block"
        setTimeout(() =>{
            document.getElementById("emailfalse").style.display = "none"
        },3000)
        return;
    }
    if(idade > 117){
        document.getElementById("campos").style.display = "block"
        document.getElementById("campos").textContent = "Essa idade é Inválida"
        setTimeout(() => {
            document.getElementById("campos").style.display = "none"
        }, 3000);
        return
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    const existe = usuarios.find( u => u.email === email)

    if(existe){
        document.getElementById("campos").style.display = "block"
        document.getElementById("campos").textContent = "Esse Email já está cadastrado!"
        const irlogin = document.getElementById("irlogin")

        irlogin.addEventListener("click", () =>{
            window.location.href = "login.html"
        })

        document.getElementById("irlogin").style.display = "block"
        setTimeout(()=>{
            document.getElementById("irlogin").style.display = "none"
            document.getElementById("campos").style.display = "none"
        },5000)
        return
    }

    const novoUsuario = {nome,idade,email,senha}
    usuarios.push(novoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    document.getElementById("cadastrado").style.color = "rgb(61, 255, 103)"
    document.getElementById("cadastrado").textContent = "Cadastrado!"
    document.getElementById("cadastrado").style.display = "block"
    setTimeout(() => {
        window.location.href = "login.html"
        
    },1000);
})
} 

// ------- LOGIN -----------

const botaoL = document.getElementById("btn2")

if (botaoL){

botaoL.addEventListener("click", ()=>{
    const emaild = document.getElementById("emailogin").value;
    const senhad = document.getElementById("senhalogin").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuariovalido = usuarios.find( 
        u => u.email === emaild && u.senha === senhad
    );

    if(usuariovalido){
        document.getElementById("sucesso").textContent = "Sucesso"
        document.getElementById("sucesso").style.color = "rgb(61, 255, 103)"
        document.getElementById("sucesso").style.display = "block"
        setTimeout(() => {
            window.location.href = "projeto.html"
        },1000)
    } else {
        document.getElementById("sucesso").textContent = "Email ou senha Inválido"
        document.getElementById("sucesso").style.color = "rgb(255, 61, 61)"
        document.getElementById("sucesso").style.display = "block"
        setTimeout(() => {
            document.getElementById("sucesso").style.display = "none"
        },2000)
    }
})
}

// ----------- projeto ----------

const botaoC = document.getElementById("btn3");

if (botaoC){
botaoC.addEventListener('click', () => {
    let media = 0
    let soma = 0
    let notas = []

    const nota1 = Number(document.getElementById("nota1").value)
    const nota2 = Number(document.getElementById("nota2").value)
    const nota3 = Number(document.getElementById("nota3").value)
    const nota4 = Number(document.getElementById("nota4").value)

    if(nota1 < 0|| nota2 < 0|| nota3 < 0|| nota4 < 0){
        document.getElementById("numin").style.display = "block"

        setTimeout(()=>{
            document.getElementById("numin").style.display = "none"
        }, 3000)
        return
    }
    
    
    notas.push(nota1,nota2,nota3,nota4)

    const notasValidas= notas.filter(n => n !== 0)
    if(notasValidas.length < 3){
        document.getElementById("dados").style.display = "block"

        setTimeout(()=>{
            document.getElementById("dados").style.display = "none"
        }, 3000)
        return
    } else {
    for(let c = 0;c < notasValidas.length; c++){
        soma += notasValidas[c]
        media = soma/notasValidas.length
    }
    media = Number(media.toFixed(2))

    document.getElementById("resul").style.display = "block"
    document.getElementById("resul").textContent = "Sua média foi:  "+media
    setTimeout(()=>{
            document.getElementById("resul").style.display = "none"
        }, 4000)
    }
})
}
