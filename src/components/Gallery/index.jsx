import { useState } from 'react';
import './Gallery.css';
import shortlands from './Shortlands.png';
import ImageEntry from './ImageEntry';

export default function Gallery() {
  const [enlarge, setEnlarge] = useState(false);

  return (
    <div
      class={enlarge ? 'gallery-image selected' : 'gallery-image'}
      onClick={function () {
        setEnlarge(!enlarge);
      }}
    >
      <ImageEntry image={shortlands} title="Shortlands at 6PM" artist="Kite">
        <a href="https://twitter.com/Kiteincolours">Twitter</a>
      </ImageEntry>
    </div>
  );
}
