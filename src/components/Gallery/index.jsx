import shortlands from './Shortlands.png';
import ImageEntry from './ImageEntry';

export default function Gallery() {
  return (
    <div>
      <ImageEntry image={shortlands} title="Shortlands at 6PM" artist="Kite">
        <a href="https://twitter.com/Kiteincolours">Twitter</a>
      </ImageEntry>

      <ImageEntry image={shortlands} title="Shortlands at 6PM" artist="Kite">
        <a href="https://twitter.com/Kiteincolours">Twitter</a>
      </ImageEntry>
    </div>
  );
}
