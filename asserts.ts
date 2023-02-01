import { AssertionError } from "./deps.ts";

export function assertNotThrows(fn: () => unknown, msg?: string) {
    let doesThrow = false;
    try {
        fn();
    } catch (error) {
        doesThrow = true;
    }
    if (doesThrow) {
        if (!msg) {
            msg = `Expected function to not  throw `;
        }
        throw new AssertionError(msg);
    }
}