class Job {
	constructor(start, end, cpu_load) {
		this.start = start;
		this.end = end;
		this.cpu_load = cpu_load;
	}
};

const find_max_cpu_load = function (jobs) {
	jobs = jobs.sort((a, b) => a.start - b.start);
	let maxCpu = 0;
	let currentCpu = 0;
	const processEnds = [];
	for (let i = 0; i < jobs.length; i++) {
		currentCpu += jobs[i].cpu_load;
		while (processEnds.length && jobs[i].start >= processEnds[processEnds.length - 1].end) {
			currentCpu -= processEnds.pop().cpu_load;
		}
		if (processEnds.length === 0 || processEnds[processEnds.length - 1].end <= jobs[i].end) {
			processEnds.push(jobs[i]);
		} else if (processEnds[processEnds.length - 1].end > jobs[i].end) {
			processEnds.unshift(jobs[i]);
		}
		maxCpu = Math.max(currentCpu, maxCpu);
	}
	return maxCpu;
};

/*
2,4,11
6,7,10
8,12,15
*/

// console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
// 	[new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`)
// console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
// 	[new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`)
console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
	[new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`)
