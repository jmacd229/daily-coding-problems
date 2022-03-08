class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	print_interval() {
		process.stdout.write(`[${this.start}, ${this.end}]`);
	}
}

// https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG
const can_attend_all_appointments = function (intervals) {
	intervals = intervals.sort((a, b) => a.start - b.start);
	for (let i = 0; i < intervals.length - 1; i++) {
		if (intervals[i].end >= intervals[i + 1].start) {
			return false;
		}
	}
	return true;
};


console.log(`Can attend all appointments: ${can_attend_all_appointments([
	new Interval(1, 4),
	new Interval(2, 5),
	new Interval(7, 9),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
	new Interval(6, 7),
	new Interval(2, 4),
	new Interval(8, 12),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
	new Interval(4, 5),
	new Interval(2, 3),
	new Interval(3, 6),
])}`);
