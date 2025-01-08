import React from "react";
import "./MusicSection.css";
const musicData = [
  {
    id: 1,
    image: "https://cdn-images.dzcdn.net/images/cover/555be3736048d8370077be6e4cb6a369/1900x1900-000000-80-0-0.jpg",
    title: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/M/MV5BMmMzYjYxM2MtYmQ5Zi00ZDk0LThlMDgtOGIwMWI4MTVhNTA1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Levitating",
    artist: "Dua Lipa",
  },
  {
    id: 3,
    image: "https://estacionk2.com/wp-content/uploads/2021/07/rs_1200x1200-210207174748-1200-the-weeknd-super-bowl-2021.ct_.jpg",
    title: "Save Your Tears",
    artist: "The Weeknd",
  },
  {
    id: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Olivia_Rodrigo_%40_Theatre_at_Ace_Hotel_10_09_2023_%2853423418091%29.jpg/1200px-Olivia_Rodrigo_%40_Theatre_at_Ace_Hotel_10_09_2023_%2853423418091%29.jpg",
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
  },
  {
    id: 5,
    image: "https://ew.com/thmb/Wmw7dePwGQ_K6lkXrLnp4jVA358=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lil-Nas-X_2-3b0e027515e74670aff918fec707660f.jpg",
    title: "Montero (Call Me By Your Name)",
    artist: "Lil Nas X",
  },
  {
    id: 6,
    image: "https://media.gettyimages.com/id/482913236/photo/new-york-ny-harry-styles-of-one-direction-performs-during-abcs-good-morning-america-at-rumsey.jpg?s=612x612&w=gi&k=20&c=J2vrWx_82P8Loz45mu1ARM-vCHca_EjONyeER1cJ8UA=",
    title: "Watermelon Sugar",
    artist: "Harry Styles",
  },
];

function MusicSection() {
  return (
    <section id="music" className="music-section">
      <h2>Featured Music</h2>
      <div className="music-grid">
        {musicData.map((music) => (
          <div key={music.id} className="music-card">
            <img src={music.image} alt={music.title} className="music-image" />
            <h3>{music.title}</h3>
            <p>{music.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MusicSection;
