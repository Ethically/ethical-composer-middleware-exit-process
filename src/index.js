import { exit } from 'ethical-utility-process-exit'

const exitProcess = async (ctx, next, opts) => {
    await next()
    exit(opts.code)
}

const exitProcessInit = (opts = {}) => (
    async (ctx, next) => (
        await exitProcess(ctx, next, opts)
    )
)

export default exitProcessInit
