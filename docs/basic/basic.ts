/*
 * @Author: vyron
 * @Date: 2021-08-20 10:38:40
 * @LastEditTime: 2021-08-24 22:11:40
 * @LastEditors: vyron
 * @Description: TS 基础类型
 * @FilePath: /Typescript/docs/basic/index.ts
 * @link: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 */

/**
 *  string boolean number
 */
const string: string = "I'm string!";

const bol: boolean = false;

const num: number = 100;

/**
 * array
 */
const numArray: number[] = [1, 2, 3];

const strArray: string[] = ["I", "'", "am", "string"];

const tupleArray: [number, string] = [1, "string"];

/**
 * any
 *
 * 如果不指定类型,并且ts无法从上下文推断它的类型时.编译器默认为any类型
 * (any会禁止类型检查)
 *
 * 如果希望避免编译器这种情况,使用编译器配置`noImplicitAny:true`,
 *
 * 将任何隐式标记为any类型定义为类型错误
 *
 *
 */

const obj: any = { x: 1, y: 2, key: "value" };

obj.x = 100;
obj.value = 1000;
obj.fn();
const l: number = obj;

/**
 * function
 */
function warn(msg: string, isError: boolean = false): void {
	const fn = isError ? console.error : console.warn;
	fn(msg);
}
type WarnFunction = (msg: string) => void;

const warn2: WarnFunction = (msg: string) => console.warn(msg);

const fruits: string[] = ["apple", "orange"];

fruits.forEach(s => {
	warn(s.toLowerCase());
});

/**
 * object
 */
type Point = {
	x: number;
	y: number;
	ignore?: boolean;
};

function printScore(p: Point) {
	if (p.ignore) return;
	console.log(p.x, p.y);
}

printScore({ x: 1, y: 2 });
printScore({ x: 1, y: 2, ignore: true });

/**
 * Union type
 *
 */
type IdType = number | string | string[];

function printId(id: IdType) {
	const log = console.log;
	if (typeof id === "string") {
		log(id.toUpperCase());
	} else if (typeof id === "number") {
		log(id.toString().toUpperCase());
	} else if (Array.isArray(id)) {
		id.forEach(printId);
	} else {
		throw TypeError(`${id} is not IdType`);
	}
}

/**
 * Type alias
 */

type PointIgnore = {
	x: number;
	y: number;
	ignore: boolean;
};

/**
 * Interface
 */
interface PointInterface {
	x: number;
	y: number;
	toString: () => void;
}

/**
 * Type alias & Interface
 */

// extend interface
interface AnimalInterface {
	name: string;
}

interface BearInterface extends AnimalInterface {
	honey: boolean;
}

// extend type
type AnimalType = {
	name: string;
};

type BearType = AnimalType & {
	honey: boolean;
};

// add interface new field
interface WindowInterface {
	title: string;
}

interface WindowInterface {
	ts: boolean;
}

// add type new field not allowed

type WindowType = {
	title: string;
	ts: boolean;
};

/**
 * Type assert
 *
 */

const textElement = document.getElementById("span");
const canvasElement = <HTMLCanvasElement>document.getElementById("canvas");

const a = (a: string): HTMLElement => {
	// const textElement = a as unknown as HTMLElement;
	const textElement = a as any as HTMLElement;
	return textElement;
};

/**
 * null & undefined
 *
 * JavaScript 有两个原始值用于表示不存在或未初始化的值：null和undefined.
 * TypeScript 有两个对应的同名类型。
 *
 * strictNullChecks:off
 *  可以正常访问类型为null或undefined的变量,并且该变量可以分配给任何类型
 *
 * strictNullChecks:on
 *  当值为null或者undefined时,需要在使用之前进行检测
 *
 */

/**
 * 非空断言运算符 !
 *
 * 表示值既不是null也不是undefined
 *
 */

function toFixedString(x?: number | null): string {
	return x!.toFixed();
}

/**
 * enum
 *
 */

// enum with value
enum FilterType {
	SECOND = "second",
	NEW = "new",
	LAW = "law",
	RENT = "rent"
}

// enum with value to js
var FilterTypes;
(function (FilterType) {
	// @ts-ignore
	FilterType["SECOND"] = "second";
	// @ts-ignore
	FilterType["NEW"] = "new";
	// @ts-ignore
	FilterType["LAW"] = "law";
	// @ts-ignore
	FilterType["RENT"] = "rent";
})(FilterTypes || (FilterTypes = {}));

// enum without value
enum FilterTypeDemos {
	SECOND,
	NEW,
	LAW,
	RENT
}

var FilterTypeDemo;
(function (FilterTypeDemo) {
	// @ts-ignore
	FilterTypeDemo[(FilterTypeDemo["SECOND"] = 0)] = "SECOND";
	// @ts-ignore
	FilterTypeDemo[(FilterTypeDemo["NEW"] = 1)] = "NEW";
	// @ts-ignore
	FilterTypeDemo[(FilterTypeDemo["LAW"] = 2)] = "LAW";
	// @ts-ignore
	FilterTypeDemo[(FilterTypeDemo["RENT"] = 3)] = "RENT";
})(FilterTypeDemo || (FilterTypeDemo = {}));

/**
 * never 表示某种情况不可能存在
 *
 */
