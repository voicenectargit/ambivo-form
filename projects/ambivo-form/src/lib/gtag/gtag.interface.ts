import { GtagConfigInterface } from './gtag-config.interface';

export interface GtagInterface {
  (cmd: 'set', params: any): void;
  (cmd: 'config', targetId: string, config?: GtagConfigInterface): void;
  (cmd: 'event', action: string, params?: any): void;
}
