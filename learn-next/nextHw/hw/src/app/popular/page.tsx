import Image from "next/image";
import Link from "next/link";

export default function popular() {
  return (
    <>
      <nav className="navigator">
        <ul className="navigator-list">
          <li className="navigator-list__item">
            <Image
              width={200}
              height={200}
              src="/assets/icons/home.png"
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">홈</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              width={200}
              height={200}
              src="/assets/icons/live.png"
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">상영중</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              width={200}
              height={200}
              src="/assets/icons/video.png"
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">개봉예정</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              width={200}
              height={200}
              src="/assets/icons/search.png"
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">검색</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              width={200}
              height={200}
              src="/assets/icons/popluar.png"
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">인기콘텐츠</strong>
          </li>
        </ul>
      </nav>
      <section className="movie list">
        <h4 className="movie-subtext">인기있는 영화</h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0"></a>
          </div>
          <div className="movie-list__item">
            <Link href={"/popular/detail"}>
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
                <p className="movie-list__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore alias
                  quas porro voluptas debitis repudiandae similique odio corporis magnam ipsam ex
                  fugit eligendi autem, officiis, culpa dolorem laborum adipisci.
                </p>
                <span className="movie-list__release">2023.11.21 / 평점 7.3</span>
              </div>
            </Link>
          </div>
          <div className="movie-list__item">
            <Link href={"/popular/detail"}>
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
                <span className="movie-list__release">2023.11.21 / 평점 7.3</span>
              </div>
            </Link>
          </div>
          <div className="movie-list__item">
            <Link href={"/popular/detail"}>
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
                <p className="movie-list__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore alias
                  quas porro voluptas debitis repudiandae similique odio corporis magnam ipsam ex
                  fugit eligendi autem, officiis, culpa dolorem laborum adipisci.
                </p>
                <span className="movie-list__release">2023.11.21 / 평점 7.3</span>
              </div>
            </Link>
          </div>
          <div className="movie-list__item">
            <Link href={"/popular/detail"}>
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
                <p className="movie-list__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore alias
                  quas porro voluptas debitis repudiandae similique odio corporis magnam ipsam ex
                  fugit eligendi autem, officiis, culpa dolorem laborum adipisci.
                </p>
                <span className="movie-list__release">2023.11.21 / 평점 7.3</span>
              </div>
            </Link>
          </div>
          <div className="movie-list__item">
            <Link href={"/popular/detail"}>
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
                <p className="movie-list__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore alias
                  quas porro voluptas debitis repudiandae similique odio corporis magnam ipsam ex
                  fugit eligendi autem, officiis, culpa dolorem laborum adipisci.
                </p>
                <span className="movie-list__release">2023.11.21 / 평점 7.3</span>
              </div>
            </Link>
          </div>
          <div className="movie-list__item">
            <Link href={"/popular/detail"}>
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
                <p className="movie-list__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore alias
                  quas porro voluptas debitis repudiandae similique odio corporis magnam ipsam ex
                  fugit eligendi autem, officiis, culpa dolorem laborum adipisci.
                </p>
                <span className="movie-list__release">2023.11.21 / 평점 7.3</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
