export interface ITalent {
  iconUrl: string;
  id: number;
  maxLevel: number;
  name: string;
  tooltip: string;
  requiredTalents: number[];
  parentNodeOf: number[];
  requiredTotalPoints: number;
  shape?: ('round' | 'square' | 'hexagon');
  iconAlignment?: ('left' | 'right' | 'center');
  level?: number;
}

