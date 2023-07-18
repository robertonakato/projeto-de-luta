let guerreiro = document.querySelector(`.opcao1`)
let mago = document.querySelector(`.opcao2`)
let dragon = document.querySelector(`.opcao3`)
let anjo = document.querySelector(`.opcao4`)
let quadro = document.querySelector(`.quadro`)
let quadroM = document.querySelector(`.quadroM`)
let input = document.querySelector(`#input`);
let conteudo = document.querySelector(`.conteudo`)
let audioPlayer = document.getElementById('audioPlayer');
let atack = document.querySelectorAll(`.Atack`)
let opcoes = document.querySelectorAll(`.opcoes`)
let inicio = document.querySelector(".iniciar")
let barra = document.querySelectorAll(".lifebar")
let nomne = document.querySelectorAll(".nome")
let escolha = document.querySelector(".escolha")
let escolhaM = document.querySelector(".escolhaM")
let atkMonster = document.querySelector("#monster .Atack");
let arena = document.querySelector(`.figtharea`)
let reinicio = document.querySelector(`.reiniciar`)
let imagem = document.querySelector(".imagem")
let logList = document.querySelector(".log");
let testechar = false;
let testemonster = false;




function clicou (){
    quadro.style.backgroundImage = "url('op.jpg')";
    char = new Guerreiro(document.querySelector('#input').value);
    stage.fighter1 = char;
     stage.update();
     audioPlayer.src = "Mago.mp3"
     audioPlayer.play();
  input.style.display = "flex"
  testechar = true;



}

function clicou2 (){
    quadro.style.backgroundImage = "url('ma.jpg')"
    char = new Mago(document.querySelector('#input').value);
    stage.fighter1 = char;
     stage.update();
     audioPlayer.src = "batalha.mp3"
     audioPlayer.play();
     input.style.display = "flex"
     testechar = true;




}

function clicou3 (){
    quadroM.style.backgroundImage = "url('dragon.jpg')"
    monster = new Dragão();
    stage.fighter2 = monster;
    stage.update();
    testemonster = true;

}

function clicou4() {
    quadroM.style.backgroundImage = "url('anjo.jpg')";
    monster = new Anjo();
    stage.fighter2 = monster;
    stage.update();
    testemonster = true;
  }

  function iniciar() {
    if(testemonster && testechar){
    opcoes.forEach(element => {
      element.style.display = 'none';
    });
  
    atack.forEach(element => {
      element.style.display = 'flex';
    });

    barra.forEach(element => {
      element.style.display = 'block';
    });

    nomne.forEach(element => {
      element.style.display = 'block';
    });
  
    escolha.style.display = `none`
    quadro.style.height = `200px`
    quadro.style.width = `200px`
    quadroM.style.height = `200px`
    quadroM.style.width = `200px`
    escolhaM.style.display =`none`
    atkMonster.style.display = `none`
    input.style.display = `none`
    inicio.style.display ="none"
    arena.style.height = `250px`
  }
  else{
    alert("Escolha um oponente antes de iniciar!");
  }
  }


  function reiniciar() {
    opcoes.forEach(element => {
      element.style.display = 'flex';
    });
  
    atack.forEach(element => {
      element.style.display = 'none';
    });

    barra.forEach(element => {
      element.style.display = 'none';
    });

    nomne.forEach(element => {
      element.style.display = 'none';
    });
  
    escolha.style.display = `block`
    quadro.style.height = `200px`
    quadro.style.width = `200px`
    quadroM.style.height = `200px`
    quadroM.style.width = `200px`
    escolhaM.style.display =`flex`
    atkMonster.style.display = `none`
    arena.style.height = `250px`
    imagem.style.display = "none";
    input.style.display = `none`
    reinicio.style.display = "none"
    quadroM.style.backgroundImage = "url('fun.jpg')"
    quadro.style.backgroundImage = "url('fun.jpg')"
    logList.innerHTML = ""
    log.list = [];
    audioPlayer.pause();

    
  }

  function apertou(e, stage) {
    if (e.key === 'Enter') {
      let nome = input.value;
      if (stage.fighter1 instanceof Guerreiro) {
        stage.fighter1.name = nome;
      } else if (stage.fighter1 instanceof Mago) {
        stage.fighter1.name = nome;
      }
      stage.update();
      input.value = '';
      inicio.style.display="flex"
      quadro.style.height = `200px`
      quadro.style.width = `200px`
      quadroM.style.height = `200px`
      quadroM.style.width = `200px`
      arena.style.height = `250px`
    }
  }
guerreiro.addEventListener(`onclick`,clicou)
mago.addEventListener(`onclick`,clicou2)
dragon.addEventListener(`onclick`,clicou3)
anjo.addEventListener(`onclick`,clicou4)
input.addEventListener('keyup', (e) => apertou(e, stage));




