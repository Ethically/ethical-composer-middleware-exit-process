import exitProcessMiddleware from '../../src/index.js'

describe('exitProcessMiddleware()', () => {

    it('should exit process', async (done) => {
        const next = jasmine.createSpy('next')
        const processExit = process.exit
        process.exit = jasmine.createSpy('exit')
        await exitProcessMiddleware()({}, next)
        expect(process.exit).toHaveBeenCalledWith(0)
        expect(next).toHaveBeenCalled()
        process.exit = processExit
        done()
    })

    it('should exit process with code', async (done) => {
        const next = jasmine.createSpy('next')
        const config = { code: 1 }
        const processExit = process.exit
        process.exit = jasmine.createSpy('exit')
        await exitProcessMiddleware(config)({}, next)
        expect(process.exit).toHaveBeenCalledWith(1)
        expect(next).toHaveBeenCalled()
        process.exit = processExit
        done()
    })
})
