import { useState } from 'react';
import './Gallery.css';
import shortlands from './Shortlands.png';
import ImageEntry from './ImageEntry';

export default function Gallery() {
  return (
    <div class="gallery-image">
      <ImageEntry image={shortlands} title="Shortlands at 6PM" artist="Kite">
        <a href="http://www.twitter.com/">Twitter</a>
      </ImageEntry>
    </div>
  );
}
