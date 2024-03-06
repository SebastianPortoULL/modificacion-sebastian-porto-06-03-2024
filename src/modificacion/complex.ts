import { Arithmeticable } from './arithmeticable';

/**
 * Clase que representa un número complejo.
 */
export class Complex implements Arithmeticable<Complex> {
	constructor(private real: number, private imaginary: number) {}

	/**
	 * Obtiene la parte real del número complejo.
	 * @returns La parte real del número complejo.
	 */
	getReal(): number { return this.real; }

	/**
	 * Obtiene la parte imaginaria del número complejo.
	 * @returns La parte imaginaria del número complejo.
	 */
	getImaginary(): number { return this.imaginary; }

	/**
	 * Realiza la suma de dos números complejos.
	 * @param complex El número complejo a sumar.
	 * @returns El resultado de la suma.
	 */
	add(complex: Complex) : Complex {
		return new Complex(this.real + complex.getReal(), this.imaginary + complex.getImaginary());
	}

	/**
	 * Realiza la resta de dos números complejos.
	 * @param complex El número complejo a restar.
	 * @returns El resultado de la resta.
	 */
	substract(complex: Complex) : Complex {
		return new Complex(this.real - complex.getReal(), this.imaginary - complex.getImaginary());
	}

	/**
	 * Realiza la multiplicación de dos números complejos.
	 * @param complex El número complejo a multiplicar.
	 * @returns El resultado de la multiplicación.
	 */
	multiply(complex: Complex) : Complex {
		const real: number = ((this.real) * (complex.getReal())) - ((this.imaginary) * (complex.getImaginary()));
		const imaginary: number = ((this.real) * (complex.imaginary)) + ((this.imaginary) * (complex.getReal()));
		return new Complex(real, imaginary);
	}

	/**
	 * Realiza la división de dos números complejos.
	 * @param complex El número complejo a dividir.
	 * @returns El resultado de la división.
	 */
	divide(complex: Complex) : Complex {
		const real: number = (((this.real) * (complex.getReal())) + ((this.imaginary) * (complex.getImaginary()))) / 
												 (((complex.getReal()) * (complex.getReal())) + ((complex.getImaginary()) * (complex.getImaginary())));
		const imaginary: number = ((this.imaginary * (complex.getReal())) - ((this.real) * (complex.getImaginary()))) / 
															(((complex.getReal()) * (complex.getReal())) + ((complex.getImaginary()) * (complex.getImaginary())));
		return new Complex(real, imaginary);
	}
}