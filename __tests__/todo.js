/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, add, markAsComplete } = todoList();

describe("Test the TodoList", () => {
  test("add a new todo", () => {
    expect(all.length).toBe(0);
    add({
      title: "First Task",
      dueDate: new Date().toLocaleTimeString("en-CA"),
      completed : false,
    });
    expect(all.length).toBe(1);
  });

  test("mark todo as a completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
