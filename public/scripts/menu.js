const menu = document.querySelectorAll(".menu a")
const path = location.pathname

  for (link of menu) {
      if (path.includes(link.getAttribute('href'))) {
          link.classList.add("selected")
      }
  }

