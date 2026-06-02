//meeting rooms 1
//Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

function meetingrooms1(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        let prev = intervals[i - 1];
        let current = intervals[i];

        if (current[0] < prev[1]) {
            return false;
        }
    }

    return true;
}