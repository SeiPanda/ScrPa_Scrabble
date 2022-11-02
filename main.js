let bordSize = 15*15;
let columnCount = 15;
let board = document.querySelector("#boardContainer");
let wordContainer = document.querySelector("#wordContainer");
let t = 0;
let i = 0;
let zahl = 15;


generateBoard();


function generateBoard(){
    document.querySelectorAll(".rows").forEach(column => {
        for(i = t; i < zahl; i++){
            div = '<div class="field drag" id="field_'+ i +'"><span>&nbsp</span></div>'
            column.innerHTML += div;
        }
 
        t = i;
      
        zahl = zahl + 15;
    })

    for(let i = 0; i < 8; i++){
        let div = '<div class="word_field drag" draggable="true" id="word_'+ i  +'"><span>'+ i +'</span></div>'
        wordContainer.innerHTML += div;
    }

    
  let tileScoreIdx = {
    ct: [112],
    tw: [0, 7, 14, 105, 119, 210 ,217,224],
    tl: [20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204],
    dw: [16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208],
    dl: [3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 122, 126, 128, 132, 165, 172, 179, 186, 188, 213, 221]
  };

    colorTripleWordFields(tileScoreIdx);
    colorDoubleWordFields(tileScoreIdx);
    colorTripleLetterFields(tileScoreIdx);
    colorDoubleLetterFields(tileScoreIdx);
    colorCenterField(tileScoreIdx);

}

document.addEventListener('DOMContentLoaded', (event) => {

    var dragSrcEl = null;
    
    function handleDragStart(e) {
      this.style.opacity = '0.4';
      
      dragSrcEl = this;
  
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
  
      e.dataTransfer.dropEffect = 'move';
      
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }
      
      if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
      
      return false;
    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
      
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
    
    
    let items = document.querySelectorAll('.container .drag');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('drop', handleDrop, false);
      item.addEventListener('dragend', handleDragEnd, false);
    });
  });


function colorTripleWordFields(tileScoreIdx){
  
  
  

  document.querySelectorAll(".field").forEach((field, index) => { 
    for(let k = 0; k < tileScoreIdx.tw.length; k++){
      if(index == tileScoreIdx.tw[k]){
        field.classList.add("tw");
      }
    }
      // if(!(index % 7)){
    //     if(index == 7){
    //         row.children[0].classList.add("red");
    //         row.children[14].classList.add("red");
    //     }else{
    //         row.children[0].classList.add("red");
    //         row.children[7].classList.add("red");
    //         row.children[14].classList.add("red");
    //     }
    // }   
  })
}

function colorDoubleWordFields(tileScoreIdx){
  document.querySelectorAll(".field").forEach((field, index) => { 
    for(let k = 0; k < tileScoreIdx.dw.length; k++){
      if(index == tileScoreIdx.dw[k]){
        field.classList.add("dw");
      }
    }
  })
}

function colorTripleLetterFields(tileScoreIdx){
  document.querySelectorAll(".field").forEach((field, index) => { 
    for(let k = 0; k < tileScoreIdx.tl.length; k++){
      if(index == tileScoreIdx.tl[k]){
        field.classList.add("tl");
      }
    }
  })
}

function colorDoubleLetterFields(tileScoreIdx){
  document.querySelectorAll(".field").forEach((field, index) => { 
    for(let k = 0; k < tileScoreIdx.dl.length; k++){
      if(index == tileScoreIdx.dl[k]){
        field.classList.add("dl");
      }
    }
  })
}

function colorCenterField(tileScoreIdx){
  document.querySelectorAll(".field").forEach((field, index) => { 
    for(let k = 0; k < tileScoreIdx.ct.length; k++){
      if(index == tileScoreIdx.ct[k]){
        field.classList.add("ct");
      }
    }
  })
}