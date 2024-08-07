import React from "react";
// import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import WebProfiePic from "../Image/heart.jpg";
import { useNavigate } from "react-router-dom";
import About from "./About";

// This component was just a temporary landing page

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
            <figure class="image is-152x152">
              <img class="is-rounded" src={WebProfiePic} />
            </figure>
            <h1 class="title is-2 has-text-black">🍓 Haley V Ferro 🍓</h1>
            <section class="section">
              <h1 class="title">Welcome to my website! ❤️</h1>
              <h3 class="subtitle">
                It's still a work in <strong>progress</strong>, but I'm excited
                to share my journey with you. Stay tuned as I continue to grow
                and add more content. Thank you for stopping by! 🌱
              </h3>
              <p class="subtitle has-text-black">
                Mother - Illustrator/Graphic Designer - She/Her
              </p>
            </section>
            <div class="columns">
              <div class="column">
                <SocialIcon
                  url="https://instagram.com"
                  href="https://www.instagram.com/lillemonsweets/"
                />
              </div>
              <div class="column">
                <SocialIcon
                  url="https://twitter.com"
                  href="https://twitter.com/HaleyVFerro"
                />
              </div>
              {/* <div class="column">Store</div> */}
              {/* <div class="column">
                <SocialIcon
                  url="https://discord.com"
                  href="https://discord.com/lillemonsweets"
                />
              </div> */}
              <div class="column">
                <SocialIcon
                  url="https://cara.app"
                  href="https://cara.app/haleyvferro/all"
                />
              </div>
              {/* <div class="column">TikTok</div> */}
            </div>
          </div>
        </div>

        {/* <!-- Hero footer: will stick at the bottom --> */}
        {/* <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li class="is-active">
                  <a class="has-text-danger-white">Home</a>
                </li>
                <li>
                  <a class="has-text-danger-white" path="/" element={<About />}>
                    About
                  </a>
                </li>
                <li>
                  <a class="has-text-danger-white">Commissions</a>
                </li>
                <li>
                  <a class="has-text-danger-white">Illustrations</a>
                </li>
                <li>
                  <a class="has-text-danger-white">Events</a>
                </li>
              </ul>
            </div>
          </nav>
        </div> */}
        {/* Hero footer: end of the bottom */}
      </section>
    </div>
  );
};

export default Sicky_note;
