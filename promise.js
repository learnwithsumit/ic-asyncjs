const hasMeeting = true;

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

meeting
    .then(addToCalendar)
    .then((calender) => {
        console.log(calender);
    })
    .catch((err) => {
        console.log(`Error is: ${err.message}`);
    });
