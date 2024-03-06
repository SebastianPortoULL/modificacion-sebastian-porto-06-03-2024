import { Rational } from "./rational";
import { Complex } from "./complex";

export class Adapter extends Complex {
	constructor(private service : Rational) {
		super(service.getNum() / service.getDenom(), 0);
	}
}