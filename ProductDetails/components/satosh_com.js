import navbar from "../../Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footerTal from "../../Components/footer.js";
document.getElementById("footer").innerHTML = footerTal();

let searchquery = document.querySelector("#search_bar");

searchquery.addEventListener("keypress", () => {
  if (event.key == "Enter") {
    pressing();
  }
});

let pressing = async () => {
  let query = document.querySelector("#search_bar").value;
  query.toLowerCase();
  let res = await fetch(
    `https://dark-lime-tadpole-sari.cyclic.app/licious/${query}`
  );
  let data = await res.json();
  console.log(data);
  localStorage.setItem("searchresult", JSON.stringify(data));
  console.log(query);
  window.location.href =
    "../../ProductPage/seachPageDetails.html";
};
