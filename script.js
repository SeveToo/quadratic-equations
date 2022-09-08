const btn = document.querySelector("#btn");

const fun = () => {
  let a = document.querySelector("#number__a").value;
  // let a = parseFloat(document.querySelector("#number__a").value);

  if (a == "") {
    a = 1;
  } else {
    a = a;
  }
  a = parseFloat(a);
  // console.log(a);
  let b = parseFloat(document.querySelector("#number__b").value);
  let c = parseFloat(document.querySelector("#number__c").value);

  let delta = b * b - 4 * a * c;
  // console.log(delta);

  if (delta > 0) {
    // Dla delty większej od zera

    //Obliczenia
    let x1 = Math.round(((-b - Math.sqrt(delta)) / (2 * a)) * 100) / 100;
    let x2 = Math.round(((-b + Math.sqrt(delta)) / (2 * a)) * 100) / 100;
    let sqrt__delta = Math.round(Math.sqrt(delta) * 100) / 100;

    let p = Math.round((-b / (2 * a)) * 100) / 100;
    let q = Math.round((-delta / (4 * a)) * 100) / 100;

    // Wyświetlanie

    for (
      let i = 0;
      i < document.querySelectorAll(".solution__item").length;
      i++
    ) {
      document.querySelectorAll(".solution__item")[i].style.display = "none";
    }
    document.querySelectorAll(".solution__item")[0].style.display = "flex";
    document.querySelectorAll(".solution__item")[2].style.display = "flex";
    document.querySelectorAll(".solution__item")[3].style.display = "flex";
    document.querySelectorAll(".solution__item")[4].style.display = "flex";
    document.querySelectorAll(".solution__item")[5].style.display = "flex";
    if (c < 0) {
      document.querySelectorAll(".c_score")[0].textContent = "(" + c + ")";
    } else {
      document.querySelectorAll(".c_score")[0].textContent = c;
    }

    for (let i = 0; i < document.querySelectorAll(".a_score").length; i++) {
      if (a < 0) {
        document.querySelectorAll(".a_score")[i].textContent = "(" + a + ")";
      } else {
        document.querySelectorAll(".a_score")[i].textContent = a;
      }
    }
    for (let i = 0; i < document.querySelectorAll(".b_score").length; i++) {
      if (b < 0) {
        document.querySelectorAll(".b_score")[i].textContent = "(" + b + ")";
      } else {
        document.querySelectorAll(".b_score")[i].textContent = b;
      }
    }
    for (let i = 0; i < document.querySelectorAll(".delta_score").length; i++) {
      document.querySelectorAll(".delta_score")[i].textContent = delta;
    }
    document.querySelector(".sqrt_DeltaScore").textContent = sqrt__delta;
    document.querySelector(".xone_score").textContent = x1;
    document.querySelector(".xtwo_score").textContent = x2;
    document.querySelector(".p_score").textContent = p;
    document.querySelector(".q_score").textContent = q;
  } else if (delta < 0) {
    // Dla delty mniejszej od zero

    // Obliczenia

    let p = Math.round((-b / (2 * a)) * 100) / 100;
    let q = Math.round((-delta / (4 * a)) * 100) / 100;

    // Wypisywanie

    for (
      let i = 0;
      i < document.querySelectorAll(".solution__item").length;
      i++
    ) {
      document.querySelectorAll(".solution__item")[i].style.display = "none";
    }
    document.querySelectorAll(".solution__item")[0].style.display = "flex";
    document.querySelectorAll(".solution__item")[4].style.display = "flex";
    document.querySelectorAll(".solution__item")[5].style.display = "flex";

    if (c < 0) {
      document.querySelectorAll(".c_score")[0].textContent = "(" + c + ")";
    } else {
      document.querySelectorAll(".c_score")[0].textContent = c;
    }

    for (let i = 0; i < document.querySelectorAll(".a_score").length; i++) {
      if (a < 0) {
        document.querySelectorAll(".a_score")[i].textContent = "(" + a + ")";
      } else {
        document.querySelectorAll(".a_score")[i].textContent = a;
      }
    }
    for (let i = 0; i < document.querySelectorAll(".b_score").length; i++) {
      if (b < 0) {
        document.querySelectorAll(".b_score")[i].textContent = "(" + b + ")";
      } else {
        document.querySelectorAll(".b_score")[i].textContent = b;
      }
    }
    for (let i = 0; i < document.querySelectorAll(".delta_score").length; i++) {
      if (i == 0) {
        document.querySelectorAll(".delta_score")[i].textContent = delta;
      } else {
        document.querySelectorAll(".delta_score")[i].textContent =
          "(" + delta + ")";
      }
    }
    document.querySelector(".p_score").textContent = p;
    document.querySelector(".q_score").textContent = q;
  } else {
    // Dla delty równej zero

    // Obliczenia

    let x0 = Math.round((-b / (2 * a)) * 100) / 100;
    let p = Math.round((-b / (2 * a)) * 100) / 100;
    let q = Math.round((-delta / (4 * a)) * 100) / 100;

    // Wypisywanie

    for (
      let i = 0;
      i < document.querySelectorAll(".solution__item").length;
      i++
    ) {
      document.querySelectorAll(".solution__item")[i].style.display = "none";
    }
    document.querySelectorAll(".solution__item")[0].style.display = "flex";
    document.querySelectorAll(".solution__item")[1].style.display = "flex";
    document.querySelectorAll(".solution__item")[4].style.display = "flex";
    document.querySelectorAll(".solution__item")[5].style.display = "flex";

    if (c < 0) {
      document.querySelectorAll(".c_score")[0].textContent = "(" + c + ")";
    } else {
      document.querySelectorAll(".c_score")[0].textContent = c;
    }

    for (let i = 0; i < document.querySelectorAll(".a_score").length; i++) {
      if (a < 0) {
        document.querySelectorAll(".a_score")[i].textContent = "(" + a + ")";
      } else {
        document.querySelectorAll(".a_score")[i].textContent = a;
      }
    }
    for (let i = 0; i < document.querySelectorAll(".b_score").length; i++) {
      if (b < 0) {
        document.querySelectorAll(".b_score")[i].textContent = "(" + b + ")";
      } else {
        document.querySelectorAll(".b_score")[i].textContent = b;
      }
    }
    for (let i = 0; i < document.querySelectorAll(".delta_score").length; i++) {
      document.querySelectorAll(".delta_score")[i].textContent = delta;
    }
    document.querySelector(".xzero_score").textContent = x0;
    document.querySelector(".p_score").textContent = p;
    document.querySelector(".q_score").textContent = q;
  }
};

btn.addEventListener("click", fun);
