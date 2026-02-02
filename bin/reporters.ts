

export function logReporter() {
  return function (runner, emitter) {
    let indentation = 2
    function getSpaces() {
      return new Array(indentation + 1).join(' ')
    }

    emitter.on('runner:start', () => {
      console.log(`START`)
    })

    emitter.on('runner:end', () => {
      console.log(`FINISH: completed in "${runner.getSummary().duration}ms"`)
    })

    emitter.on('suite:start', (payload) => {
      console.log(`${getSpaces()}SUITE: "${payload.name}"`)
      indentation += 2
    })

    emitter.on('suite:end', (payload) => {
      indentation -= 2
      console.log(`${getSpaces()}SUITE: "${payload.name}"`)
    })

    emitter.on('group:start', (payload) => {
      console.log(`${getSpaces()}GROUP: "${payload.title}"`)
      indentation += 2
    })

    emitter.on('group:end', (payload) => {
      indentation -= 2
      console.log(`${getSpaces()}GROUP: "${payload.title}"`)
    })

    emitter.on('test:end', (payload) => {
      console.log(`${getSpaces()}TEST: "${payload.title}" completed in "${payload.duration}ms"`)
    })
  }
}