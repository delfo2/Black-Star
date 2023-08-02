import { it, expect, vi} from 'vitest';
import { jsLoad } from './main';
import { listenBtnMenu } from './controllers/menuController';

it('should just execute.', () => {
    vi.mock('./main.ts');
    jsLoad();
    
    expect(jsLoad).toHaveBeenCalledOnce();
});

it('should executate listenBtnMenu() function once', () => {
    vi.mock('./controllers/menuController.js');
    jsLoad();

    expect(listenBtnMenu).toHaveBeenCalledOnce();
});