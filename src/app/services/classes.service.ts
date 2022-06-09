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
    this._wowClassList.push(new WowClass('Death Knight', [Specs.BloodDk, Specs.FrostDk, Specs.UnholyDk], 'https://wow.zamimg.com/images/wow/icons/large/class_deathknight.jpg', true));
    this._wowClassList.push(new WowClass('Druid', [Specs.BalanceDruid, Specs.FeralDruid, Specs.GuardianDruid, Specs.RestoDruid], 'https://wow.zamimg.com/images/wow/icons/large/class_druid.jpg', false));
    this._wowClassList.push(new WowClass('Hunter', [Specs.MarksmanshipHunter, Specs.SurvivalHunter, Specs.BeastMasteryHunter], 'https://wow.zamimg.com/images/wow/icons/large/class_hunter.jpg', false));
    this._wowClassList.push(new WowClass('Mage', [Specs.ArcaneMage, Specs.FireMage, Specs.FrostMage], 'https://wow.zamimg.com/images/wow/icons/large/class_mage.jpg', false));
    this._wowClassList.push(new WowClass('Paladin', [Specs.HolyPaladin, Specs.ProtectionPaladin, Specs.RetributionPaladin], 'https://wow.zamimg.com/images/wow/icons/large/class_paladin.jpg', false));
    this._wowClassList.push(new WowClass('Priest', [Specs.DisciplinePriest, Specs.HolyPriest, Specs.ShadowPriest], 'https://wow.zamimg.com/images/wow/icons/large/class_priest.jpg', false));
    this._wowClassList.push(new WowClass('Rogue', [Specs.AssassinationRogue, Specs.OutlawRogue, Specs.SubtletyRogue], 'https://wow.zamimg.com/images/wow/icons/large/class_rogue.jpg', false));
    this._wowClassList.push(new WowClass('Shaman', [Specs.ElementalShaman, Specs.EnhancementShaman, Specs.RestorationShaman], 'https://wow.zamimg.com/images/wow/icons/large/class_shaman.jpg', false));
    this._wowClassList.push(new WowClass('Warlock', [Specs.AfflictionWarlock, Specs.DemonologyWarlock, Specs.DestructionWarlock], 'https://wow.zamimg.com/images/wow/icons/large/class_warlock.jpg', false));
    this._wowClassList.push(new WowClass('Warrior', [Specs.ArmsWarrior, Specs.FuryWarrior, Specs.ProtectionWarrior], 'https://wow.zamimg.com/images/wow/icons/large/class_warrior.jpg', false));
    this._wowClassList.push(new WowClass('Monk', [Specs.BrewmasterMonk, Specs.MistweaverMonk, Specs.WindwalkerMonk], 'https://wow.zamimg.com/images/wow/icons/large/class_monk.jpg', false));
  }

}
