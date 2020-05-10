"use srict";
document.querySelector("#all").onclick=function(){
    let blocks = document.querySelectorAll(".block");
    [...blocks].map(li=>{
        li.classList.remove("block");
    })
}

document.querySelector("#cities").onclick=function(){
    let boxes =document.querySelectorAll(".box");
    let city = document.querySelectorAll(".city");
    [...boxes].map(box=>{
        box.classList.add("block");
    });
    [...city].map(li=>{
        li.classList.remove("block");
    })
}

document.querySelector("#industry").onclick=function(){
    let boxes =document.querySelectorAll(".box");
    let city = document.querySelectorAll(".industry");
    [...boxes].map(box=>{
        box.classList.add("block");
    });
    [...city].map(li=>{
        li.classList.remove("block");
    })
}
document.querySelector("#nature").onclick=function(){
    let boxes =document.querySelectorAll(".box");
    let city = document.querySelectorAll(".nature");
    [...boxes].map(box=>{
        box.classList.add("block");
    });
    [...city].map(li=>{
        li.classList.remove("block");
    })
}
document.querySelector("#night").onclick=function(){
    let boxes =document.querySelectorAll(".box");
    let city = document.querySelectorAll(".night");
    [...boxes].map(box=>{
        box.classList.add("block");
    });
    [...city].map(li=>{
        li.classList.remove("block");
    })
}

document.querySelector("#asc").onclick=function(){
    let boxes= document.querySelectorAll(".box");
    [...boxes].reverse();
}