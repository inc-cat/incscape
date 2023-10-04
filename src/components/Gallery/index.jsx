import { useState } from 'react';
import './Gallery.css';
import shortlands from './Shortlands.png';

export default function Gallery() {
  return (
    <div class="gallery-image">
      <img src={shortlands} />
    </div>
  );
}
