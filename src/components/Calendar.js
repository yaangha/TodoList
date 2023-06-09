import Year from "react-live-clock";
import Month from "react-live-clock";
import Day from "react-live-clock";

function Calendar () {
    return (
        <div>
            <Year id="Year" format={"YYYY"} ticking={false} timezone={"KR/Pacific"}/>
            <Month format={"MMM"} ticking={false} timezone={"KR/Pacific"}/>
            <Day format={"DD"} ticking={false} timezone={"KR/Pacific"}/>
        </div>
    );
}

export default Calendar;