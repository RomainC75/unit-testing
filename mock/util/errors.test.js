import {describe, expect, it, expectTypeOf} from "vitest"
import { HttpError, ValidationError} from "./errors"


describe('class HttpError',()=>{
    it('should contain the provided status code, message and data',()=>{
        const statusCode = 1
        const testMessage = 'Test'
        const testData = {key:'test'}

        const httpError = new HttpError(statusCode, testMessage, testData)
        
        expect(httpError.statusCode).toBe(statusCode)
        expect(httpError.message).toBe(testMessage)
        expect(httpError.data).toBe(testData)
    });

    it('should contain undefined as data if no data is provided', ()=>{
        const statusCode = 1
        const testMessage = 'Test'

        const httpError = new HttpError(statusCode, testMessage)
        
        expect(httpError.statusCode).toBe(statusCode)
        expect(httpError.message).toBe(testMessage)
        expect(httpError.data).not.toBeDefined()
    })
})


describe('class ValidationError', ()=>{
    it('should contain the provided message', ()=>{
        const message = "message"

        const validationError = new ValidationError(message)

        expect(validationError.message).toBe(message)
    })

    it('should contain undefined if no message is provided', ()=>{
        const validationError = new ValidationError()

        expect(validationError.message).not.toBeDefined()
    })

    it("should be an object")
})