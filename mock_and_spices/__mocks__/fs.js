import { vi } from "vitest";

// own implementation of the module
export const promises = {
    writeFile: vi.fn((path, data)=>{
        return new promises((resolve, reject)=>{
            resolve()
        })
    })
}