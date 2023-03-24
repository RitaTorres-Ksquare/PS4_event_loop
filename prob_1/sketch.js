//function to take date, hours, minutes, seconds
function setDate() {
  let aDate = new Date();
  let s = aDate.getSeconds();
  let m = aDate.getMinutes();
  let h = aDate.getHours();

  //convert the h,m,s to degrees
  //hDeg= hour*30 because (360/12) and m*(360/720) add 0.5 degrees for more efective degrees.
  let hDeg = h * 30 + m * (360 / 720);
  //mDeg= m*6 because (360/60) and s*(360/3600) add 0.1 degrees for more efective degrees.
  let mDeg = m * 6  + s * (360 / 3600);
  let sDeg = s * 6;
  

  //DOM  
  let hHand = document.getElementById("hours");
  let mHand = document.getElementById("minutes");
  let sHand = document.getElementById("seconds");

  
  hHand.style.transform = "rotate(" + hDeg + "deg)";
  mHand.style.transform = "rotate(" + mDeg + "deg)";
  sHand.style.transform = "rotate(" + sDeg + "deg)";
}

//repeat this function every second
setInterval(setDate, 1000);

//initialize the function
setDate();