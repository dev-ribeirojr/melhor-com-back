export function isValidCPF(cpf: string): boolean {
  if (typeof cpf !== 'string') return false
  cpf = cpf.replace(/[^\d]+/g, '')
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
  const cpfCharacters = cpf.split('')
  const validator = cpfCharacters
    .filter((digit, index, array) => index >= array.length - 2 && digit)
    .map((el) => +el)
  const toValidate = (pop: number) =>
    cpfCharacters
      .filter((digit, index, array) => index < array.length - pop && digit)
      .map((el) => +el)
  const rest = (count: number, pop: number) =>
    ((toValidate(pop).reduce((soma, el, i) => soma + el * (count - i), 0) *
      10) %
      11) %
    10
  return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])
}
