//meeting  rooms 2
//Given an array of meeting time intervals where intervals[i] = [starti, endi], 
// find the minimum number of conference rooms required.



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
       if(start[i] < end[j]) { //another meeting has started before the previous one ended
        currentRooms++; //curretly meeting happening, so we need a new room
        maxRooms = Math.max(maxRooms, currentRooms);
        i++;
    } else {  //the meeting has ended, so we can free up a room
        currentRooms--;
        j++;
    }
    }

   return maxRooms;
}



//example
const intervals = [[0, 30], [5, 10], [15, 20]];
console.log(meetingrooms2(intervals)); // Output: 2

//example 2
const intervals2 = [[7, 10], [2, 4]];
console.log(meetingrooms2(intervals2)); // Output: 1