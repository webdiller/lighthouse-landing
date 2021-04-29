document.addEventListener("DOMContentLoaded", function () {
  const d = document;
  const obj1 = d.getElementById("obj1");
  const obj2 = d.getElementById("obj2");
  const obj3 = d.getElementById("obj3");
  const obj4 = d.getElementById("obj4");
  const obj5 = d.getElementById("obj5");
  const obj6 = d.getElementById("obj6");
  const obj7 = d.getElementById("obj7");
  const obj8 = d.getElementById("obj8");
  const obj9 = d.getElementById("obj9");
  const obj10 = d.getElementById("obj10");
  const obj11 = d.getElementById("obj11");
  const obj12 = d.getElementById("obj12");
  const obj13 = d.getElementById("obj13");
  const obj14 = d.getElementById("obj14");

  let arr = [
    { name: obj1, type: "up", delay: 2 },
    { name: obj2, type: "down", delay: 2 },
    { name: obj3, type: "up", delay: 2 },
    { name: obj4, type: "down", delay: 2 },
    { name: obj5, type: "up", delay: 2 },
    { name: obj6, type: "down", delay: 4 },
    { name: obj7, type: "up", delay: 3 },
    { name: obj8, type: "down", delay: 3 },
    { name: obj9, type: "up", delay: 3 },
    { name: obj10, type: "down", delay: 1 },
    { name: obj11, type: "up", delay: 2 },
    { name: obj12, type: "down", delay: .4 },
    { name: obj13, type: "up", delay: 6 },
    { name: obj14, type: "down", delay: 5 }
  ];

  generetaParalax(arr);

  function generetaParalax(elements) {
    elements.forEach(item => {
      new simpleParallax(item.name, {
        delay: item.delay,
        transition: "cubic-bezier(0,0,0,1)",
        overflow: true,
        orientation: item.type
      });
    });
  }

  (function () {
    const questions = d.querySelectorAll("#questions .faq__question-title");
    if (questions) {
      questions.forEach(item => {
        item.addEventListener("click", function (e) {
          item.parentElement.classList.toggle("active");
        });
      });
    }
  })();
});
