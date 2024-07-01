import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Weather APP</p>
      </header>
      <footer>
        Coded by {}{" "}
        <a href="https://github.com/SophieLMD" target="_blank" rel="noreferrer">
          Sophie Davies
        </a>
        , open sourced on {}{" "}
        <a
          href="https://github.com/SophieLMD/weather-application-react"
          target="_blank"
          rel="noreferrer"
        >
          Github {}
        </a>{" "}
        and website hosted on {}{" "}
        <a
          href="https://weather-application-react-slmd.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
