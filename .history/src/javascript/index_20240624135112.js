function updateTime() {
  // Houston
    let houstonElement = document.querySelector("#houston");
    if (houstonElement) {
    let houstonDateElement = houstonElement.querySelector(".date");
    let houstonTimeElement = houstonElement.querySelector(".time");
    let houstonTime = moment().tz("America/Ojinaga");

    houstonDateElement.innerHTML = houstonTime.format("MMMM	Do YYYY");
    houstonTimeElement.innerHTML = houstonTime.format(
        "h:mm:ss [<small>]A[</small>]"
        );
    }

  // Tokyo
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM	Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
        "h:mm:ss [<small>]A[</small>]"
        );
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    letcityTimeZone === cityTimeZone.replace("_", " ").split("/")[1];
    let cityTimeZone = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
      let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
   
    citiesElement.innerHTML = `
    <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
    )}</small></div>
    </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
