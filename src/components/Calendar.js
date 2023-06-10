import Year from "react-live-clock";
import Month from "react-live-clock";
import Day from "react-live-clock";
import dateStyle from "../styles/calendar.module.css";

function Calendar () {
    return (
        <div className={dateStyle.main_box}>
            <span className={dateStyle.year}>
                <Year id="Year" format={"YYYY"} ticking={false} timezone={"KR/Pacific"}/>
            </span>
            <span className={dateStyle.month}>
                <Month format={"MMM"} ticking={false} timezone={"KR/Pacific"}/>
            </span>
            <span className={dateStyle.day}>
                <Day format={"DD"} ticking={false} timezone={"KR/Pacific"}/>
            </span>
        </div>
    );
}

export default Calendar;