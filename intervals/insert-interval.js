
//insert interval
//https://leetcode.com/problems/insert-interval/

var insert = function (intervals, newInterval) {
    let result = [];
    for(let interval of intervals){
        if (interval[1] < newInterval[0]) { //if the current interval ends before the new interval starts, we can safely add it to the result as it does not overlap with the new interval.
                                            //example: if we have an interval [1, 2] and a new interval [3, 4], since 2 < 3, we can add [1, 2] to the result without any modifications.
            result.push(interval)
        }
        else if(interval[0]>newInterval[1]){ //if the current interval starts after the new interval ends, it means there is no overlap between the current interval and the new interval. In this case, we can safely add the new interval to the result before adding the current interval.
                                            //example: if we have an interval [5, 6] and a new interval [3, 4], since 5 > 4, we can add [3, 4] to the result before adding [5, 6].
            result.push(newInterval)
            newInterval=interval
        }
        else{
            newInterval[0]=Math.min(newInterval[0],interval[0]) //if the current interval overlaps with the new interval, we need to merge them. To do this, we update the start of the new interval to be the minimum of the current interval's start and the new interval's start, and we update the end of the new interval to be the maximum of the current interval's end and the new interval's end.
            newInterval[1]=Math.max(newInterval[1],interval[1])
        }
    }
    result.push(newInterval)
    return result
}