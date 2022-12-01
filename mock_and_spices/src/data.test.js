import { describe, expect, it, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', ()=>{
    it('should execute logFn if provided', ()=>{
        const logger = vi.fn()
        generateReportData(logger)
        expect(logger).toBeCalled()
    })
})