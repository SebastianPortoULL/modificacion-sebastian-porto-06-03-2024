import 'mocha';
import { expect } from 'chai';
import { print } from '../src/prueba'
import { Rational } from '../src/modificacion/rational';
import { Complex } from '../src/modificacion/complex';
import { Adapter } from '../src/modificacion/adapter'

describe('Práctica 6 Tests', () => {
	let complex1 : Complex;
	let complex2: Complex;
	let rational1: Rational;
	let rational2: Rational;
  let adapter1: Adapter;
  let adapter2: Adapter;

	beforeEach(() => {
    complex1 = new Complex(3, 2);
		complex2 = new Complex(1, -2);
		rational1 = new Rational(4, 5);
		rational2 = new Rational(2, 3);
    adapter1 = new Adapter(rational1);
    adapter2 = new Adapter(rational2);
	});

  // Tests de la clase Rational
	it('debería devolver el numerador del racional', () => {
		expect(rational1.getNum()).to.be.equal(4);
    expect(rational2.getNum()).to.be.equal(2);
	});
  it('debería devolver el denominador del racional', () => {
		expect(rational1.getDenom()).to.be.equal(5);
    expect(rational2.getDenom()).to.be.equal(3);
	});
  it('debería devolver la suma de ambos racionales', () => {
		expect(rational1.add(rational2)).to.be.deep.equal(new Rational(22, 15));
	});
  it('debería devolver la resta de ambos racionales', () => {
		expect(rational1.substract(rational2)).to.be.deep.equal(new Rational(2, 15));
	});
  it('debería devolver la multiplicación de ambos racionales', () => {
		expect(rational1.multiply(rational2)).to.be.deep.equal(new Rational(8, 15));
	});
  it('debería devolver la división de ambos racionales', () => {
		expect(rational1.divide(rational2)).to.be.deep.equal(new Rational(6, 5));
	});

  // Tests de la clase Complex
  it('debería devolver el número real del complejo', () => {
		expect(complex1.getReal()).to.be.equal(3);
    expect(complex2.getReal()).to.be.equal(1);
	});
  it('debería devolver el número real del complejo', () => {
		expect(complex1.getImaginary()).to.be.equal(2);
    expect(complex2.getImaginary()).to.be.equal(-2);
	});
  it('debería devolver la suma de ambos complejos', () => {
		expect(complex1.add(complex2)).to.be.deep.equal(new Complex(4, 0));
	});
  it('debería devolver la resta de ambos complejos', () => {
		expect(complex1.substract(complex2)).to.be.deep.equal(new Complex(2, 4));
	});
  it('debería devolver la multiplicación de ambos complejos', () => {
		expect(complex1.multiply(complex2)).to.be.deep.equal(new Complex(7, -4));
	});
  it('debería devolver la división de ambos complejos', () => {
		expect(complex1.divide(complex2)).to.be.deep.equal(new Complex(-0.2, 1.6));
	});

  // Tests de la clase Adapter
  it('debería devolver el número real del complejo', () => {
		expect(adapter1.getReal()).to.be.equal(4/5);
    expect(adapter2.getReal()).to.be.equal(2/3);
	});
  it('debería devolver el número real del complejo', () => {
		expect(adapter1.getImaginary()).to.be.equal(0);
    expect(adapter2.getImaginary()).to.be.equal(0);
	});
	it('Suma entre un complejo y un racional', () => {
		expect(adapter1.add(complex1)).to.be.deep.equal(new Complex(4/5 + 3, 2));
		expect(adapter2.add(complex1)).to.be.deep.equal(new Complex(2/3 + 3, 2));

		expect(adapter1.add(complex2)).to.be.deep.equal(new Complex(4/5 + 1, -2));
		expect(adapter2.add(complex2)).to.be.deep.equal(new Complex(2/3 + 1, -2));
	});
  it('Resta entre un complejo y un racional', () => {
    expect(adapter1.substract(complex1)).to.be.deep.equal(new Complex(4/5 - 3, -2));
		expect(adapter2.substract(complex1)).to.be.deep.equal(new Complex(2/3 - 3, -2));

		expect(adapter1.substract(complex2)).to.be.deep.equal(new Complex(4/5 - 1, 2));
		expect(adapter2.substract(complex2)).to.be.deep.equal(new Complex(2/3 - 1, 2));
	});
  it('Multiplicación entre un complejo y un racional', () => {
		expect(adapter1.multiply(complex1)).to.be.deep.equal(new Complex(2.4000000000000004, 8/5)); // 12/5 + 8/5i
		expect(adapter2.multiply(complex1)).to.be.deep.equal(new Complex(2, 4/3)); 

		expect(adapter1.multiply(complex2)).to.be.deep.equal(new Complex(4/5, -8/5)); 
		expect(adapter2.multiply(complex2)).to.be.deep.equal(new Complex(2/3, -4/3));
	});
  it('División entre un complejo y un racional', () => {
		expect(adapter1.divide(complex1)).to.be.deep.equal(new Complex(4/5 * 3 / 13, -4/5 * 2 / 13));
		expect(adapter2.divide(complex1)).to.be.deep.equal(new Complex(2/13, -4/39));

		expect(adapter1.divide(complex2)).to.be.deep.equal(new Complex((4/5) / 5, (4/5 * 2) / 5));
		expect(adapter2.divide(complex2)).to.be.deep.equal(new Complex((2/3) / 5, 2/3 * 2 / 5));
	});
	
});