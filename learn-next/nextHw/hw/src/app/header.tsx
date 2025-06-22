import Link from "next/link";

export default function header() {
  return (
    <>
      <header className="header">
        <Link href={"/"}>
          <h1 className="header__logo">Bomang</h1>
        </Link>
        <ul className="header__navi">
          <li>
            <Link href={"/"}>홈</Link>
          </li>
          <li>
            <a href="#">마테고리</a>
          </li>
          <li>
            <a href="#">Movie</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
        </ul>
        <div className="header-search">
          <input type="text" className="header-search__input" placeholder="제목으로 찾아보세요." />
          <span className="material-symbols-outlined icon"> search </span>
        </div>
      </header>
    </>
  );
}
