/*
 * @Author: vyron
 * @Date: 2021-08-24 19:49:23
 * @LastEditTime: 2021-08-24 22:03:14
 * @LastEditors: vyron
 * @Description: Narrowing
 * @FilePath: /Typescript/docs/basic/typeof.ts
 * @link: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */

/**
 * 类型守卫,缩小类型范围,让 TypeScript 更方便确定类型
 *
 * typeof
 *
 * Truthy, Falsy
 *  0 "" false null undefined NaN 0n
 *
 * Equality
 *  === !== == !=
 *
 * in operator
 *  if(key in object){}
 *
 * Instanceof
 *  foo Instanceof Function
 *
 * Control flow analysis 流程控制分析
 *  function example(){
 *      let x: string | number | boolean;
 *      if(Math.random() < 0.5){
 *         x = "small"; // string
 *      }else {
 *         x = 100; // number
 *      }
 *      return x; // string | number;
 * }
 *
 * Type predicates 类型断言
 *  function isCat(animal: Dog | Cat | Pig): animal is Cat {
 *      return animal.isCat === true;
 *  }
 *
 */

function padLeft(padding: string | number, input: string): string {
	// typeof guard
	if (typeof padding === "number") {
		return new Array(padding + 1).join(" ") + input;
	}
	return padding + input;
}
