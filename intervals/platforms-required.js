//minimum number of platforms required for a railway station so that no train waits

let interval = [[900, 910], [940, 1200], [950, 1120], [1100, 1130], [1500, 1900], [1800, 2000]]

function minPlatforms(intervals){
    let start = intervals.map(i => i[0]).sort((a, b) => a - b)
    let end = intervals.map(i => i[1]).sort((a, b) => a - b)

    let platform = 0
    let maxPlatform = 0
    let i = 0
    let j = 0

    while(i < start.length && j < end.length){
        if(start[i] < end[j]){ //this means train is arriving before the earliest train departs, so we need a platform
            platform++
            maxPlatform = Math.max(maxPlatform, platform)
            i++
        }else{ //this means the earliest train departs before the next train arrives, so we can free up a platform
            platform--
            j++
        }
    }

    return maxPlatform
}