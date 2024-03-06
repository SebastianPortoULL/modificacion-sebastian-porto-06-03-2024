/**
 * Interfaz genérica para operaciones aritméticas.
 * @template T El tipo de dato utilizado para las operaciones aritméticas.
 */
export interface Arithmeticable<T> {
  add(param: T) : T;
  substract(param: T) : T;
  multiply(param: T) : T;
  divide(param: T) : T;
}