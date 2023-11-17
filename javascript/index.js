function updateFrankfurtTime() {
  // Frankfurt
  let FrankfurtElement = document.querySelector("#frankfurt");
  let FrankfurtDateElement = FrankfurtElement.querySelector(".date");
  let FrankfurtTimeElement = FrankfurtElement.querySelector(".time");
  let FrankfurtTime = moment().tz("Europe/Frankfurt");

  FrankfurtDateElement.innerHTML = FrankfurtTime.format("MMMM Do YYYY");
  FrankfurtTimeElement.innerHTML = FrankfurtTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

setInterval(updateFrankfurtTime, 1000);

function updateTokyoTime() {
  // Tokyo
  let TokyoElement = document.querySelector("#tokyo");
  let TokyoDateElement = TokyoElement.querySelector(".date");
  let TokyoTimeElement = TokyoElement.querySelector(".time");
  let TokyoTime = moment().tz("Asia/Tokyo");
  TokyoDateElement.innerHTML = TokyoTime.format("MMMM Do YYYY");
  TokyoTimeElement.innerHTML = TokyoTime.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(updateTokyoTime, 1000);

function updateAucklandTime() {
  // Auckland
  let AucklandElement = document.querySelector("#aucklamd");
  let AucklandDateElement = AucklandElement.querySelector(".date");
  let AucklandTimeElement = AucklandElement.querySelector(".time");
  let AucklandTime = moment().tz("Pacific/Auckland");
  AucklandDateElement.innerHTML = AucklandTime.format("MMMM Do YYYY");
  AucklandTimeElement.innerHTML = AucklandTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
setInterval(updateAucklandTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format(
                  "h:mm:ss"
                )}<small>${cityTime.format("A")}</small></div>
            </div>

  
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
