import React from "react";
import HogItem from "./HogItem";

function HogList({ hogs }) {
	return (
		<div className="ui grid container">
			<div className="ui link cards">
				{hogs.map((hog) => (
					<HogItem key={hog.name} hog={hog} />
				))}
			</div>
		</div>
	);
}

export default HogList;
