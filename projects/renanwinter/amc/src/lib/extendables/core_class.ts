import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { Subscription } from "rxjs";


@Component({
  template: ''
})
export abstract class CoreClass implements OnDestroy, OnInit, OnChanges {
  private subs: Subscription[] = [];


  ngOnInit(): void {

    this.onInit();
  }

  ngOnDestroy() {
    this.clearAllSubscriptions();
    this.onDestroy();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges(changes);
  }

  clearAllSubscriptions() {
    this.subs.forEach(s => s.unsubscribe());
  }

  set subscribe(action: Subscription) {
    this.subs.push(action);
  }

  onInit() { }
  onChanges(changes: SimpleChanges) { }
  onDestroy() { }
}
