export default function ImageEntry(props) {
  return (
    <div>
      <img src={props.image} />
      <br></br>
      <b>{props.title}</b>
      <br></br>
      <b>{props.artist}</b>
      <p>{props.children}</p>
    </div>
  );
}
