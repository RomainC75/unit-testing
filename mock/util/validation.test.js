import { describe, expect, it } from "vitest";

import {validateNotEmpty} from './validation'

it('it should throw an Error if an empty string is provided as a value',()=>{
    const testEmptyText = ""
    const testBlankTest = "   "

    const validationEmptyFn = () => validateNotEmpty(testEmptyText)
    const validationBlankFn = () => validateNotEmpty(testBlankTest)
    

    expect(validationEmptyFn).toThrowError()
    expect(validationBlankFn).toThrowError()
})

it('should throw an error with the provided error message', ()=>{
    const testText = ""
    const testErrorMessage = "error message"

    const validationFn = () => validateNotEmpty(testText, testErrorMessage)
    
    expect(validationFn).toThrow(/error message/)
    expect(validationFn).toThrow(testErrorMessage)
})