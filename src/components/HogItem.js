import React from "react";

function HogItem({ hog }) {
	return (
		<>
			<div class="card ui eight wide column">
				<div class="image">
					<img src={hog.image} alt={hog.name}/>
				</div>
				<div class="content">
					<div class="header">{hog.name}</div>
					<div class="meta">
						<p>{hog.specialty}</p>
					</div>
					<div class="description">{hog["highest medal achieved"]}</div>
				</div>
			</div>
		</>
	);
}

export default HogItem;
