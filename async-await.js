const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Tech meeting",
            location: "Google Meet",
            time: "10:00 AM",
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting is already scheduled!"));
    }
});

const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} is scheduled in ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calendar);
};

// meeting
//     .then(addToCalendar)
//     .then((calender) => {
//         console.log(calender);
//     })
//     .catch((err) => {
//         console.log(`Error is: ${err.message}`);
//     });

async function myMeeting() {
    try {
        const meetingDetails = await meeting; // wait
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    } catch (err) {
        console.log(err);
    }
}

myMeeting();

console.log("hello world");
