console.log("connected");

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

document.querySelectorAll(".cp-btn").forEach(function (copyBtn) {
  copyBtn.addEventListener("click", function () {
    let copyElement = document.getElementById("copyfeild");
    let copyElementNumber = copyElement.innerText;
    let copyNumberConverted = parseInt(copyElementNumber);
    console.log(copyNumberConverted);
    copyNumberConverted++;
    copyElement.innerText = copyNumberConverted;

    const cardBody = copyBtn.closest(".card-body");
    const numberElement = cardBody.querySelector(".hot-line-text");
    const copyText = numberElement.innerText;

    navigator.clipboard.writeText(copyText)
      .then(() => {
        console.log(`Copied: ${copyText}`);

        // 4. Increment global copy counter
        const copyCounter = document.getElementById("copyfeild");
        copyCounter.innerText = parseInt(copyCounter.innerText) + 1;
      })
      .catch(err => console.error("Failed to copy: ", err));

    alert(`Copied: ${copyText}`);
  });
});
