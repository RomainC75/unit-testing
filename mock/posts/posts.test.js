import { it, describe, expect, vi, beforeEach} from 'vitest'

import {extractPostData} from './posts'


const testTitle = 'title'
const testContent = "content"
let testFormData = 


describe("extractPostData()",()=>{
    beforeEach(()=>{
        testFormData={
            title: testTitle,
            content: testContent,
            get(key){
                return this[key]
            }
        }
    })

    it('should extract title and content from the provided form data',()=>{
        

        const data =extractPostData(testFormData)

        expect(data.title).toBe("title")
        expect(data.content).toBe("content")
    })
})



// class TestFormData {
//     constructor(){
//         this.data={}
//     }
//     append(key,value){
//         this[key]=value
//     }
//     get(key){
//         return this[key]
//     }
// }

// vi.stubGlobal("FormData",TestFormData)

// describe("extractPostData()",()=>{
//     it('should return the data we provided through a FormData object',()=>{
//         const title = "title"
//         const content = "content"
//         const formData = new FormData()
//         formData.append("title", title)
//         formData.append("content", content)
    
//         const result = extractPostData(formData)
    
//         expect(formData.title).toBe("title")
//         expect(formData.content).toBe("content")
//     })
// })

