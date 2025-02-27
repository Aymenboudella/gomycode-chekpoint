import "./app.css";

export default function app() {
  return (
    <>
      <div className="flex flex-col-reverse w-48 gap-10 mt-40 ms-40">
        <button className="btn btn-info">info</button>
        <button className="btn btn-success">success</button>
        <button className="btn btn-error">error</button>
        <button className="btn btn-warning">warning</button>
      </div>
    </>
  );
}
