const columns = document.querySelectorAll(".task-column");

let timeSinceLastLog = Date.now();

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

	return

    // Optional: Remove the line after a few seconds to keep the page clean
/*     setTimeout(() => {
        document.body.removeChild(line);
    }, 3000);  */

	/* 
		You can move 'line' and the creation of the div element outside of the function to only
		have one line at a time. You can remove the timeout to draw debug lines at the page 
		creation and not remove them
	*/
}

function drawLineInMiddleOfTask(taskElement) {
	let rect = taskElement.getBoundingClientRect();

	let x1 = rect.left;
	let y1 = rect.top + rect.height / 2;
	let x2 = rect.right;
	let y2 = y1;

	debugDrawLine(x1, y1, x2, y2);
}

//Set these all to be drop targets by preventing dragover events
columns.forEach((column) => {
	column.addEventListener("dragover", (event) => {
		//Test a customer type we will set later
		if(event.dataTransfer.types.includes("task")) {
			event.preventDefault(); //Make columns droppable if the data being transferred is a task
		}
	});
});

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
	task.addEventListener("dragstart", (event) => {
		task.id = "dragged-task";
		event.dataTransfer.effectAllowed = "move";
		//Custom type to identify a task drag
		event.dataTransfer.setData("task", "");
	});

	task.addEventListener("dragend", (event) => {
		task.removeAttribute("id");
	});

	// drawLineInMiddleOfTask(task);
});

columns.forEach( (column) => {
	column.addEventListener("drop", (event) => {
		event.preventDefault();

		const draggedTask = document.getElementById("dragged-task");
		draggedTask.remove();
		column.children[1].appendChild(draggedTask);
	});
});


function makePlaceholder(draggedTask) {
	const placeholder = document.createElement("li");
	placeholder.classList.add("placeholder");
	placeholder.style.height = `${draggedTask.offsetHeight}px`;
	return placeholder;
}

function movePlaceholder(event) {
	if(!event.dataTransfer.types.includes("task")) {
		return;
	}

	event.preventDefault(); 
	
	const draggedTask = document.getElementById("dragged-task"); //Must exist because the ID is added for all drag events with a "task" data entry
	const column = event.currentTarget;
	const tasks = column.children[1];
	const existingPlaceholder = column.querySelector(".placeholder");

	if(existingPlaceholder) {
		const placeholderRect = existingPlaceholder.getBoundingClientRect();

		//We dont't have to check the X portion of the client or bounding rect because this event can 
		//only take place in the context of the column that we are positioned over already (I think)
		//If we are still inside the current placeholder, return and do nothing
		if( 
			placeholderRect.top <= event.clientY && 
			placeholderRect.bottom >= event.clientY 
		) {
			return;
		  }
	}

	for(const task of tasks.children) {
		let rect = task.getBoundingClientRect();


		if(rect.bottom - (rect.height / 2) >= event.clientY) {

/* 			if(Date.now() - timeSinceLastLog >= 250) {
				console.log(rect.bottom + " Bottom of rect");
				console.log(rect.height / 2 + " Middle of rect");
				console.log(rect.bottom - (rect.height / 2) + " Middle of rect position" );
			
				timeSinceLastLog = Date.now();

				let x1 = rect.left;
				let y1 = rect.top + rect.height / 2;
				let x2 = rect.right;
				let y2 = y1;

				debugDrawLine(x1, y1, x2, y2);
			}
 */

			if(task === existingPlaceholder) return;
			existingPlaceholder?.remove(); //Only call remove if it exists

			if(task === draggedTask || task.previousElementSibling === draggedTask) return;

			tasks.insertBefore(
				existingPlaceholder ?? makePlaceholder(draggedTask), task
			);
			return;
		}
	}

	existingPlaceholder?.remove();
	if(tasks.lastElementChild === draggedTask) return;
	tasks.append(existingPlaceholder ?? makePlaceholder(draggedTask));
}

columns.forEach( (column) => {
	column.addEventListener("dragover", movePlaceholder);
	column.addEventListener("dragleave", (event) => {
		//If we are moving into a child element, we aren't actually leaving the column
		if(column.contains(event.relatedTarget)) return;

		const placeholder = column.querySelector(".placeholder");
		placeholder?.remove();
	});

	column.addEventListener("drop", (event) => {
		event.preventDefault();

		const draggedTask = document.getElementById("dragged-task");
		const placeholder = column.querySelector(".placeholder");
		if(!placeholder) return;
		draggedTask.remove();
		column.children[1].insertBefore(draggedTask, placeholder);
		placeholder.remove();
	});
});