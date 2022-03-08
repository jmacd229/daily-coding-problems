class Meeting {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}
};

// https://www.educative.io/courses/grokking-the-coding-interview/xVoBRZz7RwP 
const min_meeting_rooms = function (meetings) {
	meetings = meetings.sort((a, b) => a.start - b.start);
	let maxRooms = 1;
	const meetingEnds = [];
	for (let i = 0; i < meetings.length - 1; i++) {
		// No overlap
		if (meetings[i].end <= meetings[i + 1].start) {
			continue;
		} else {
			// If the next meeting we're comparing, starts after our currently running meetings ends, we need to remove them from the array
			while(meetings[i + 1].start >= meetingEnds[meetingEnds.length - 1]){
				meetingEnds.pop();
			}
			// Create a sorted array of our meetings endings so that we can keep track of what meetings are still going on
			if (meetingEnds.length === 0 || meetingEnds[meetingEnds.length - 1] <= meetings[i].end) {
				meetingEnds.push(meetings[i].end);
			} else if (meetingEnds[meetingEnds.length - 1] > meetings[i].end) {
				meetingEnds.unshift(meetings[i].end);
			}
			maxRooms = Math.max(meetingEnds.length + 1,maxRooms);
		}
	}
	return maxRooms;
};

/*
Meetings: [[2,3], [2,4], [3,5], [4,5]]
Output: 2
Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].
*/


console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
	[new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
	[new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
	[new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
	[new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
	[new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
