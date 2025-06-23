export default function DetailTrailer() {
  return (
    <>
      <section className="trailer">
        <iframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/iIxkC4ap8aU?si=FDVIRTdUuTZr3DgM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: 0 }}
        ></iframe>
        {/* <iframe
          className="skeleton-list-item"
          width="900"
          height="506"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: 0 }}
        ></iframe> */}
      </section>
    </>
  );
}
