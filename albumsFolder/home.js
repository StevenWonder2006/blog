function time(){
    const currentTime = new Date();
   // currentTime.now(2025,2,17)
    const year = currentTime.getFullYear();
   const month = currentTime.getMonth();
    const day = currentTime.getDate();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes()
  
  
  let timeHolder = `${year}-${month}-${day}\n  || ${hours}-${minutes}`
  
  return timeHolder
   
  };
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("time").innerHTML = time();
  })
