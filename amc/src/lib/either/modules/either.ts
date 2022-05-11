export type RightMapper<T = any, R = any> = (value: T) => R;
export type RightPiper<T = any, R = any> = (value: T) => R;

export abstract class Either<L, R>{
  abstract get isLeft(): boolean;
  abstract get isRight(): boolean;
  public abstract get leftValue(): L;
  public abstract get rightValue(): R;


  protected _map?: RightMapper<L, R>;


  map<T = any>(fn: RightMapper<T, R>): Either<L, T> {
    this._map = fn as any;
    return this as any;
  }


  fold(left: (value: L) => void, right: (value: R) => void) {
    if (this.isLeft && left) {
      left(this.leftValue);
    }

    if (this.isRight && right) {
      right(this.rightValue);
    }
  };

  result(): L | R {
    if (this.isLeft) {
      return this.leftValue;
    }

    if (this.isRight) {
      return this.rightValue;
    }

    throw new Error('unexpected error when returning a result of an Either class');
  }

};


