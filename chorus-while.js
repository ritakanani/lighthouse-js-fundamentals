// 1)

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
	console.log(chorus);
	repeat++;
}
console.log("until the sun comes up!");

// 2)

while (repeat < 10) {
	if (repeat === 5) {
		console.log("*change Key*");
	}
	console.log(chorus);
	repeat++;
}
console.log("until the sun comes up!");