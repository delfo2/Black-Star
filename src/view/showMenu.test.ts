import { it, expect, describe, vi, beforeEach } from "vitest";
import path from 'path';
import fs from 'fs';

const HtmlDocPath = path.join(process.cwd(), 'dist/index.html');
const HtmlDocContent = fs.readFileSync(HtmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

document.body.innerHTML = '';
document.write(HtmlDocContent);

// describe('changeMenuState()', () => {
    
//     it('should remove the "visivel" property', async () => {
//         // const showMenu = await import("./showMenu.ts");
//         showMenu.changeMenuState();

//         let botao = showMenu.menu[0].classList;

//         expect(botao).toHaveProperty('visivel');
//     });
// })