import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Specs } from '../models/specs';
import { WowClass } from '../models/wow-class';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  get activeClass(): WowClass {
    return <WowClass>this._activeClass;
  }

  set activeClass(value: WowClass) {
    this.activeClassObservable.next(value);
    this._activeClass = value;
  }
  get wowClassList(): WowClass[] {
    return this._wowClassList;
  }

  set wowClassList(value: WowClass[]) {
    this._wowClassList = value;
  }
  private _wowClassList: WowClass[] = []
  private _activeClass: WowClass | null = null;
  activeClassObservable = new BehaviorSubject<WowClass | null>(null);


  constructor() {
    this.generateClassList();
  }

  private generateClassList() {
    this._wowClassList.push(new WowClass('Death Knight', [Specs.BloodDk, Specs.FrostDk, Specs.UnholyDk], 'https://wow.zamimg.com/images/wow/icons/large/class_deathknight.jpg'));
    // this._wowClassList.push(new WowClass('Druid', [Specs.BalanceDruid, Specs.FeralDruid, Specs.GuardianDruid, Specs.RestoDruid], 'https://wow.zamimg.com/images/wow/icons/large/class_druid.jpg'));
  }

}
