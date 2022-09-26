let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table2');
let total  = document.querySelector('#total');
let body =document.getElementsByTagName("body");
let i=0;

// создание----------------------------------------------------------------
add.addEventListener('click', function(){
    // i++;
    let tr = document.createElement('tr');
    let tdN = document.createElement('td');
    let tdP = document.createElement('td');
    let tdA = document.createElement('td');
    let tdD = document.createElement('td');
    let tdS = document.createElement('td');
    // tr.classList.add(i);
    tdN.classList.add(i);
    tdP.classList.add(i);
    tdA.classList.add(i);
    tdD.classList.add(i);
    tdS.classList.add(i);
    tdN.innerHTML = name.value;
    tdP.innerHTML = price.value;
    tdA.innerHTML = amount.value;
    let TS= Number(price.value)*Number(amount.value);
    tdS.innerHTML = Number(price.value)*Number(amount.value);
    tdD.innerHTML = "<a href='#' id='del' >Удалить</a>";
    // пересчёт при удалении------------------------------------------------
    tdD.addEventListener('click', function() {
        let classname=this.classList;
        let CurntClass=Number(classname);
        let TS=document.getElementsByClassName(""+CurntClass+"")[3].innerHTML;
        totalRD(TS);
    })
    // пересчёт при удалении------------------------------------------------
    // удаление---------------------------------------------------------
    tdD.addEventListener('click', function() {
        this.parentElement.parentElement.removeChild(this.parentElement);
    })
// удаление---------------------------------------------------------
    table.appendChild(tr);
    tr.appendChild(tdN);
    tr.appendChild(tdP);
    tr.appendChild(tdA);
    tr.appendChild(tdS);
    tr.appendChild(tdD);
    name.value='';
    price.value='';
    amount.value='';
totalR(TS);
    //Добовление инпута для редактирования------------1------------------------
    tdN.addEventListener('dblclick', function() {
        let classname=this.classList;
        let CurntClass=Number(classname);
        document.getElementsByClassName(""+CurntClass+"")[0].innerText='';
        let newline = document.createElement('input');
        tdN.appendChild(newline);
        newline.id='norm';

    })
    tdN.addEventListener('contextmenu', function() {
        let classname=this.classList;
        let CurntClass=Number(classname);
        document.getElementsByClassName(""+CurntClass+"")[0].innerText=document.getElementById("norm").value;
        edit1stCELL();

})
    //----------------------------------------------------------
    //Добовление инпута для редактирования------------------2------------------
    tdP.addEventListener('dblclick', function() {
        let classname=this.classList;
        let CurntClass=Number(classname);
        let TS=document.getElementsByClassName(""+CurntClass+"")[3].innerHTML;
        totalRD(TS);
        document.getElementsByClassName(""+CurntClass+"")[1].innerText='';
        let newline = document.createElement('input');
        tdP.appendChild(newline);
        newline.id='norm';
    })
    tdP.addEventListener('contextmenu', function() {
        let classname=this.classList;
        let CurntClass=Number(classname);
        document.getElementsByClassName(""+CurntClass+"")[1].innerText=document.getElementById("norm").value;
        edit1stCELL();
let price=document.getElementsByClassName(""+CurntClass+"")[1].innerText;
        let amount=document.getElementsByClassName(""+CurntClass+"")[2].innerText;
let TS=price*amount;
        totalR(TS)
        document.getElementsByClassName(""+CurntClass+"")[3].innerHTML=String(TS);
    })

//------------------------------------------------------------
    //Добовление инпута для редактирования------------------3------------------
    tdA.addEventListener('dblclick', function() {
        let classname=this.classList;
        let CurntClass=Number(classname);
        let TS=document.getElementsByClassName(""+CurntClass+"")[3].innerHTML;
        totalRD(TS);
        document.getElementsByClassName(""+CurntClass+"")[2].innerText='';
        let newline = document.createElement('input');
        tdA.appendChild(newline);
        newline.id='norm';
    })
    tdA.addEventListener('contextmenu', function() {
        let classname=this.classList;
        let CurntClass=Number(classname);
        document.getElementsByClassName(""+CurntClass+"")[2].innerText=document.getElementById("norm").value;
        edit1stCELL();
        let price=document.getElementsByClassName(""+CurntClass+"")[1].innerText;
        let amount=document.getElementsByClassName(""+CurntClass+"")[2].innerText;
        let TS=price*amount;
        document.getElementsByClassName(""+CurntClass+"")[3].innerHTML=String(TS);
        totalR(TS)
    })
    //------------------------------------------------------------
i++;

})
// пересчёт при добавлении------------------------------------------------
function totalR(TS){
    // let k=(document.getElementsByTagName('td')[3].innerText);
    let total  = document.querySelector('#total').innerText;
    let totl=TS+Number(total);
    document.querySelector('#total').innerHTML=totl;
}
// пересчёт при удалении------------------------------------------------
function totalRD(TS){
    // let k=(document.getElementsByTagName('td')[3].innerText);
    let total  = document.querySelector('#total').innerText;
    let totl=Number(total)-TS;
    document.querySelector('#total').innerHTML=String(totl);
}
//удаление инпутов-----------------------------------------------------

function edit1stCELL(){
    document.querySelectorAll('#norm').forEach(e => e.remove());
}

