import React from "react";



export default function FilterHog({showGreased, onShowGreased}) {

  function handleClick(e){
    onShowGreased(e.target.checked)
  }

	return (
		<div style={{ marginBottom: "10px" }}>
			<div class="ui checkbox">
				<input type="checkbox" name="public" onClick={handleClick} value={showGreased}/>
				<label>Show greased hogs only</label>
			</div>
		</div>
	);
}
