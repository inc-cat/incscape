import { useState } from 'react';
import './Gallery.css';

export default function ImageEntry(props) {
  const [enlarge, setEnlarge] = useState(false);

  return (
    <div
      class={enlarge ? 'gallery-image selected' : 'gallery-image'}
      onClick={function () {
        setEnlarge(!enlarge);
      }}
    >
      <img src={props.image} />
      <br></br>
      <b>{props.title}</b>
      <br></br>
      <b>{props.artist}</b>
      <p>{props.children}</p>
    </div>
  );
}
