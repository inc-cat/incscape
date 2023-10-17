import shortlands from './Shortlands.png';
import utopia from './Uptopia.png';
import future from './future.png';
import ImageEntry from './ImageEntry';

export default function Gallery() {
  return (
    <div class="flex-container">
      <ImageEntry image={shortlands} title="Shortlands at 6PM" artist="Kite">
        <a href="https://twitter.com/Kiteincolours">Twitter</a>
      </ImageEntry>

      <ImageEntry image={utopia} title="Utopia on rails" artist="ChayMyatny">
        <a href="https://twitter.com/ChayMyatny">Twitter</a>
      </ImageEntry>

      <ImageEntry image={future} title="Future Zone" artist="iloveui">
        <a href="https://iloveui.com/">Website</a> |{' '}
        <a href="https://twitter.com/weloveui">Twitter</a>
      </ImageEntry>
    </div>
  );
}
