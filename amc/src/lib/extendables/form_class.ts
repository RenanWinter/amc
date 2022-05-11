import { CoreClass } from "./core_class";

export class FormClass extends CoreClass {

    selectOnFocus($event: FocusEvent) {
        const inp: HTMLInputElement = $event.target as HTMLInputElement;
        inp.select();
    }
}