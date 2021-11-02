// Course info
const classes = [
  {
    id: 1,
    title: "learn react today",
    category: "react",
    price: 600.99,
    img: "./images/reactjs-2.png",
    desc: `React js is becoming so popular and many people are willing to learn and practise . As seen, so many platforms are being built by React js!`,
  },
  {
    id: 2,
    title: "know known vue today",
    category: "vue",
    price: 550.99,
    img: "./images/vue.png",
    desc: `Nowadays Vue is being popular and most wanted framework based on survey on Stackoverflow among the programmers!`,
  },
  {
    id: 3,
    title: "best framework angular!",
    category: "angular",
    price: 500.99,
    img: "./images/angular.jpg",
    desc: `Without any doubt that, Angular is oldest framework of javascript, and it still saves it popularity based on its convenience!`,
  },
  {
    id: 4,
    title: "learn from fullStack husanboy",
    category: "react",
    price: 650.99,
    img: "./images/reactjs-2.png",
    desc: `Husanboy has 10 years experince and he built so many projects and platforms using React`,
  },
  {
    id: 5,
    title: "most popular lessons of traversy media",
    category: "vue",
    price: 530.99,
    img: "./images/vue.png",
    desc: `Traversy Media has got so many students, as the lessons are so popular and effective!`,
  },
  {
    id: 6,
    title: "ooop, learn angular today",
    category: "angular",
    price: 510.99,
    img: "./images/angular.jpg",
    desc: `Husanboy has 10 years experince and he built so many projects and platforms using React`,
  },
  {
    id: 7,
    title: "clone twitter app using react js!",
    category: "react",
    price: 200.99,
    img: "./images/reactjs-2.png",
    desc: `Husanboy has 10 years experince and he built so many projects and platforms using React and other frameworks!`,
  },
  {
    id: 8,
    title: "practise doing to-do list using vue js!",
    category: "vue",
    price: 210.99,
    img: "./images/vue.png",
    desc: `Husanboy has 10 years experince and he built so many projects and platforms using React and other frameworks! `,
  },
  {
    id: 9,
    title: "make responsive website using angular!",
    category: "angular",
    price: 100.99,
    img: "./images/angular.jpg",
    desc: `Husanboy has 10 years experince and he built so many projects and platforms using React and other frameworks!`,
  },
];
// Grab couple of things
const center = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

// Add DomContentLoaded
window.addEventListener("DOMContentLoaded", function () {
  displayMenuLessons(classes);
});
// Filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (a) {
    const category = a.currentTarget.dataset.id;
    const clas = classes.filter(function (classItems) {
      if (classItems.category === category) {
        return classItems;
      }
    });
    if (category === "all") {
      displayMenuLessons(classes);
      console.log("No");
    } else {
      displayMenuLessons(clas);
    }
  });
});

function displayMenuLessons(itemsMenu) {
  let classNames = itemsMenu.map((a) => {
    return `<article class="course-flag">
    <img src=${a.img} class="photo" alt=${a.category} />
    <div class="course-info">
        <header>
            <h4>${a.title}</h4>
            <h4 class="price">$${a.price}</h4>
        </header>
        <p class="item-text">${a.desc}</p>
    </div>
</article>`;
  });
  const same = classNames.join("");
  center.innerHTML = same;
}
