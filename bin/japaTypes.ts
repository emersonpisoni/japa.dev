declare module '@japa/runner/core' {
  interface Test {
    jsonEqual(a: unknown, b: unknown): void
    greetings(name: string): void
  }
}