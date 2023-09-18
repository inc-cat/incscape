import wirfos from './albumCovers/wirfos.jpg';

export default function Archive() {
  return (
    <div class="flex-container">
      <div>
        <h1>Watching it rain from outer space</h1>
      </div>
      <div>
        <h2>September 2023</h2>
      </div>
      <div>
        <a href="https://anwarlouis.bandcamp.com/album/watching-it-rain-from-outer-space">
          <img
            src={wirfos}
            alt="Watching it rain from outer space (September 2023)"
          />
        </a>
        <div>
          <p>Album text here!</p>
        </div>
      </div>
    </div>
  );
}
