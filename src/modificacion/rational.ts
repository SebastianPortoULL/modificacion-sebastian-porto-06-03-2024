import { Arithmeticable } from './arithmeticable';
/**
 * Clase que representa un número racional.
 * Implementa la interfaz Arithmeticable para realizar operaciones aritméticas.
 */
export class Rational implements Arithmeticable<Rational> {
	/**
	 * Crea una instancia de la clase Rational.
	 * @param num El numerador del número racional.
	 * @param denom El denominador del número racional.
	 */
	constructor(private num: number, private denom: number) {}

	/**
	 * Obtiene el numerador del número racional.
	 * @returns El numerador del número racional.
	 */
	getNum(): number { return this.num; }

	/**
	 * Obtiene el denominador del número racional.
	 * @returns El denominador del número racional.
	 */
	getDenom(): number { return this.denom; }

	/**
	 * Calcula el máximo común divisor entre dos números.
	 * @param num El primer número.
	 * @param denom El segundo número.
	 * @returns El máximo común divisor entre los dos números.
	 */
	mcd(num: number, denom: number): number {
		if (denom === 0) {
			return num;
		}
		return this.mcd(denom, num % denom);
	}

	/**
	 * Simplifica el número racional.
	 * @returns Un nuevo número racional simplificado.
	 */
	simplifyRational(): Rational {
		const [num, denom] = [this.num, this.denom];
		const divisor = this.mcd(num, denom);
		return new Rational(num / divisor, denom / divisor);
	}

	/**
	 * Realiza la operación de suma entre dos números racionales.
	 * @param rational El número racional a sumar.
	 * @returns El resultado de la suma como un nuevo número racional simplificado.
	 */
	add(rational: Rational): Rational {
		const [num1, denom1] = [this.num, this.denom];
		const [num2, denom2] = [rational.getNum(), rational.getDenom()];
		const num: number = this.num * denom2 + num2 * denom1;
		const denom: number = denom1 * denom2;
		return new Rational(num, denom).simplifyRational();
	}

	/**
	 * Realiza la operación de resta entre dos números racionales.
	 * @param rational El número racional a restar.
	 * @returns El resultado de la resta como un nuevo número racional simplificado.
	 */
	substract(rational: Rational): Rational {
		const [num1, denom1] = [this.num, this.denom];
		const [num2, denom2] = [rational.getNum(), rational.getDenom()];
		const num = num1 * denom2 - num2 * denom1;
		const denom = denom1 * denom2;
		return new Rational(num, denom).simplifyRational();
	}

	/**
	 * Realiza la operación de multiplicación entre dos números racionales.
	 * @param rational El número racional a multiplicar.
	 * @returns El resultado de la multiplicación como un nuevo número racional simplificado.
	 */
	multiply(rational: Rational): Rational {
		const [num1, denom1] = [this.num, this.denom];
		const [num2, denom2] = [rational.getNum(), rational.getDenom()];
		const num = num1 * num2;
		const denom = denom1 * denom2;
		return new Rational(num, denom).simplifyRational();
	}

	/**
	 * Realiza la operación de división entre dos números racionales.
	 * @param rational El número racional a dividir.
	 * @returns El resultado de la división como un nuevo número racional simplificado.
	 */
	divide(rational: Rational): Rational {
		const [num1, denom1] = [this.num, this.denom];
		const [num2, denom2] = [rational.getNum(), rational.getDenom()];
		const num = num1 * denom2;
		const denom = denom1 * num2;
		return new Rational(num, denom).simplifyRational();
	}
}