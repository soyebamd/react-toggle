import { useState } from "react";

import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

import { data } from "./data/data.js";
import Accordion from "./component/accordion/index";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const renderHtml = data.map(({ id, title, content }) => {
    return (
      <Accordion.item key={id}>
        <Accordion.title>{title}</Accordion.title>
        <Accordion.content>{content}</Accordion.content>
      </Accordion.item>
    );
  });

  return (
    <>
      <main className="app">
        {/* ================= HERO ================= */}
        <section id="center">
          <div className="tech-orbit">
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>

            <div className="hero">
              <img
                src={heroImg}
                className="base"
                width="170"
                height="179"
                alt="Robot"
              />

              <img src={reactLogo} className="framework" alt="React logo" />

              <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>
          </div>

          <div className="container">
            <div className="system-status">
              <span className="status-dot"></span>
              SYSTEM ONLINE
            </div>

            <h1>
              REACT
              <span> TOGGLE</span>
            </h1>

            <p className="hero-subtitle">BUILD • LEARN • CREATE • INNOVATE</p>

            <div className="hero-line">
              <span></span>
              <i></i>
              <span></span>
            </div>
          </div>
        </section>

        {/* ================= ACCORDION ================= */}

        <section className="section" id="reusable-accordion">
          <div className="panel-header">
            <div>
              <span className="panel-label">COMPONENT SYSTEM</span>

              <h2>Interactive Components</h2>
            </div>

            <div className="panel-id">#001</div>
          </div>

          <div className="accordion-frame">
            <div className="scan-line"></div>

            <Accordion>{renderHtml}</Accordion>
          </div>

          <div className="panel-footer">
            <span>REACT ENGINE</span>
            <span>●</span>
            <span>READY</span>
          </div>
        </section>

        {/* ================= TICK ================= */}

        <div className="ticks"></div>

        {/* ================= SYSTEM INFO ================= */}

        <section className="system-grid">
          <div className="system-card">
            <span className="card-number">01</span>

            <div className="card-icon">{"</>"}</div>

            <h3>REUSABLE</h3>

            <p>
              Build modular React components that can be reused across your
              applications.
            </p>
          </div>

          <div className="system-card">
            <span className="card-number">02</span>

            <div className="card-icon">{"{}"}</div>

            <h3>COMPOSABLE</h3>

            <p>
              Combine small components into powerful interactive interfaces.
            </p>
          </div>

          <div className="system-card">
            <span className="card-number">03</span>

            <div className="card-icon">{"⚙"}</div>

            <h3>STATEFUL</h3>

            <p>Manage application state and create dynamic user experiences.</p>
          </div>
        </section>

        {/* ================= COUNTER ================= */}

        <section className="counter-module">
          <div className="counter-header">
            <span>TEST MODULE</span>
            <span>STATUS: ACTIVE</span>
          </div>

          <div className="counter-content">
            <span className="counter-label">REACT STATE</span>

            <strong>{count}</strong>

            <button
              className="neon-button"
              onClick={() => setCount((count) => count + 1)}
            >
              EXECUTE +
            </button>
          </div>
        </section>

        <div id="spacer"></div>
      </main>
    </>
  );
}

export default App;
