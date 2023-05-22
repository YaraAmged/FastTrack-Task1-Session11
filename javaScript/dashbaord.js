$(document).ready(function () {
  const chk = document.getElementById("chk");
  chk.addEventListener("change", () => {
    $("body").toggleClass("dark text-white");
    const switchButtonTheme = $(".switch-button p");
    switchButtonTheme.text(
      switchButtonTheme.text() == "Dark Mode" ? "Light Mode" : "Dark Mode"
    );
  });

  const cards = JSON.parse(localStorage.getItem("items") || []);
  for (let card of cards) {
    let className, wrapperStyle;
    switch (card.type) {
      case "Facebook":
        className = "facebook fa-brands fa-square-facebook";
        wrapperStyle = "border-top:solid 5px #1391f7;";
        break;
      case "Instagram":
        className = "instagram fa-brands fa-instagram";
        wrapperStyle =
          "border-top:solid 5px;border-image: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d) 1;";
        break;
      case "Youtube":
        className = "youtube fa-brands fa-youtube";
        wrapperStyle = "border-top:solid 5px #c1032a;";

        break;
      case "Twitter":
        className = "twitter fa-brands fa-twitter";
        wrapperStyle = "border-top:solid 5px #2aa7f2;";
        break;
    }
    const html = `<div class="col-12 col-sm-3">
  <div class="card-form-data d-flex flex-column align-items-center gap-2" style="${wrapperStyle}">
    <div class="d-flex justify-content-center align-items-center gap-2">
      <i class="${className}"></i>
      <p class="username">${card.title}</p>
    </div>
    <div class="text-center">
      <p class="number">${card.cardNumber}</p>
      <p class="text">${card.description}</p>
    </div>
    <div class="precentage d-flex align-items-end gap-1">
      <i class="fa-solid fa-caret-up"></i>
      <p>12 Today</p>
    </div>
    </div>
    </div>`;
    $("#cards-wrapper").html(html + $("#cards-wrapper").html());
  }
});
