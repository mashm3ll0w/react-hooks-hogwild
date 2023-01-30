import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {

  const [showGreased, setShowGreased] = useState(false)

  function onShowGreased(isGreased){
    setShowGreased(isGreased)
  }

  const greasedHogs = hogs.filter(hog => hog.greased)

  const hogsToDisplay = showGreased ? greasedHogs : hogs

	return (
		<div className="App">
			<Nav />
      <HogList hogs={hogsToDisplay} showGreased={showGreased} onShowGreased={onShowGreased}/>
		</div>
	);
}

export default App;
