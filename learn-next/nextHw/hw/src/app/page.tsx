import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="navigator">
        <ul className="navigator-list">
          <li className="navigator-list__item">
            <Image
              src="/assets/icons/home.png"
              width={20}
              height={20}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">메인</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/assets/icons/live.png"
              width={20}
              height={20}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">상영중</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/assets/icons/popluar.png"
              width={20}
              height={20}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">인기작</strong>
          </li>

          <li className="navigator-list__item">
            <Image
              src="/assets/icons/video.png"
              width={20}
              height={20}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">개봉예정</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/assets/icons/search.png"
              width={20}
              height={20}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">검색</strong>
          </li>
        </ul>
      </nav>
      <section className="search-box">
        <div className="search-input">
          <div className="search-wrap">
            <button>x</button>
            <input type="text" placeholder="영화 제목을 입력하세요" autoComplete="off" />
            <span className="material-symbols-outlined icon"> search </span>
          </div>
        </div>
      </section>
      <section className="release">
        <div
          className="release-item"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500//t5zCBSB5xMDKcDqe91qahCOUYVV.jpg")`,
          }}
        >
          <div className="release__text">
            <strong className="release__category">NEW RELEASE</strong>
            <h2 className="release__title">Soviet : The Cold War</h2>
            <p className="release__desc">
              Her senses grow sharper, her thinking clearer, and for the first time in her life she
              feels herself fully in control. By the age of sixteen, she s competing for the U.S.
            </p>
            <Link className="release__btn" href="upcoming/detail">
              자세히보기
            </Link>
          </div>
        </div>
      </section>
      <section className="movie">
        <h3 className="movie-category">Now Movies</h3>
        <h4 className="movie-subtext">
          상영중인 영화 <Link href="/nowplaying">더보기</Link>
        </h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0">
              {" "}
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//gqkJSh8pqMdiWwPfRNJGQkuivDi.jpg"
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
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
        </div>
      </section>
      <section className="movie">
        <h3 className="movie-category">Now Popular</h3>
        <h4 className="movie-subtext">
          인기있는 영화 <Link href="/popular">더보기</Link>
        </h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0">
              {" "}
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//gqkJSh8pqMdiWwPfRNJGQkuivDi.jpg"
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
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
        </div>
      </section>
      <section className="movie">
        <h3 className="movie-category">UP Comming</h3>
        <h4 className="movie-subtext">
          개봉예정 영화 <Link href="/upcoming">더보기</Link>
        </h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0">
              {" "}
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//gqkJSh8pqMdiWwPfRNJGQkuivDi.jpg"
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
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
        </div>
      </section>
      <section className="movie">
        <h3 className="movie-category">TOP Rated</h3>
        <h4 className="movie-subtext">
          높은 평점을 받은 영화 <Link href="/toprated">더보기</Link>
        </h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0">
              {" "}
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//gqkJSh8pqMdiWwPfRNJGQkuivDi.jpg"
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
            <a href="#">
              <figure>
                <Image
                  width={200}
                  height={200}
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
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
        </div>
      </section>
      <footer className="footer">
        <p>copyright @ sucoding Next.js course</p>
      </footer>
    </>
  );
}
