/*
https://leetcode.com/problems/employee-free-time/
https://www.educative.io/courses/grokking-the-coding-interview/YQykDmBnvB0
*/

class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	get_interval() {
		return "[" + this.start + ", " + this.end + "]";
	}
};

const find_employee_free_time = function (schedule) {
	let result = [];
	// Flatten the schedules and sort them by starting times
	schedule = schedule.flatMap(sched => sched).sort((a, b) => a.start - b.start);
	for (let i = 0; i < schedule.length - 1; i++) {
		if (schedule[i].end < schedule[i + 1].start) {
			// Push any gaps we find within the schedules
			result.push(new Interval(schedule[i].end, schedule[i + 1].start));
		}
	}
	return result;
};


input = [[new Interval(1, 3), new Interval(5, 6)], [
	new Interval(2, 3), new Interval(6, 8)]];
intervals = find_employee_free_time(input)
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++)
	result += intervals[i].get_interval();
console.log(result);


input = [[new Interval(1, 3), new Interval(9, 12)], [
	new Interval(2, 4)], [new Interval(6, 8)]];
intervals = find_employee_free_time(input)
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++)
	result += intervals[i].get_interval();
console.log(result);

input = [[new Interval(1, 3)], [
	new Interval(2, 4)], [new Interval(3, 5), new Interval(7, 9)]];
intervals = find_employee_free_time(input)
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++)
	result += intervals[i].get_interval();
console.log(result);
