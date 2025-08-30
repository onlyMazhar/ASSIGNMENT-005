const callHistryData = [];

// click on heart icon, heart count increase
document.querySelectorAll(".heart-icon").forEach(function (heart) {
  heart.addEventListener("click", function () {
    let heartNumber = document.getElementById("heart-count");
    let heartFeildNumber = heartNumber.innerText;
    let heartFeildNumberConvert = parseInt(heartFeildNumber);

    heartFeildNumberConvert++;

    heartNumber.innerText = heartFeildNumberConvert;

    // console.log(heartNumber)
  });
});

// copy text update copy count, copy on clipboard and show alert
document.querySelectorAll(".cp-btn").forEach(function (copyBtn) {
  copyBtn.addEventListener("click", function () {
    // let copyElement = document.getElementById("copyfeild");
    // let copyElementNumber = copyElement.innerText;
    // let copyNumberConverted = parseInt(copyElementNumber);
    // console.log(copyNumberConverted);
    // // copyNumberConverted++;
    // copyElement.innerText = copyNumberConverted;

    const cardBody = copyBtn.closest(".card-body");
    const numberElement = cardBody.querySelector(".hot-line-text");
    const copyText = numberElement.innerText;

    navigator.clipboard.writeText(copyText)
      .then(() => {
        console.log(`Copied: ${copyText}`);

        const copyCounter = document.getElementById("copyfeild");
        copyCounter.innerText = parseInt(copyCounter.innerText) + 1;
      })
      .catch(err => console.error("Failed to copy: ", err));

    alert(`Copied: ${copyText}`);
  });
});

// call button, alert wih service name & number, cut 20 in coin every click.
document.querySelectorAll('.call-btn').forEach(function (callBtn) {
  callBtn.addEventListener('click', function () {
    let coin = document.getElementById("coin-number");
    let coinNummber = coin.innerText;
    let coinNumberConverted = parseInt(coinNummber);
    console.log(coinNumberConverted)

    if (coinNumberConverted < 20) {
      alert(`No Coin 😓 Available`)
      return;
    }
    const cardBody = callBtn.closest(".card-body");
    const serviceName = cardBody.querySelector(".service-name").innerText;
    const serviceNumber = cardBody.querySelector(".hot-line-text").innerText;
    console.log(serviceNumber, serviceName);

    alert(`📞 Calling: ${serviceName} ${serviceNumber}...`)
    let newCoinAmount = coinNumberConverted - 20;
    coin.innerText = newCoinAmount;
    console.log(newCoinAmount);

    const callHistoryContainer = document.getElementById('call-history-container');
    callHistoryContainer.innerHTML = '';
    const data = {
      name: serviceName,
      number: serviceNumber,
      date: new Date().toLocaleTimeString(),
    };
    callHistryData.unshift(data);
    console.log(callHistryData);

    for (const data of callHistryData) {
      const div = document.createElement('div')
      div.innerHTML = `
       <div class=" bg-[#F2F2F2] mx-3 mb-2 flex rounded-lg p-2 justify-between items-center ">
                    <div>
                        <p class="font-bold">${data.name}</p>
                        <p>${data.number}</p>
                    </div>
                    <div>
                        <p>${data.date}</p>
                    </div>
                </div>
      `
      callHistoryContainer.appendChild(div);
    }
  })
})

document.getElementById('clear-btn').addEventListener('click', function () {
  const container = document.getElementById('call-history-container'); // Get your div element
  container.innerHTML = '';
})