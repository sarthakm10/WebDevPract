let computer = { cpu: 12 };
let lenovo = {
	screen: "HD",
	__proto__: computer,
};
let tomHardware = {};
console.log(`lenevo`, computer.__proto__);

let genericCar = {
	tyres: 4,
};
let tesla = {
	driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla`, tesla);
console.log('tesla', genericCar);
// better way to write it is like this
console.log(`tesla`, Object.getPrototypeOf(tesla));
