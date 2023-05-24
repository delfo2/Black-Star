import { it, expect, vi } from 'vitest';
import { action } from './main';
import { listenBtnMenu } from './controllers/menuController';
it('should just execute.', () => {
    vi.mock('./main.ts');
    action();
    expect(action).toHaveBeenCalledOnce();
});
it('should executate listenBtnMenu() function once', () => {
    vi.mock('./controllers/menuController.js');
    action();
    expect(listenBtnMenu).toHaveBeenCalledOnce();
});
