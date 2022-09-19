const percent = 0.2,
  checkbox = document.querySelector("#switcher"),
  prices = document.querySelectorAll(".pricing-card__value");
checkbox.addEventListener("change", (e) => {
  if (checkbox.checked === !true) {
    prices.forEach((item, index) => {
      item.innerHTML = Math.round(
        item.innerHTML * 12 - percent * (item.innerHTML * 12)
      );
    });
  } else {
    prices.forEach((item, index) => {
      item.innerHTML = Math.round(item.innerHTML / (12 * (1 - percent)));
    });
  }
});

