export default function Album(props) {
  return (
    <div class="album-container">
      <div>
        <h1>{props.title}</h1>
      </div>
      <div>
        <h2>{props.releaseDate}</h2>
      </div>
      <div>
        <a href={props.url}>
          <img
            src={props.coverArt}
            alt={`${props.title} (${props.releaseDate})`}
            title={`${props.title} (${props.releaseDate})`}
          />
        </a>
        <div>{props.children}</div>
        {props.credits}
      </div>
    </div>
  );
}
