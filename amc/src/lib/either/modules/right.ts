import { Either } from "./either";

export class Right<L, R> extends Either<L, R> {
  private _value: R;

  public get leftValue(): L {
    throw new Error("Right intance has no Left value");
  }
  public get rightValue(): R {
    let lastValue = this._value;

    if (this._map && lastValue) {
      lastValue = this._map(lastValue as any);
    }

    return lastValue;

  }
  get isLeft(): boolean {
    return false;
  }
  get isRight(): boolean {
    return true;
  }


  constructor(value: R) {
    super();
    this._value = value;

  }
}
