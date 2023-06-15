let variable = 'hello';

variable = 'hi';

let age = 18;

let ageWithType: number = 22;

// ageWithType = "eighteen"
ageWithType = 18;

let testString: string;
testString = 'Hello';

let testBoolean: boolean;
testBoolean = false;

let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = '10';
// testStringOrNumber = [];

// Array

let names = ['john', 'jane', 'tom'];

// names.push(3);
names.push('mike');

let numbers = [11, 22, 35];

// numbers.push(true)
numbers.push(92);

let testStringArray: string[];

// testStringArray = [1, 2, 3];
testStringArray = ['one', 'two', 'three'];

let testNumberArray: number[];

// testNumberArray = [true, 'hi', 23];
testNumberArray = [12, 55, 23];

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = [1, 'two', 3];

// Objects

let user = {
	username: 'john',
	age: 22,
	isAdmin: false,
};

user.username = 'jane';
// user.age = 'eighteen'
user.age = 29;
// user.isAdmin = 'no';
user.isAdmin = true;

// user.phone = '+123432323'

let userObj: {
	username: string;
	age: number;
	isAdmin: boolean;
};

userObj = {
	username: 'john',
	age: 23,
	isAdmin: true,
	// phone: '+1234567',
};

let userObj2: {
	username: string;
	age: number;
	isAdmin: boolean;
	phone?: string;
};

userObj2 = {
	username: 'jane',
	age: 43,
	isAdmin: false,
	phone: '+1234567',
};

// Any

// let testAny;
let testAny: any;

testAny = 12;
testAny = 'Hello';
testAny = true;
testAny = [true];
testAny = {};

let testAnyArray: any[];

testAnyArray = [1, 'two', false, []];
