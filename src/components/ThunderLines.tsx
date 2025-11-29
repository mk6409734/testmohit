import "../thunder.css"
const ThunderLines = () => {
  return (
    <>
      <article className="card">
        <div className="media-object">
          <div>
            <h2 className="media-object__title">
              Your frontend doesn't <br /> have to be a mess.
            </h2>
            <a
              href="https://bejamas.com/get-in-touch"
              target="_blank"
              className="media-object__button"
            >
              Get Your Audit
            </a>
          </div>
        </div>
        <div className="mt-15 h-px w-[500px] bg-transparent line">
          <div className="h-full w-[500px] effect"></div>
        </div>
      </article>
    </>
  );
}
export default ThunderLines