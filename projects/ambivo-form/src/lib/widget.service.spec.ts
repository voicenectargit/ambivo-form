import { WidgetService } from './widget.service';

describe('WidgetService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: WidgetService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new WidgetService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getWidget():', () => {
    it('should get widget', () => {});
  });
  describe('executeWidget():', () => {
    it('should execute widget', () => {});
  });
});
