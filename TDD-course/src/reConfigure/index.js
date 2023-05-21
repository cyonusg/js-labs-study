export default (from, to) => {
  if ((!from || !to)) throw new Error()
  if (typeof from !== 'string' || typeof to !== 'string') throw new Error('the paramters must be string')

  if (from.length !== to.length) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const letterFrom = from[i]
    const letterTo = to[i]

    const storedLetter = transformations[letterFrom]
    if (storedLetter && storedLetter !== letterTo) return false

    transformations[letterFrom] = letterTo
  }

  return true
}
