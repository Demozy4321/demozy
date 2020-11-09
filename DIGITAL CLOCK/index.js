function time()
{
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();
  let am_pm ="AM";

  if(hrs ==0)
  {
    hrs = 12;
    am_pm ="AM"
  }

  if(hrs > 12)
  {
    hrs -= 12;
    am_pm = "PM";
  }

  hrs = hrs<10 ? "0" + hrs: hrs;
  mins =mins<10 ? "0" + mins: mins;
  sec = sec<10 ? "0" + sec: sec;

  let clockText = hrs + ":" + mins + ":" + sec + " " + am_pm;

  document.getElementById("clock-body").innerHTML = clockText;
}

time();
setInterval(time,1000);
