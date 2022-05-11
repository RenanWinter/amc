import { Either } from "./either";

export class Left<L, R> extends Either<L, R> {
  private _value!: L;

  public get leftValue(): L {
    return this._value;
  }

  public get rightValue(): R {
    throw new Error("Left intance has no right value");
  }

  get isLeft(): boolean {
    return true;
  }
  get isRight(): boolean {
    return false;
  }

  constructor(value: L) {
    super();
    this._value = value;
  }
}
