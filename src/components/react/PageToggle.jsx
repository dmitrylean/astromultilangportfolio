import React, { useState } from "react";
import WorksSection from "./WorksSection.jsx";
import MusicProjects from "./MusicProjects.jsx";
import AlbumCard from "./AlbumCard.jsx";
import "./PageToggle.css";

export default function PageToggle() {
  const [showAlt, setShowAlt] = useState(false);

  return (
    <div className="container">
      {/* Toggle */}
      <div className="fx-block">
        <div className="toggle">
          <input
            type="checkbox"
            id="toggles"
            checked={showAlt}
            onChange={() => setShowAlt(!showAlt)}
          />
          <label
            htmlFor="toggles"
            data-unchecked="Works"
            data-checked="Music+Other"
          ></label>
        </div>
      </div>

      {/* Switch content */}
      <div className="content">
        {!showAlt ? (
          <WorksSection />
        ) : (
          <>
            <div class="albums-section">
              <div class="container">
                <h2 class="album-title">Albums</h2>
                <div class="albums-gallery">
                  <div class="discography-grid">
                    {albumsData.map((album, index) => (
                      <AlbumCard album={album} client:visible />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <MusicProjects client:visible />
          </>
        )}
      </div>
    </div>
  );
}
