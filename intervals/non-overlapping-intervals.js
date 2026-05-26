//Non - overlapping Intervals
//Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    let remove = 0;

    let prev = intervals[0]; 

    for(let i = 1; i < intervals.length; i++) {

        let current = intervals[i];

        // overlap
        if(current[0] < prev[1]) {

            remove++;

            // keep smaller ending interval
            if(current[1] < prev[1]) {
                prev = current;
            }
        }

        // no overlap
        else {
            prev = current;
        }
    }

    return remove;
};