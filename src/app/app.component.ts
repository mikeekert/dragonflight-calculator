import { Component, OnInit } from '@angular/core';
import { ITalent } from './models/talent';
import { WowClass } from './models/wow-class';
import { ClassesService } from './services/classes.service';
import { TalentsService } from './services/talents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dragon-calculator';
  talent_count: number = 0;
  classList: WowClass[] = [];
  activeClass: WowClass | null = null;
  classTalents: ITalent[][][] = [];

  constructor(private talentSvc: TalentsService, private classSvc: ClassesService) {
  }

  ngOnInit(): void {
    this.talentSvc.counterObservable.subscribe(numb => {
      this.talent_count = numb;
    });
    this.classSvc.activeClassObservable.subscribe(i => {
      this.activeClass = i;
      this.classTalents = this.talentSvc.generateTalentList();
      this.talentSvc.pointCounter = 0;
    });
    this.classList = this.classSvc.wowClassList;
    this.activeClass = this.classSvc.activeClass;
  }

  selectClass(i: WowClass) {
    this.classSvc.activeClass = i;
  }

  reset() {
    this.talentSvc.pointCounter = 0;
    this.talentSvc.talentsSelected = [];
    console.log(this.talentSvc.talentsSelected);
  }
}
