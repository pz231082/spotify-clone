import React from "react";
import "./Features.css";

function Features() {
  return (
    <section id="features" className="features">
      <div className="feature-card">
        <h2>Listen Everywhere</h2>
        <p>On your phone, computer, tablet, and more.</p>
      </div>
      <div className="feature-card">
        <h2>Discover New Music</h2>
        <p>Personalized playlists and recommendations.</p>
      </div>
      <div className="feature-card">
        <h2>Offline Listening</h2>
        <p>Save your music for offline listening.</p>
      </div>
    </section>
  );
}

export default Features;
