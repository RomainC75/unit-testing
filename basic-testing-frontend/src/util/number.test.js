import { it, expect } from 'vitest'
import { transformToNumber } from "./numbers"

it('should transform a string number to a number of type number', ()=>{
    const nb = "3"

    const result = transformToNumber(nb)

    expect(result).toBeTypeOf('number')
})

it('should transform a string number to a number of type number', ()=>{
    const nb = "3"

    const result = transformToNumber(nb)

    expect(result).toBe(3)
})

// equal AND
it('should yield Nan for a non-transformable value', ()=>{
    const input = "string"
    const input2 = {}

    const result = transformToNumber(input)
    const result2 = transformToNumber(input2)

    expect(result).toBeNaN()
    expect(result2).toBeNaN()
})

