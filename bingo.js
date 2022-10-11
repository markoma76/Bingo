var mbroj = new Set();
var kbroj = new Set();
var mfbr =[];
var kfbr = [];
var brc = 15;
var odbroj;
var s = 0,brojac = 0;
var r,g,b = 0;
var pogig = new Set(),pogko = new Set();izmena = new Set();
var izvucen = [];

/* document.getElementById("workbench").style.maxWidth = screen.width; */


function a1(){
    mbroj.add(1);
    document.getElementById("izb1").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a2(){
    mbroj.add(2);
    document.getElementById("izb2").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a3(){
    mbroj.add(3);
    document.getElementById("izb3").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a4(){
    mbroj.add(4);
    document.getElementById("izb4").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a5(){
    mbroj.add(5);
    document.getElementById("izb5").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a6(){
    mbroj.add(6);
    document.getElementById("izb6").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a7(){
    mbroj.add(7);
    document.getElementById("izb7").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a8(){
    mbroj.add(8);
    document.getElementById("izb8").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a9(){
    mbroj.add(9);
    document.getElementById("izb9").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a10(){
    mbroj.add(10);
    document.getElementById("izb10").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a11(){
    mbroj.add(11);
    document.getElementById("izb11").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a12(){
    mbroj.add(12);
    document.getElementById("izb12").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a13(){
    mbroj.add(13);
    document.getElementById("izb13").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a14(){
    mbroj.add(14);
    document.getElementById("izb14").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a15(){
    mbroj.add(15);
    document.getElementById("izb15").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a16(){
    mbroj.add(16);
    document.getElementById("izb16").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a17(){
    mbroj.add(17);
    document.getElementById("izb17").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a18(){
    mbroj.add(18);
    document.getElementById("izb18").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a19(){
    mbroj.add(19);
    document.getElementById("izb19").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a20(){
    mbroj.add(20);
    document.getElementById("izb20").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a21(){
    mbroj.add(21);
    document.getElementById("izb21").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a22(){
    mbroj.add(22);
    document.getElementById("izb22").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a23(){
    mbroj.add(23);
    document.getElementById("izb23").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a24(){
    mbroj.add(24);
    document.getElementById("izb24").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a25(){
    mbroj.add(25);
    document.getElementById("izb25").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a26(){
    mbroj.add(26);
    document.getElementById("izb26").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a27(){
    mbroj.add(27);
    document.getElementById("izb27").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a28(){
    mbroj.add(28);
    document.getElementById("izb28").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a29(){
    mbroj.add(29);
    document.getElementById("izb29").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function a30(){
    mbroj.add(30);
    document.getElementById("izb30").style.backgroundColor = "green"
    if (mbroj.size == 15) {
        nox()
    }
} 
function cnt(){
    document.getElementById("kanter").innerHTML = brc;
    brc--;
    if(brc ==-1 ){stop()};
}

function nox() {
    document.getElementById("izbor").style.display = "none";
    document.getElementById("medja").style.display = "inline";

   while(kbroj.size <15){
        kbroj.add(Math.floor(Math.random() * 30)+1)
    }

    mfbr = [...mbroj];
    kfbr = [...kbroj];

    mfbr.sort(function(a, b){return a - b});
   kfbr.sort(function(a, b){return a - b});

 odbroj = setInterval(cnt,500);

}

function stop(){
clearInterval(odbroj);
document.getElementById("medja").style.display = "none";
document.getElementById("tabele1").style.display = "block";
document.getElementById("izvalce").style.display = "block";
while(s<15){
    document.getElementsByClassName("upisig")[s].innerHTML = mfbr[s];
    document.getElementsByClassName("upisko")[s].innerHTML = kfbr[s];
    s++
    };
    while (izmena.size < 30) {
        izmena.add(Math.floor(Math.random() * 30)+1)
       /*  console.log(izmena); */
    }
    izvucen = [...izmena];
    /*  izvucen = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] */
    bet();
}    

function bet(){
    r = izvucen[brojac]
    brojac++
    var test5 = setTimeout(igractest,1000);
    var test6 = setTimeout(komptest,1000);
    document.getElementById("rotkrug").innerHTML = r ;
    document.getElementById("strelica").style.display = "none";
    document.getElementById("tabigrac").style.top = "105px";
    document.getElementById("tabkomp").style.top = "105px";
      
    var test2 = setTimeout(bet2,500);
}

function igractest(){
    let korac,rote;
    rote = String(r);
   for (let ib = 0; ib < 15; ib++) {
      korac = document.getElementsByClassName("upisig")[ib].textContent;
      if (korac == rote) {
          document.getElementsByClassName("upisig")[ib].style.backgroundColor = "green";
          pogig.add(r);
         }
      }
}

function komptest(){
    let korac,rote;
    rote = String(r);
   for (let ib = 0; ib < 15; ib++) {
      korac = document.getElementsByClassName("upisko")[ib].textContent;
      if (korac == rote) {
          document.getElementsByClassName("upisko")[ib].style.backgroundColor = "green";
          pogko.add(r);
         }
      }

}

function bet2(){
    document.getElementById("strelica").style.display = "block";
    document.getElementById("tabigrac").style.top = "-220px";
    document.getElementById("tabkomp").style.top = "-220px";
   if (pogig.size == 15 && pogko.size == 15) {
       bezpob();}
    else if (pogig.size == 15) {
        pobigrac();}
        else if (pogko.size == 15) {
          pobkomp();  
        } 
        else {
        var test3 = setTimeout(bet,3000);
        var test4 = setTimeout(creiraj,2000);
       
         }
        
   
}

function creiraj(){

    var klasa = document.createAttribute("class");
    klasa.value = "izvb";
    var dima = document.createElement("div");
    dima.setAttributeNode(klasa);
    document.getElementById("kadica").appendChild(dima).innerHTML = r;
   
};
function pobigrac(){

document.getElementById("tabele1").style.display = "none";
document.getElementById("strelica").style.display = "none";
document.getElementById("izvalce").style.display = "none";
document.getElementById("igracw").style.display = "block";
document.getElementById("restart").style.display = "block";

}
function pobkomp(){
    
document.getElementById("tabele1").style.display = "none";
document.getElementById("strelica").style.display = "none";
document.getElementById("izvalce").style.display = "none";
document.getElementById("kompw").style.display = "block";
document.getElementById("restart").style.display = "block";

}

function bezpob(){
    
document.getElementById("tabele1").style.display = "none";
document.getElementById("strelica").style.display = "none";
document.getElementById("izvalce").style.display = "none";
document.getElementById("nereseno").style.display = "block";
document.getElementById("restart").style.display = "block";

}
function restart(){
    location.reload();
}