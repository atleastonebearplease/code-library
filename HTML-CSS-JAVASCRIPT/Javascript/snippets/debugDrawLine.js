/* 
    let line = document.createElement("div");
*/

function debugDrawLine(x1, y1, x2, y2) {
    const line = document.createElement('div');
    // Use fixed positioning to place it relative to the viewport, overlaying content
    line.style.position = 'fixed'; 
    line.style.backgroundColor = 'red';
    line.style.zIndex = '9999'; // Ensure it is on top of other elements

    // Calculate length, angle, and position
    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

    // Set line dimensions and position
    line.style.width = `${length}px`;
    line.style.height = '2px'; // Line thickness
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;

    // Rotate the line around its starting point
    line.style.transformOrigin = 'top left';
    line.style.transform = `rotate(${angle}deg)`;

    document.body.appendChild(line);

    // Optional: Remove the line after a few seconds to keep the page clean
    setTimeout(() => {
        document.body.removeChild(line);
    }, 3000); 

	/* 
		You can move 'line' and the creation of the div element outside of the function to only
		have one line at a time. You can remove the timeout to draw debug lines at the page 
		creation and not remove them
	*/
}