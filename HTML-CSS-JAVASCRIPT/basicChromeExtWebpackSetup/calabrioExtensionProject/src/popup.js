import './styles/popup.css'

import { format } from "date-fns";

let loadScheduleButton = document.querySelector(".load-schedule");

loadScheduleButton.addEventListener("click", loadSchedule);

function loadSchedule(event) {
    /* 
        Get today's date
        Pull all of the columns from the schedule
        See if the date from any of those columns matches today
        If it does, save that to variable and proceed
        If it does not, create a prompt/alert to say as much
    */

    console.log("yay!");

    //Get the schedule columns from Calabrio
    let dayScheduleColumns = document.querySelectorAll(`td[data-testid="mytime-weekview-day-schedule"]`);

    let todaySchedule = getCurrentDaySchedule(dayScheduleColumns);

    if(!todaySchedule) {
        console.error("Today is not found in the schedule");
        //TODO: Throw an alert in Chrome here
        return;
    } 
}

//Helpers

function getCurrentDaySchedule(scheduleColumns) {
    if(!scheduleColumns) {
        console.error("Schedule columns were not found");
        return undefined;
    }
    
    let today = new Date();

    //Format into Colabrio style date YYYY-MM-DD
    today = format(today, "yyyy-MM-dd");

    for(let i = 0; i < scheduleColumns.length; i++) {
        let columnDate = scheduleColumns[i].dataset.mytime-date;

        console.log(columnDate);
    }
}


/* 

    If we need content scripts. This goes in the manifest.json file

    "content_scripts": [
        {
            "matches": ["<all_urls>"],
            "js": ["content.js"]
        }
    ]

*/