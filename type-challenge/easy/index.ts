/*
 * @Author: vyron
 * @Date: 2021-08-19 19:58:19
 * @LastEditTime: 2021-08-19 22:36:53
 * @LastEditors: vyron
 * @Description: type-challenge ease mode
 * @FilePath: /Typescript/type-challenge/easy/index.ts
 */

/*
01. 实现原生Pick

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = CustomPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
*/

type CustomPick<T, K extends keyof T> = {
	[P in K]: T[K];
};

interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = CustomPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
	title: "Clean room",
	completed: false
};
