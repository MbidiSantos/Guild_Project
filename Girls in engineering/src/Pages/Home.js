// import React from "react";

// const /Home = () => {
//   return (
//    <div className="home">
//      <h1>Welcome to Engineering for Girls</h1>
//      <p>A safe space to learn, grow, and excel in engineering.</p>
     
//    </div>
//  );
// };

// export default Home;

import React from "react";
import "./index.css"; 

const Home = () => {
return (
<div className="home">
<header className="hero">
<h1>Welcome to SheTech👷‍♀️ </h1>
<p>A safe space for girls to learn, grow, and excel in engineering.</p>
</header>
<section className="about">
    <h2>Why We Exist</h2>
    <p>
      Engineering has long been a male-dominated field, and many girls face 
      challenges and stereotypes that discourage them from pursuing STEM careers. 
      We are here to change that narrative.
    </p>
  </section>

  <section className="features">
    <h2>What We Offer</h2>
    <div className="feature-list">
      <div className="feature">
        <h3>💡 Engineering Resources</h3>
        <p>Access to learning materials, scholarships, and mentorship programs.</p>
      </div>
      <div className="feature">
        <h3>👩‍💻 Community Support</h3>
        <p>Connect with other aspiring female engineers, share experiences, and get help.</p>
      </div>
      <div className="feature">
        <h3>🚀 Success Stories</h3>
        <p>Read about inspiring women who have paved the way in engineering.</p>
      </div>
    </div>
  </section>

  <section className="cta">
    <h2>Join Us Today</h2>
    <p>Be a part of a supportive community that believes in your potential.</p>
    <a href="/community" className="btn">Join the Community</a>
  </section>
</div> 
);
};

export default Home;