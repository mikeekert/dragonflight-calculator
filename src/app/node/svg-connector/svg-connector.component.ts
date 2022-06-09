import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Subscription } from 'rxjs';

interface SvgLine {
  x: number | undefined;
  y: number | undefined;
  x2: number | undefined;
  y2: number | undefined;
}

@Component({
  selector: 'app-svg-connector',
  templateUrl: './svg-connector.component.svg',
  styleUrls: ['./svg-connector.component.scss']
})
export class SvgConnectorComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() startingElementId = 0;
  @Input() endingElementId: number[] | undefined = [];
  @ViewChildren('nodes') nodes: QueryList<any> | undefined;
  height: number | undefined = 0;
  endingElements: SvgLine[] = [];
  subs = new Subscription();

  @HostListener('window:resize', ['$event']) onResize() {
    this.endingElements = [];
    this.ngForRendered();
  }

  constructor() {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.endingElements = [];
    this.subs.unsubscribe();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ngForRendered();
    }, 10);
  }

  private ngForRendered() {
    this.endingElementId?.forEach(id => {
      let x = 0, y = 0, x2 = 0, y2 = 0;
      const endNode = document.getElementById(String(id))?.getBoundingClientRect();
      if (endNode) {
        x2 = endNode.left + 5 + (endNode.width / 2);
        y2 = endNode.top + endNode.height / 2;
      }
      const startNode = document.getElementById(`${this.startingElementId}`)?.getBoundingClientRect();
      if (startNode) {
        x = startNode.left + 5 + (startNode.width / 2);
        y = startNode.top + startNode.height / 2;
      }

      if (endNode && startNode) {
        this.height = endNode.top - startNode.top;
        this.endingElements.push({ x, y, x2, y2 });
      }
    })
  }
}
