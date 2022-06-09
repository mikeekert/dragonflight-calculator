export class WowClass {
  spec: string[];
  name: string;
  iconUrl: string;

  constructor(name: string, spec: string[], iconUrl: string) {
    this.name = name;
    this.spec = spec;
    this.iconUrl = iconUrl;
  }
}
