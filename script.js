// initilaise the variable
let songindex=0;
let audioelement=new Audio('spotify Clone/1.mp3');
let masterplay=document.getElementById('masterplay');
let mastersongname=document.getElementById('mastersongname');
let myprogressbar=document.getElementById('myprogressbar');
let gif =document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songname:"Salam-e-Ishq", filepath:"spotify Clone/1.mp3", coverpath:"spotify Clone/1.jpg"},
    {songname:"kya h", filepath:"spotify Clone/2.mp3", coverpath:"spotify Clone/2.jpg"},
    {songname:"waha waha", filepath:"spotify Clone/3.mp3", coverpath:"spotify Clone/3.jpg"},
    {songname:"chale hat", filepath:"spotify Clone/4.mp3", coverpath:"spotify Clone/4.jpg"},
    {songname:"kya hua tara vada", filepath:"spotify Clone/5.mp3", coverpath:"spotify Clone/5.jpg"},
    {songname:"tu cheez bade", filepath:"spotify Clone/6.mp3", coverpath:"spotify Clone/6.jpg"},
    {songname:"chana mere ya", filepath:"spotify Clone/7.mp3", coverpath:"spotify Clone/7.jpg"},
    {songname:"jeene ke h ", filepath:"spotify Clone/8.mp3", coverpath:"spotify Clone/8.jpg"},
    {songname:"aaj fir tum pe", filepath:"spotify Clone/9.mp3", coverpath:"spotify Clone/9.jpg"},
    {songname:"tu jase", filepath:"spotify Clone/10.mp3", coverpath:"spotify Clone/10.jpg"},
]
songitem.forEach((element,i)=>{
    console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverpath;
element.getElementsByClassName("songname")[0].innerText =songs[i].songname;
})

//audioelement.play();
masterplay.addEventListener('click',()=>{
    console.log("you have clicked")
    if(audioelement.paused||audioelement.currentTime<=0)
{
audioelement.play();
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
gif.style.opacity=1;
}
else{
    audioelement.pause();
    masterplay.classList.remove('fa-pause-circle');
masterplay.classList.add('fa-play-circle');
gif.style.opacity = 0;

}
})
//listen to events
audioelement.addEventListener('timeupdate',()=>{
 let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
console.log("timeupdate"+progress);
myprogressbar.value=progress;

}) 
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})
const makeallplay= ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        
           
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src=`spotify Clone/${songindex+1}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex +=1;
    }
    audioelement.src=`spotify Clone/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -=1;
    }
    audioelement.src=`spotify Clone/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
})