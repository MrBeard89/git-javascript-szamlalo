//Alapérték felvétele
let count = 0;

//Gombok és egyébb elemek eltárolása változókba
const value = document.getElementById("value");
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");

const btns = document.querySelectorAll(".btn");

//Ciklussal végigmegyek az eltárolt gombokon amelyeken rajtavan a .btn class
btns.forEach((btn) => {
  //Az összes gomb közül, amelyeket a ciklussal bejárok,azt kattintotam meg amelyik az aktuális ciklusfutáskor
  //jön a sorban
  btn.addEventListener("click", (e) => {
    //Az éppen aktuálisan megkattintot gombon milyen classok vannak
    const style = e.currentTarget.classList;
    //Ha aza aktuálisan megkattintott gombok classjai közül tartalmazza a decrease class akkor csökkentjük
    //az alapértékeket
    if (style.contains("decrease")) {
      //Növeljük az értéket
      count--;
    } else if (style.contains("increase")) {
      //Csökkentsük az értéket
      count++;
    } else {
      //Visszaállitjuk az alapértékeket
      count = 0;
    }

    //Szinek hozzáadása spanhez
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});

/*
//Egyszerű, lusta módszer
increase.addEventListener("click", () => {
  //Növelem az alapértékem egyel
  count++;
  //Megnézem hogy az alapértékem nagyobb e mint 0
  if (count >= 0) {
    //ha nagyobb hozzáadok egy zöld betűszint
    value.style.color = "green";
  }
  //Majd az alapértékem aktuális értékét beállitom a value idval elátott divembe
  value.textContent = count;
});

decrease.addEventListener("click", () => {
  //Növelem az alapértékem egyel
  count--;
  //Megnézem hogy az alapértékem nagyobb e mint 0
  if (count <= 0) {
    //ha nagyobb hozzáadok egy zöld betűszint
    value.style.color = "red";
  }
  //Majd az alapértékem aktuális értékét beállitom a value idval elátott divembe
  value.textContent = count;
});

reset.addEventListener("click", () => {
  //Viszaállitom az értéket
  count = 0;
  //Visszaállitom az alap betűszint
  value.style.color = "black";

  //Majd az alapértékem aktuális értékét beállitom a value idval elátott divembe
  value.textContent = count;
});
*/
