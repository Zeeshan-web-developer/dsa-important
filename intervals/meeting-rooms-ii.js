//meeting  rooms 2
//Given an array of meeting time intervals where intervals[i] = [starti, endi], find the minimum number of conference rooms required.



//solution 2
function meetingrooms2(intervals) {
    if (intervals.length === 0) return 0;

    let start = intervals.map(i => i[0]).sort((a, b) => a - b);
    let end = intervals.map(i => i[1]).sort((a, b) => a - b);

    let currentRooms = 0;
    let maxRooms = 0;
    
    let i = 0;
    let j = 0;
    while (i < start.length) {
       if(start[i] < end[j]) {
        currentRooms++;
        maxRooms = Math.max(maxRooms, currentRooms);
        i++;
    } else {
        currentRooms--;
        j++;
    }
    }

   return maxRooms;
}