import { AppState } from './app-state';
import { LocalPersistenceService } from './local-persistence.service';

describe('AppState', () => {
  it('should create an instance', () => {
    expect(new AppState(new LocalPersistenceService())).toBeTruthy();
  });
});
