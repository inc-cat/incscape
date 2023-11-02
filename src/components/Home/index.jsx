import './Home.css';

function KnowledgeGrid(props) {
  return <div class="grid-container">{props.children}</div>;
}

function Knowledge(props) {
  let { logo, label } = props;

  return (
    <div class="grid-item flex-thing">
      <div className="logo">{logo}</div>
      <div className="label">{label}</div>
    </div>
  );
}

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
      <KnowledgeGrid>
        <Knowledge logo="FL Studio Logo" label="FL Studio" />
        <Knowledge logo="Pro Tools Logo" label="Pro Tools" />
        <Knowledge logo="Reason Logo" label="Reason" />
        <Knowledge logo="Cubase Logo" label="Cubase" />
      </KnowledgeGrid>

      <h1>Programming</h1>

      <KnowledgeGrid>
        <Knowledge logo="Python Logo" label="Python" />
        <Knowledge logo="JavaScript Logo" label="JavaScript" />
        <Knowledge logo="React Logo" label="React" />
        <Knowledge logo="HTML Logo" label="HTML" />
      </KnowledgeGrid>
    </div>
  );
}
