import FOOTER from "./components/footer";
import QRCOMPONENT from "./components/qr-container";
import "./index.css";

function App() {
  return (
      <div className="container">
        <main className="main">
          <QRCOMPONENT />
          <h1 className="header">Improve your front-end skills by building projects</h1>
          <p className="description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </main>
         <footer className="footer">
        <FOOTER />
      </footer>
      </div>
  );
}

export default App;
