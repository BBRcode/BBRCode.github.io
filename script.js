window.onload = () => {
    let clicked = false;
    document.querySelector(".cool-button").addEventListener('click', () => {
      const button = document.querySelector(".cool-button");
  
      if (clicked) {
        button.innerHTML = "";
        button.style.backgroundImage = "url('CookieInitial.png')";
        clicked = false;
      } else {
        /* TODO: Impliment timer, potential animation, and random fortunes */
        button.innerHTML = "random fortune";
        button.style.backgroundImage = "url('CookieFinal.png')";
        clicked = true;
      }
    });
  }
  