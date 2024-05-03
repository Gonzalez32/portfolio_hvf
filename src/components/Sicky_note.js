import React from "react";

const Sicky_note = () => {
  return (
    <div>
      <section class="hero is-danger is-fullheight">
        {/* <!-- Hero head: will stick at the top --> */}
        {/* <div class="hero-head">
          <header class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img
                    // src="https://bulma.io/assets/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span class="navbar-burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              {/* <div id="navbarMenuHeroC" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active"> Home </a>
                  <a class="navbar-item"> Examples </a>
                  <a class="navbar-item"> Documentation </a>
                  <span class="navbar-item">
                    <a class="button is-success is-inverted">
                      <span class="icon">
                        <i class="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div> */}
        {/* </div> */}
        {/* </header> */}
        {/* </div> */}

        {/* <!-- Hero content: will be in the middle --> */}
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">Your Brand Name Or Brand Image</p>
            <p class="subtitle">
              mother - illustrator/graphic designer - she/her
            </p>
          </div>
        </div>

        {/* <!-- Hero footer: will stick at the bottom --> */}
        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li class="is-active">
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Commissions</a>
                </li>
                <li>
                  <a>Illustrations</a>
                </li>
                <li>
                  <a>Events</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Sicky_note;
