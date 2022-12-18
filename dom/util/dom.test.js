import {it, expect, vi, beforeEach} from 'vitest'
import { showError } from './dom'

import {Window} from 'happy-dom'

// to load the html page
import fs from 'fs'
import path from 'path'
const htmlDocPath = path.join(process.cwd(), 'index.html')
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString()

// 
const window = new Window()
const document = window.document
// document.write(htmlDocumentContent)

vi.stubGlobal("document", document)

//to reset the document beforeEach test
beforeEach(()=>{
    document.body.innerHTML=''
    document.write(htmlDocumentContent)
})

it('should  add an error paragraph to the id="errors element', ()=>{
    showError('Test')
    const errorsEl = document.getElementById('errors')
    const errorParagraph = errorsEl.firstChild

    expect(errorParagraph).not.toBeNull()

})

it('should output the provided error message', ()=>{
    const testErrorMessage = "test message"
    
    showError(testErrorMessage)

    const errorsEl = document.getElementById('errors')
    const errorParagraph = errorsEl.firstChild
    expect(errorParagraph.innerText).toBe(testErrorMessage)
})