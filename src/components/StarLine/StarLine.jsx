import style from "./StarLine.module.css";
export default function StarLine() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-3">
        <div className={`${style.line} me-2`}></div>
        <i className="fa-solid fa-star"></i>
        <div className={`${style.line} ms-2`}></div>
      </div>
    </>
  );
}
