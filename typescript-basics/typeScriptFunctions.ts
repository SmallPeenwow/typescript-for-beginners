let sayHi = () => {
	console.log('hi, welcome');
};

// sayHi = 'hi'

let funcReturnString = (): string => {
	console.log('hi');
	return 'peen dev';
};

let multiple = (num: number) => {
	return num * 2;
};

let multiple2 = (num: number): number => {
	return num * 2;
};

let multiple3 = (num: number): void => {
	// return num * 2;
	// Do something but don't return
};

let sum = (num1: number, num2: number, another?: number) => {
	return num1 + num2;
};

sum(2, 3);
