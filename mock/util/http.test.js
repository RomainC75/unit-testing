import {it, describe, vi, expect} from 'vitest'
import { HttpError } from './errors'
import { sendDataRequest } from './http'


const testResponseData = {testKey: 'testData'}

// dummy function to mock the "fetch" function
const testFetch = vi.fn((url, options)=>{
    return new Promise((resolve, reject)=>{
        if(typeof options.body !== 'string'){
            // return prevent the rest of the code from executing
            return reject('not a string')
        }
        const testResponse = {
            ok:true,
            json(){
                return new Promise((resolve, reject)=>{
                    resolve(testResponseData)
                })
            }
        }
        resolve(testResponse)
    })
})

// replace "fetch" function by the "testFetch" for all tests in the file
vi.stubGlobal("fetch", testFetch)

it('should return any available response data', ()=>{
    const testData = {key: 'test'}

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData)
})


// verify conversion to JSon before sending it
it('should convert the provided data to JSON before sending the request',async ()=>{
    const testData = {key: 'test'}
    let errorMessage

    try{
        await expect(sendDataRequest(testData))
    }catch(error){
        errorMessage = error
    }
    expect(errorMessage).not.toBe("not a string")
})

// when the fetch function get an error code :
// the "testFetch" function return ok:true everytime,
// so we can mock another function just "once" like this
it('should throw an http error in case of non-ok responses',()=>{
    testFetch.mockImplementationOnce(((url, options)=>{
        return new Promise( (resolve, reject)=>{
            const testResponse = {
                ok:false,
                json(){
                    return new Promise((resolve, reject)=>{
                        resolve(testResponseData)
                    })
                }
            }
            resolve(testResponse)
        })
    }))
    const testData = {key: 'test'}
    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError)
})
