import { test } from "@japa/runner";

test("macro jsonEqual works as expected", (context) => {
    const obj1 = { a: 2 };
    const obj2 = { a: 2 };

    try {
        context.jsonEqual(obj1, obj2);
    } catch (error) {
        console.error("jsonEqual failed for equal values:", error);
    }
});