// function changecolor(class){
//     const selected = "#ffffff";
//     const unselected = "#c4c4c4";
//     if (document.getElementsByClassName(class).style.backgroundColor = unselected) {
//         document.getElementsByClassName(class).style.backgroundColor = selected;
//     }
//     else {
//     }
// }



// function resetPixel(){
//     location.reload()
// }

function colorchange(id){

    if (id=="Cash"){
        document.getElementById(id).style.backgroundColor = "#ffffff";
        document.getElementById("Lease").style.backgroundColor = "#c4c4c4";
        document.getElementById("Loan").style.backgroundColor = "#c4c4c4";
    }
    if (id=="Lease"){
        document.getElementById(id).style.backgroundColor = "#ffffff";
        document.getElementById("Cash").style.backgroundColor = "#c4c4c4";
        document.getElementById("Loan").style.backgroundColor = "#c4c4c4";
        
    }
    if (id=="Loan"){
        document.getElementById(id).style.backgroundColor = "#ffffff";
        document.getElementById("Cash").style.backgroundColor = "#c4c4c4";
        document.getElementById("Lease").style.backgroundColor = "#c4c4c4";
    }
}


        //         document.getElementById(id).style.backgroundColor = "#ffffff"
//     }
//     if (document.getElementById(id).style.backgroundColor = "#ffffff"){
//         document.getElementById(id).style.backgroundColor = "#c4c4c4"
//     }
    
// 