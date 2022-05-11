import { Observable, take } from "rxjs";

export const promiseFromObservable = <T = any>(observable: Observable<T>): Promise<T> => {
    return new Promise(resolve => {
        observable.pipe(take(1)).subscribe(v => resolve(v));
    });
}

export const promiseDelayed = (delayInMilliSeconds: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delayInMilliSeconds);
    });
}

export const promiseExecuteAndWait = async <T = any>(promise: Promise<T>, delayInMilliSeconds: number): Promise<T> => {
    const promises = [
        promise,
        promiseDelayed(delayInMilliSeconds)
    ];

    const [promise1, deleyed] = await Promise.all(promises);
    return promise1 as T;
}

