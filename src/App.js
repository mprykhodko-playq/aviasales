import React from 'react';
import {Home} from "./pages/Home";
import {TicketsState} from "./context/TicketsState";

function App() {
  return (
      <TicketsState>
          <div className="container">
              <Home/>
          </div>
      </TicketsState>
  );
}

export default App;
