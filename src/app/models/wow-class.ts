export class WowClass {
  spec: string[];
  name: string;
  iconUrl: string;
  enabled?: boolean;

  constructor(name: string, spec: string[], iconUrl: string, enabled = false) {
    this.name = name;
    this.spec = spec;
    this.iconUrl = iconUrl;
    this.enabled = enabled;
  }
}
