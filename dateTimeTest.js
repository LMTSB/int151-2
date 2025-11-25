const today = new Date(); //display current dateTime
const now = Date.now();
const now_2 = new Date(now);
const globalTime = new Date("2025-01-01T00:59:59.000z");
const localTime = new Date("2025-01-01T00:59:59.000z");

export const p = (...c) => {
    console.log(...c);
};

const startTime = new Date("2025-10-01T00:59:59.000");
const stopTime = new Date("2025-10-30T00:59:59.000");
const bookingTime = new Date("2025-01-02T12:01:00.000");


const compareTime  = () => {
    p(startTime.getTime());
    p(stopTime.getTime());
    p("---------------------------");
    let result = (bookingTime > stopTime || bookingTime < startTime) ? "date invalid" : "date valid" ;
    p(result);
    p((bookingTime > stopTime));
    p((bookingTime < startTime));
    p("--- end of compareTime funtion ---")
};


const invoke = () => {
    console.log(today);
    console.log("---------------------------");
    console.log(now);
    console.log("---------------------------");
    console.log(now_2); 
    console.log("---------------------------")
    console.log(globalTime);
    console.log("---------------------------");
    console.log(localTime);
    console.log("---------------------------");
    p("--- end of invoke function ---");
};

invoke();
compareTime();