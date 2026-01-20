import { configure, processCLIArgs, run } from '@japa/runner'
import { expect } from '@japa/expect'
import { browserClient } from '@japa/browser-client'

processCLIArgs(process.argv.splice(2))
configure({
  suites: [
    {
      name: 'browser',
      timeout: 30 * 1000,
      files: ['tests/browser/**/*.spec.ts'],
    },
    {
      name: 'unit',
      files: ['tests/unit/**/*.spec.ts'],
    }
  ],
  plugins: [expect(), browserClient({ runInSuites: ['browser'] })],
})

run()