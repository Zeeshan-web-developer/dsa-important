/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let res = [];

  for (let interval of intervals) {

      if (interval[1] < newInterval[0]) { //if the current interval ends before the new interval starts, we can safely add it to the result as it does not overlap with the new interval.
                             
      res.push(interval);
    }

    else if (interval[0] > newInterval[1]) { //if the current interval starts after the new interval ends, we can safely add the new interval to the result as it does not overlap with the current interval. We also update the new interval to be the current interval for future comparisons.
      res.push(newInterval);
      newInterval = interval;
    }

    else {
      newInterval[0] = Math.min(newInterval[0], interval[0]); //if the current interval overlaps with the new interval, we need to merge them by updating the start and end of the new interval to be the minimum and maximum of the two intervals respectively.
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }

  res.push(newInterval);
  return res;
};

/**
 * Imagine This (Very Simple)

You have already booked time slots:

[1,2]   [3,5]   [6,7]   [8,10]

Now someone wants to book:

[4,8]
🔥 Your Job (as a manager)

👉 Insert [4,8] so that:

No overlaps remain
Everything stays sorted
🚶 Step-by-Step (No logic, just thinking)
👉 Look at [1,2]

Does it clash with [4,8]?

👉 No (it ends before 4)

✔ Keep it as-is

Result: [1,2]
👉 Look at [3,5]

Does it clash with [4,8]?

👉 YES 🔥

So what do you do in real life?

👉 You combine both bookings

[3,5] + [4,8] → [3,8]

Now your new interval becomes bigger:

new = [3,8]
👉 Look at [6,7]

Does it clash with [3,8]?

👉 YES again

👉 Merge again (but nothing changes)

new = [3,8]
👉 Look at [8,10]

Does it touch [3,8]?

👉 YES (8 touches 8)

👉 Merge:

new = [3,10]
🎯 Now you’re done scanning

So final result:

[1,2]   [3,10]
 */