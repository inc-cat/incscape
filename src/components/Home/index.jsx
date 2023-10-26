import './Home.css';

export default function Home() {
  return (
    <div>
      <div style={{ height: '100%' }}>
        <div class="hero-image">
          <div class="hero-text">
            <h1>Anwar Louis</h1>
            <p>I'd like to think I am somewhat versatile.</p>
          </div>
        </div>
      </div>
      <h1>Music</h1>
      <div class="grid-container">
        <div class="grid-item">FL Studio Logo</div>
        <div class="grid-item">Pro Tools Logo</div>
        <div class="grid-item">FL Studio</div>
        <div class="grid-item">Pro Tools</div>
        <div class="grid-item">Reason Logo</div>
        <div class="grid-item">Cubase Logo</div>
        <div class="grid-item">Reason</div>
        <div class="grid-item">Cubase</div>
      </div>

      <h1>Programming</h1>
      <div class="grid-container">
        <div class="grid-item">Python Logo</div>
        <div class="grid-item">JavaScript Logo</div>
        <div class="grid-item">Python</div>
        <div class="grid-item">JavaScript</div>
        <div class="grid-item">React Logo</div>
        <div class="grid-item">HTML Logo</div>
        <div class="grid-item">React</div>
        <div class="grid-item">HTML</div>
      </div>
    </div>
  );
}
