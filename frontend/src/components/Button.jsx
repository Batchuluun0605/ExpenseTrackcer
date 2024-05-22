export default function Button(props) {
  return (
    <div>
      <button className="btn btn-primary w-full rounded-3xl">
        {props.name}
      </button>
    </div>
  );
}
