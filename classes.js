//Guerreiro, mago, monstro e Boss

class Character{
    _life= 1;
    maxlife=1;
    atack=0;
    defese=0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }
    set life(newlife){
        this._life = newlife <0 ? 0 :newlife;
    }
    
}
class Guerreiro extends Character{
    constructor(name){
        super(name)
        this.life =100
        this.maxlife = 100
        this.atack =20
        this.defese= 8
    }
}
class Mago extends Character{
    constructor(name){
        super(name)
        this.life =90
        this.maxlife = 90
        this.atack =25
        this.defese= 3
    }
}
class Anjo extends Character{
    constructor(){
        super(`Anjo`)
        this.life = 100
        this.maxlife = 35
        this.atack =10
        this.defese= 7
    }
}

class Dragão extends Character{
    constructor(){
    super(`Dragão`)
        this.life = 200;
        this.maxlife = 60
        this.atack =15
        this.defese= 10
    }
}

class Inimigo extends Character{
    constructor(){
    super(`Inimigo`)
        this.life = 0;
        this.maxlife = 0
        this.atack =0
        this.defese= 0
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El,logObjeto){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log =logObjeto
    }
    
Start(){
    this.update();
    this.fighter1El.querySelector(`.Atack`).addEventListener("click", () => this.doAtack(this.fighter1,this.fighter2))
    this.fighter2El.querySelector(`.Atack`).addEventListener("click", () => this.doAtack(this.fighter2,this.fighter1))

}

update(){
//Jogador 1 
this.fighter1El.querySelector(`.name`).innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
let f1pct = (this.fighter1.life / this.fighter1.maxlife) * 100;
this.fighter1El.querySelector(`.bar`).style.width = `${f1pct}%`;

//jogador 2 
this.fighter2El.querySelector(`.name`).innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
let f2pct = (this.fighter2.life / this.fighter2.maxlife) * 100;
this.fighter2El.querySelector(`.bar`).style.width = `${f2pct}%`;



}

doAtack(atacante,atacado){
if (atacante.life <= 0){
    this.log.addMessage (`${atacante.name} está morto`)
    return;
}

if (atacado.life <= 0){
    this.log.addMessage (`O ${atacado.name} morreu`)
    return;
}

let fatorAtack = (Math.random() * 2).toFixed(2);
let fatorDefesa = (Math.random() * 2).toFixed(2);

let atualAtack = atacante.atack * fatorAtack;
let atualDefesa = atacado.defese * fatorDefesa;

if (atualAtack > atualDefesa) {
    atacado.life -= Math.max(atualAtack - atualDefesa, 0);
    this.log.addMessage(`${atacante.name} causou ${Math.max(atualAtack - atualDefesa, 0)} de dano em ${atacado.name}`);
} else{
    this.log.addMessage(`${atacado.name} Conseguiu ser defender!`)
}


if (atualAtack - atualDefesa <= 0) {

    atualAtack = atualDefesa
}

  if (atacante === this.fighter1) {
    this.fighter2Atacou = false;
    atacante.atualAtack = 0;
    setTimeout(() => {
      this.doAtack(this.fighter2, this.fighter1);
      this.fighter2Atacou = true; 
    }, 200);
  }
this.update();
if (this.fighter2.life === 0) {
    let audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = "vitoria.mp3"; 
    audioPlayer.play();
    let reiniciar = document.querySelector(".reiniciar");
    reiniciar.style.display = `flex`;
    let arena = document.querySelector(`.imagem`)
    arena.src = "venceu.png"
    arena.style.display = "flex";}

if (this.fighter1.life === 0) {
    let audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = "perdeu.mp3"; 
    audioPlayer.play();
    let reiniciar = document.querySelector(".reiniciar");
    
    let arena = document.querySelector(".imagem");
    arena.src = "perdeu.png"
    reiniciar.style.display = "flex";
        arena.style.display = "flex";
    }
    

}
}
class Log {
    list = [ ]
constructor(listEl){
    this.listEl =listEl
}
addMessage(msn){
    this.list.push(msn);
    this.render();
}
render(){
    this.listEl.innerHTML=` `;
    for(let i in this.list){
        this.listEl.insertAdjacentHTML('afterbegin', `<li>${this.list[i]}</li>`);
    }
    this.listEl.style.listStyle = 'none'; 

}
}
