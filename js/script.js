let changeLanguage=document.getElementById('lang-trans');
let downClick=document.querySelector('.lang-bl');
let upClick=document.querySelector('.lang-no');
let hiddLang=document.querySelector('.fir-lang-hidden');
let downClickMin=document.querySelector('.left-li-down');
changeLanguage.addEventListener('click', function () {
    hiddLang.style.display = hiddLang.style.display === 'none' ? 'block' : 'none';
  
    if (downClick.style.display === 'none') {
        upClick.style.display = 'block';
    } if(upClick.style.display === 'block'){
        downClick.style.display = 'none'
    }
  });

  let infoHead=document.getElementById('thr-hidd');
 let openInfo=document.getElementById('open-info');
// openInfo.addEventListener('click', function(){
//     infoHead.style.display=infoHead.style.display==='none'? 'block': 'none';
//     if (downClick.style.display === 'none') {
//         upClick.style.display = 'block';
//     } if(upClick.style.display === 'block'){
//         downClick.style.display = 'none'
//     }
//     if (downClickMin.style.display === 'none') {
//         upClick.style.display = 'block';
//     } if(upClick.style.display === 'block'){
//         downClickMin.style.display = 'none'
//     }
// })


setTimeout(() => {
    document.querySelector('.old-div').style.display = 'block';
    document.querySelector('.wave').style.display = 'none'
}, 1000);


function redirectToUse() {
    window.location.href = 'toUse.html';
  }