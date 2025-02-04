function updateTime() {
  //durban
  let durbanElement = document.querySelector("#durban");
  let durbanDateElement = durbanElement.querySelector(".date");
  let durbanTimeElement = durbanElement.querySelector(".time");
  let durbanTime = moment().tz("Africa/Johannesburg");

  durbanDateElement.innerHTML = moment().format("MMMM Do YYYY");
  durbanTimeElement.innerHTML = durbanTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //capetown
  let capetownElement = document.querySelector("#capetown");
  let capetownDateElement = capetownElement.querySelector(".date");
  let capetownTimeElement = capetownElement.querySelector(".time");
  let capetownTime = moment().tz("Africa/Johannesburg");

  capetownDateElement.innerHTML = moment().format("MMMM Do YYYY");
  capetownTimeElement.innerHTML = capetownTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
