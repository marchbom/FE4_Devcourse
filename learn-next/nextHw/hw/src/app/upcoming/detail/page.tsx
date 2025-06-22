import Image from "next/image";

export default async function detailPage() {
  return (
    <>
      <section className="trailer">
        <iframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/iIxkC4ap8aU?si=FDVIRTdUuTZr3DgM"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* <iframe
          className="skeleton-list-item"
          width="900"
          height="506"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
      </section>
      <section className="detail">
        <div className="detail-wrap">
          <div className="detail-info">
            <h2 className="detail-title">Civil War</h2>
            <ul className="detail-features">
              <li className="features-item">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
              </li>
              <li className="features-item">코미디</li>
              <li className="features-item">1h 51m</li>
            </ul>
            <p className="detail-desc">
              Based on Edgar Allan Poe s classic bone-chilling tale, this bloody story will have you
              sleeping with the lights on for years to come.
            </p>
            <ul className="detail-maker">
              <li>
                <strong>Director</strong>:<span>Chirst Michels</span>
              </li>
              <li>
                <strong>Casting</strong>:
                <span>Tom Blyth•Rachel Zegler•Peter Dinklage•Jason Schwartzman•Hunter Schafer</span>
              </li>
              <li>
                <strong>Production</strong>:<span>Studio Dragon</span>
              </li>
            </ul>
          </div>
          <div className="detail-poster">
            <Image
              width="300"
              height="300"
              src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
              alt=""
            />
          </div>
        </div>
        {/* <div className="detail-wrap">
          <div className="detail-info">
            <h2 className="detail-title skeleton-list-item ui3"></h2>
            <ul className="detail-features skeleton-list-item ui4"></ul>
            <p className="skeleton-list-item ui4"></p>
            <ul className="detail-maker">
              <li className="skeleton-list-item ui5"></li>
              <li className="skeleton-list-item ui5"></li>
              <li className="skeleton-list-item ui5"></li>
            </ul>
          </div>
          <div className="detail-poster">
            <a href="#" className="skeleton-list-item ui0"></a>
          </div>
        </div> */}
      </section>
      <section className="movie detail-movie">
        <h3 className="movie-category">Relative Movies</h3>
        <h4 className="movie-subtext">비슷한 장르의 영화</h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <Image
                  width="900"
                  height="506"
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0">
              {" "}
            </a>
          </div>
          <div className="movie-list__item">
            <figure>
              <a href="#">
                <Image
                  width="900"
                  height="506"
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                />
              </a>
            </figure>
            <div className="movie-list__txt">
              <div className="progress-circle p50">
                <span>10%</span>
                <div className="left-half-clipper">
                  <div className="first50-bar"></div>
                  <div className="value-bar"></div>
                </div>
              </div>
              <strong className="movie-list__title">Civil War</strong>
              <span className="movie-list__release">2023.11.21</span>
            </div>
          </div>
          <div className="movie-list__item">
            <figure>
              <a href="#">
                <Image
                  width="900"
                  height="506"
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                />
              </a>
            </figure>
            <div className="movie-list__txt">
              <div className="progress-circle p50">
                <span>10%</span>
                <div className="left-half-clipper">
                  <div className="first50-bar"></div>
                  <div className="value-bar"></div>
                </div>
              </div>
              <strong className="movie-list__title">Civil War</strong>
              <span className="movie-list__release">2023.11.21</span>
            </div>
          </div>
          <div className="movie-list__item">
            <figure>
              <a href="#">
                <Image
                  width="900"
                  height="506"
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                />
              </a>
            </figure>
            <div className="movie-list__txt">
              <div className="progress-circle p50">
                <span>10%</span>
                <div className="left-half-clipper">
                  <div className="first50-bar"></div>
                  <div className="value-bar"></div>
                </div>
              </div>
              <strong className="movie-list__title">Civil War</strong>
              <span className="movie-list__release">2023.11.21</span>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>copyright @ sucoding Nexejs course</p>
      </footer>
    </>
  );
}
