export class WindowHelper {
	static moveToUp(): void {
		window.scrollTo(0, 0);
	}
	static moveToEnd() {
		window.scrollTo(0, document.body.scrollHeight);
	}
}
