let Audio = document.getElementById('Menu_Audio');
function bgAudio(){
    Audio.play();
};

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  playAudio();
}
let imgdiv = document.querySelector('#arena_png');

let number = document.querySelectorAll('.number div');

number[0].setAttribute("style", `
  background: linear-gradient(#e7b82a 50%, #e6b131 50%);
  box-shadow: inset 0 0 0px 3px #f8da6d;
`);

number[1].setAttribute("style", `
  background: linear-gradient(#c4d0e0 50%, #becbdc 50%);
  box-shadow: inset 0 0 0px 3px #e0e8f4;
`);

number[2].setAttribute("style", `
  background: linear-gradient(#d4894f 50%, #cd8349 50%);
  box-shadow: inset 0 0 0px 3px #e69e63;
`);

Arena = {
  GoblinStadium : 'static/assets/arena/Goblin_Stadium.png', 
  BonePit : 'static/assets/arena/Bone_Pit.png', 
  BarbarianBowl : 'static/assets/arena/Barbarian_Bowl.png', 
  PEKKA_sPlayhouse :'assets/arena/PEKKA_Playhouse.png',
  SpellValley : 'static/assets/arena/Spell_Valley.png', 
  Builder_sWorkshop : 'static/assets/arena/Builder_Workshop.png',
  RoyalArena : 'static/assets/arena/Royal_Arena.png', 
  FrozenPeak: 'static/assets/arena/Frozen_Peak.png', 
  JungleArena : 'static/assets/arena/Jungle_Arena.png',
  HogMountain : 'static/assets/arena/Hog_Mountain.png', 
  ElectroValley : 'static/assets/arena/Electro_Valley.png', 
  SpookyTown : 'static/assets/arena/Spooky_Town.png',
  LegendaryArena :'static/assets/arena/Legendary_Arena.png',
  ChallengerI : 'static/assets/arena/League1.png', 
  ChallengerII : 'static/assets/arena/League2.png', 
  ChallengerIII : 'static/assets/arena/League3.png', 
  MasterI : 'static/assets/arena/League4.png', 
  MasterII : 'static/assets/arena/League5.png', 
  MasterIII : 'static/assets/arena/League6.png', 
  Champion : 'static/assets/arena/League7.png', 
  GrandChampion : 'static/assets/arena/League8.png', 
  RoyalChampion : 'static/assets/arena/League9.png',
  UltimateChampion : 'static/assets/arena/League10.png'
};



function ShowArenaIcon(){
  let trophy = document.querySelectorAll('.trophy div span');
  let trophyArr = [];
  for (let index = 0; index < trophy.length; index++) {
    trophyArr.push(parseInt(trophy[index].innerText));
    let arenaImg = document.querySelectorAll('.arenaImg');

    if(trophyArr[index] >= 0 && trophyArr[index] <= 299){
      arenaImg[index].src = Arena['GoblinStadium'];
    }

    if(trophyArr[index] >= 300 && trophyArr[index] <= 599){
      arenaImg[index].src = Arena[BonePit];
    };

    if(trophyArr[index] >= 600 && trophyArr[index] <= 999){
      arenaImg[index].src = Arena['BarbarianBowl'];
    };

    if(trophyArr[index] >= 1000 && trophyArr[index] <= 1299){
      arenaImg[index].src = Arena['PEKKA_sPlayhouse'];
    };

    if(trophyArr[index] >= 1300 && trophyArr[index] <= 1599){
      arenaImg[index].src = Arena['SpellValley'];
    };

    if(trophyArr[index] >= 1600 && trophyArr[index] <= 1999){
      arenaImg[index].src = Arena['Builder_sWorkshop'];
    };

    if(trophyArr[index] >= 2000 && trophyArr[index] <= 2299){
      arenaImg[index].src = Arena['RoyalArena'];
    };

    if(trophyArr[index] >= 2300 && trophyArr[index] <= 2599){
      arenaImg[index].src = Arena['FrozenPeak'];
    };

    if(trophyArr[index] >= 2600 && trophyArr[index] <= 2999){
      arenaImg[index].src = Arena['JungleArena'];
    };

    if(trophyArr[index] >= 3000 && trophyArr[index] <= 3299){
      arenaImg[index].src = Arena['HogMountain'];
    };

    if(trophyArr[index] >= 3300 && trophyArr[index] <= 3599){
      arenaImg[index].src = Arena['ElectroValley'];
    };

    if(trophyArr[index] >= 3600 && trophyArr[index] <= 3999){
      arenaImg[index].src = Arena['SpookyTown'];
    };

    if(trophyArr[index] >= 4000 && trophyArr[index] <= 4299){
      arenaImg[index].src = Arena['ChallengerI'];
    };

    if(trophyArr[index] >= 4300 && trophyArr[index] <= 4599){
      arenaImg[index].src = Arena['ChallengerII'];
    };

    if(trophyArr[index] >= 4600 && trophyArr[index] <= 4999){
      arenaImg[index].src = Arena['ChallengerIII'];
    };

    if(trophyArr[index] >= 5000 && trophyArr[index] <= 5299){
      arenaImg[index].src = Arena['MasterI'];
    };

    if(trophyArr[index] >= 5300 && trophyArr[index] <= 5599){
      arenaImg[index].src = Arena['MasterII'];
    };

    if(trophyArr[index] >= 5600 && trophyArr[index] <= 5999){
      arenaImg[index].src = Arena['MasterIII'];
    };

    if(trophyArr[index] >= 6000 && trophyArr[index] <= 6299){
      arenaImg[index].src = Arena['GrandChampion'];
    };

    if(trophyArr[index] >= 6300 && trophyArr[index] <= 6599){
      arenaImg[index].src = Arena['RoyalChampion'];
    };

    if(trophyArr[index] >= 6600 && trophyArr[index] <= 7000){
      arenaImg[index].src = Arena['UltimateChampion'];
    };
  }
}

ShowArenaIcon();



var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 