'use strict'
let i=90;
let wrap=document.getElementById('wrap')
document.getElementById('levo').onclick=function(){
 wrap.style.transform = 'rotateY('+i+'deg)';
    if ($('#wrap').is('transform', 'rotateY('+i+'deg)')) {
        alert("ffffff");
    }

}
document.getElementById('pravo').onclick=function(){
    wrap.style.transform = 'rotateY(-'+i+'deg)';
    if ($('#wrap').is('transform', 'rotateY(-'+i+'deg)')) {
        alert("ffffff");
    }

}
