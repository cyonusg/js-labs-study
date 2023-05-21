import { describe, expect, it } from 'vitest'
import canReconfigre from '../src/reConfigure'
/*
Problem:
Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

Reglas remplazo: mantener orden, no asignar el mismo caracter dos letras dinstintas, pero si asi mismo
*/

describe('canReconfigre', () => {
  it('should throw it from/to parameter is missing', () => {
    expect(() => canReconfigre()).toThrow()
  })

  it('should throw it from/to is not string type', () => {
    expect(() => canReconfigre(1, true)).toThrow('the paramters must be string')
  })

  it('should throw it parameters have length is mayor to three', () => {
    expect(canReconfigre('WNBA', 'XXx')).toBe(false)
  })

  it('should throw it parameters have repeat characters', () => {
    expect(canReconfigre('XBOX', 'XXBO')).toBe(false)
  })

  it('should throw it parameters have repeat characters', () => {
    expect(canReconfigre('BAL', 'LIB')).toBe(true)
  })
})
