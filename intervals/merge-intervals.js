//merge intervals

var merge = function (intervals) {
    if (intervals.length === 0) return []
    intervals.sort((a, b) => a[0] - b[0]) //sort the intervals based on the start time

    let result = [intervals[0]] //initialize the result with the first interval

    for (let i = 1; i < intervals.length; i++) {
        let lastInterval = result[result.length - 1] //get the last interval in the result
        let currentInterval = intervals[i] //get the current interval

        if (currentInterval[0] <= lastInterval[1]) { //if the current interval overlaps with the last interval, we need to merge them. To do this, we update the end of the last interval to be the maximum of the current interval's end and the last interval's end.
            lastInterval[1] = Math.max(lastInterval[1], currentInterval[1])
        } else { //if the current interval does not overlap with the last interval, we can safely add it to the result as it does not overlap with any of the previous intervals.
            result.push(currentInterval)
        }
    }

    return result
}