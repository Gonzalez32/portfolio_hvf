import React from "react";

const Home = () => {
  return (
    <section class="hero is-danger is-large">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="subtitle">Hey there, I'm</h1>
          <h2 class="title">Haley</h2>
          <h1 class="subtitle profession">Someone who makes art.</h1>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="About me">About Me</a>
              </li>
              <li>
                <a href="Services">Services</a>
              </li>
              <li>
                <a href="My Work">My Work</a>
              </li>
              <li>
                <a href="Contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Home;
