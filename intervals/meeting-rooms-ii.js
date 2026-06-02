//meeting  rooms 2
//Given an array of meeting time intervals where intervals[i] = [starti, endi], find the minimum number of conference rooms required.

function meetingrooms2(intervals) {
    if (intervals.length === 0) return 0;

   intervals.sort((a, b) => a[0] - b[0]);

    let rooms = [intervals[0][1]]; // store end times

    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];

        rooms.sort((a, b) => a - b);

        // earliest room becomes free
        if (start >= rooms[0]) {
            rooms.shift(); // reuse room
        }

        rooms.push(intervals[i][1]);
    }

    return rooms.length;
}

//solution 2
function meetingrooms2(intervals) {
    if (intervals.length === 0) return 0;

    let start = intervals.map(i => i[0]).sort((a, b) => a - b);
    let end = intervals.map(i => i[1]).sort((a, b) => a - b);

    let rooms = 0;
    let endIndex = 0;

    for (let i = 0; i < start.length; i++) {
        if (start[i] < end[endIndex]) {
            rooms++; // need a new room
        } else {
            endIndex++; // free up a room
        }
    }

    return rooms;
}