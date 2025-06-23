"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MovieList() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          380: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          740: {
            slidesPerView: 4,
          },
          980: {
            slidesPerView: 5,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="movie-list__item">
            <Link href="/detail/1">
              <figure>
                <Image
                  fill
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
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="movie-list__item">
            <Link href="/detail/1">
              <figure>
                <Image
                  fill
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
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="movie-list__item">
            <Link href="/detail/1">
              <figure>
                <Image
                  fill
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
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="movie-list__item">
            <Link href="/detail/1">
              <figure>
                <Image
                  fill
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
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="movie-list__item">
            <Link href="/detail/1">
              <figure>
                <Image
                  fill
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
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
