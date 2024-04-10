import "../../styles/Home.css";
import React from "react";
import Football1 from "../../assets/football1.png";
import Football2 from "../../assets/football2.jpg";
import Football3 from "../../assets/football3.png";
import Football23 from "../../assets/football23.png";
import YoutubeLink from "../../pages/Home/YoutubeLink";
import Logo from "../../assets/football-logo-light.png"

const Home = () => {
  return (
    <div className="MainBanner">
      <div className="welcomeBox">
        <div className="text_welcomeBox">
          <div className="welcome-title">Welcome to Wonder Cubs!</div>
          <p>
              A site for the next generation of Lionesses. Are you interesed in learning
              about your favourite team's games. Just looking for a club near you?
          </p>
        </div>
        <div className="video_welcomeBox">
          <div className="card-heading">The Lionesses are the Champions!</div>
          <div className="youtube">
            <YoutubeLink embedId="pGxL8xE1pZM" />
          </div>
        </div>
      </div>
      <div className="buttonBox">
        <div className="button1">
          <img className="pic1" src={Football1} alt="Girls playing football" />
          <div className="content_align">
          <div className="card-heading">Meet the new members</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <a className="anchor_button" href="/blog">
            Get to know them
          </a>
        </div>
        <div className="button2">
          <img className="pic2" src={Football3} alt="Girls playing football" />
          <div className="content_align">
            <div className="card-heading">Mentor of the Month</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <a className="anchor_button" href="/blog">
            Read more
          </a>
        </div>
        <div className="button3">
          <img className="pic3" src={Football2} alt="Girls playing football" />
          <div className="content_align">
            <div className="card-heading">How to join us</div>
            <p>
              Loremipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <a className="anchor_button" href="/login">
            Click to join
          </a>
        </div>
      </div>
      <div className="furtherBox">
        <div className="pic_furtherBox">

          <img className="pic4" src={Football23} alt="Girls playing football" />
          <div>
          <div className="card-heading">Latest news</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <a className="anchor_button" href="/blog">
            Find out more
          </a>
        </div>
        <div className="text_furtherBox">
          <div>
            <img src={Logo} alt="Football boot on a football" />
            <div className="card-heading">Our mission!</div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
