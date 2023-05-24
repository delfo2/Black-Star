import { it, expect, describe, vi } from "vitest";
import path from 'path';
import fs from 'fs';
import { changeMenuState } from "./showMenu";

const HtmlDocPath = path.join(process.cwd(), 'dist/index.html');
const HtmlDocContent = fs.readFileSync(HtmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

document.body.innerHTML = '';
document.write(HtmlDocContent);

describe('changeMenuState()', () => {

    it('should remove the "visivel" property', () => {
        changeMenuState();
        
    });
})