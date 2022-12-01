import {expect, it} from 'vitest'
import { generateToken, generateTokenPromise } from './async-example'

//async => use "done"
it("should generate a toke value", (done)=>{
    const testUserEmail = 'test@test.com'
    generateToken(testUserEmail, (err, token)=>{
        //good assertion
        expect(token).toBeDefined()
        done()
        //wrong assertion
        // try{
        //     expect(token).toBe(2)
        //     done()
        // }catch(err){
        //     done(err)
        // }
    })
})

it('should generate a toke value', ()=>{
    const testUserEmail = 'test@test.com'
    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined() 
})

it('should generate a token value', async()=>{
    const testUserEmail = 'test@test.com'
    const token = await generateTokenPromise(testUserEmail)
    expect(token).toBeDefined()
})