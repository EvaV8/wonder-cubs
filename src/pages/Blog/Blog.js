import React from "react";
import "../../styles/Home.css";
import football5 from "../../assets/football5.jpg";
import football6 from "../../assets/football6.jpg";
import Football1 from "../../assets/football1.png";


const Blog = () => {
  return (
    <div className="BlogBanner">
      <div className="buttonBox">
        <div className="button1">
          <img className="pic1" src={Football1} alt="football1.png" />
          <div className="content_align">
          <div className="card-heading">Our New Members</div>
            <p>
              Pellentesque pellentesque placerat leo vitae luctus. Nam sodales
              lobortis est, a tristique tortor lobortis at. Nulla sit amet nibh
              sed elit tempus tempor eget at felis. Sed mollis, risus a egestas
              hendrerit, justo felis ultricies nibh, non maximus massa nunc sed
              enim. Phasellus eu ligula sagittis, venenatis orci ut, rutrum
              sapien. Sed commodo vehicula sollicitudin. Fusce varius lectus mi,
              a ultrices massa venenatis sed. Maecenas et lorem egestas, gravida
              tellus nec, lacinia est.
            </p>
          </div>
        </div>

        <div className="button2">
          <img className="pic2" src={football5} alt="football5.jpg" />
          <div className="content_align">
            <div className="card-heading">Wonder Club Wins Again!</div>
            <p>
              Pellentesque pellentesque placerat leo vitae luctus. Nam sodales
              lobortis est, a tristique tortor lobortis at. Nulla sit amet nibh
              sed elit tempus tempor eget at felis. Sed mollis, risus a egestas
              hendrerit, justo felis ultricies nibh, non maximus massa nunc sed
              enim. Phasellus eu ligula sagittis, venenatis orci ut, rutrum
              sapien. Sed commodo vehicula sollicitudin. Fusce varius lectus mi,
              a ultrices massa venenatis sed. Maecenas et lorem egestas, gravida
              tellus nec, lacinia est.
            </p>
          </div>
        </div>
        <div className="button3">
          <img className="pic3" src={football6} alt="football6.jpg" />
          <div className="content_align">
          <div className="card-heading">Summer Training Programme with Mentors</div>
            <p>
              Pellentesque pellentesque placerat leo vitae luctus. Nam sodales
              lobortis est, a tristique tortor lobortis at. Nulla sit amet nibh
              sed elit tempus tempor eget at felis. Sed mollis, risus a egestas
              hendrerit, justo felis ultricies nibh, non maximus massa nunc sed
              enim. Phasellus eu ligula sagittis, venenatis orci ut, rutrum
              sapien. Sed commodo vehicula sollicitudin. Fusce varius lectus mi,
              a ultrices massa venenatis sed. Maecenas et lorem egestas, gravida
              tellus nec, lacinia est. Cras in dignissim felis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
