const Cards: React.FC = () => {
    return (
      <div className="cards-container">
        <a href="#">
          <div className="card">
              <div className="wrapper">
                  <img src="src/assets/dark_rider-cover.jpg" className="cover-image" />
              </div>
              <img src="src/assets/dark_rider-title.png" className="title" />
              <img src="src/assets/dark_rider-character.webp" className="character" />
          </div>
        </a>
        <a href="#">
            <div className="card">
                <div className="wrapper">
                    <img src="src/assets/force_mage-cover.jpg" className="cover-image" />
                </div>
                <img src="src/assets/force_mage-title.png" className="title" />
                <img src="src/assets/force_mage-character.webp" className="character" />
            </div>
        </a>
      </div>
    );
  };