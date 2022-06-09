import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TalentsService } from '../../services/talents.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() shape: ('round' | 'square' | 'hexagon') = 'square';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() isDisabled?: boolean = true;
  @Input() iconUrl: string = '';
  @Input() maxLevel = 2;
  @Input() requiredTotalPoints: number = 0;
  @Input() id = 0;
  @Input() requiredTalents: number[] | undefined;
  @Input() parentNodeOf: number[] | undefined;
  @Input() align: ('left' | 'right' | 'center') | undefined = 'center';
  minimumTalentPointsMet: boolean = false;
  level: number = 0;
  counter: number = 0;

  constructor(private talentsService: TalentsService) {
  }

  private static unhighlight() {
    const tooltip_tray = document.getElementById('tooltip');
    if (tooltip_tray) {
      tooltip_tray.style.display = 'none';
    }
  }

  private highlight(event: MouseEvent) {
    const tooltip_tray = document.getElementById('tooltip');
    if (!tooltip_tray) {
      return;
    }
    tooltip_tray.style.display = 'block';
    const element = event.currentTarget as HTMLElement;
    tooltip_tray.style.left = (element.offsetLeft + 65) + 'px';
    tooltip_tray.style.top = element.offsetTop + 'px';
    const name = document.getElementById('name');
    if (name) {
      name.innerHTML = this.name;
    }
    const description = document.getElementById('desc');
    if (description) {
      description.innerHTML = this.description;
    }
    const points = document.getElementById('points-needed');
    if (points) {
      const numOfPoints = this.requiredTotalPoints - this.talentsService.pointCounter;
      if (numOfPoints > 0) {
        points.style.display = 'block';
        points.innerText = 'You need ' + numOfPoints + ' more points to unlock this talent.';
      } else {
        points.style.display = 'none';
      }
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter($event: MouseEvent) {
    this.highlight($event);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    NodeComponent.unhighlight();
  }

  ngOnInit(): void {
    this.talentsService.talentsSelectedObservable.subscribe(resp => {
      this.isDisabled = this.requiredTalents?.length == 0 ? false : !resp?.some(id => this.requiredTalents?.includes(id));
      if (resp?.length === 0) {
        this.level = 0;
      }
      this.checkTalentPointsRequirement();
    });

    this.talentsService.counterObservable.subscribe(resp => {
      this.counter = resp;
    });
  }

  increment() {
    if (this.talentsService.pointCounter >= 31) {
      return;
    }
    if ((this.requiredTalents?.length === 0 ||
      this.requiredTalents?.some(id => {
        return this.talentsService.talentsSelected.includes(id)
      })
    ) && this.level < this.maxLevel
    && this.talentsService.pointCounter >= this.requiredTotalPoints) {
      this.level += 1;
      this.talentsService.pointCounter += 1;
      this.checkTalentsSelected(this.id, true);
      this.checkTalentPointsRequirement();
    }
  }

  decrement(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const requiredTalentsRemaining = this.parentNodeOf?.some(parentId => {
      return this.talentsService.talentsSelected.includes(parentId);
    });
    if (!requiredTalentsRemaining) {
      this.reduceTalentPoints();
    }
  }

  private checkTalentPointsRequirement() {
    this.minimumTalentPointsMet = this.talentsService.pointCounter >= this.requiredTotalPoints;
  }

  private reduceTalentPoints() {
    if (this.level > 0) {
      this.level -= 1;
      this.talentsService.pointCounter -= 1;
      this.checkTalentsSelected(this.id, false);
      this.checkTalentPointsRequirement();
    }
  }

  private checkTalentsSelected(id: number, increasePoints: boolean) {
    if (increasePoints && this.level == this.maxLevel) {
      this.talentsService.addTalent(id);
    }
    if (!increasePoints && this.level != this.maxLevel) {
      this.talentsService.removeTalent(id);
    }
  }
}
