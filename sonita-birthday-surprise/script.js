const loader=document.getElementById("loader");
const openBtn=document.getElementById("openBtn");
const birthday=document.getElementById("birthday");
const video=document.getElementById("birthdayVideo");
const unlockBtn=document.getElementById("unlockBtn");
const unlockStatus=document.getElementById("unlockStatus");
const lockOrb=document.getElementById("lockOrb");
const finalSection=document.getElementById("final");
const replayBtn=document.getElementById("replayBtn");
const hearts=document.getElementById("hearts");
const confetti=document.getElementById("confetti");

window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hidden"),900));

openBtn.addEventListener("click",()=>{
  birthday.scrollIntoView({behavior:"smooth"});
  launchConfetti();
  setTimeout(()=>video.scrollIntoView({behavior:"smooth",block:"center"}),1100);
});

video.addEventListener("timeupdate",()=>{
  if(video.duration && video.currentTime/video.duration>=.9) unlock();
});
video.addEventListener("ended",unlock);

function unlock(){
  unlockBtn.disabled=false;
  unlockBtn.classList.add("ready");
  unlockStatus.textContent="The final message is ready for you. ♡";
  lockOrb.textContent="💗";
  lockOrb.style.transform="scale(1.12)";
}

unlockBtn.addEventListener("click",()=>{
  if(!unlockBtn.disabled){
    finalSection.scrollIntoView({behavior:"smooth"});
    launchConfetti();
  }
});

replayBtn.addEventListener("click",()=>{
  document.getElementById("song").scrollIntoView({behavior:"smooth",block:"center"});
  setTimeout(()=>{video.currentTime=0;video.play().catch(()=>{});},700);
});

function heart(){
  const x=document.createElement("span");
  x.textContent=Math.random()>.25?"♥":"✦";
  x.style.left=Math.random()*100+"vw";
  x.style.fontSize=(10+Math.random()*15)+"px";
  x.style.animationDuration=(7+Math.random()*8)+"s";
  hearts.appendChild(x);
  setTimeout(()=>x.remove(),16000);
}
setInterval(heart,900);

function launchConfetti(){
  for(let n=0;n<55;n++){
    const c=document.createElement("i");
    c.style.left=Math.random()*100+"vw";
    c.style.animationDelay=Math.random()*.7+"s";
    c.style.transform=`rotate(${Math.random()*360}deg)`;
    c.style.opacity=.5+Math.random()*.5;
    confetti.appendChild(c);
    setTimeout(()=>c.remove(),4500);
  }
}
