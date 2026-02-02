import '@japa/runner'

declare module '@japa/runner/core' {
  interface TestContext {
    jsonEqual(a: unknown, b: unknown): void
    greetings(name: string): void
  }
}
