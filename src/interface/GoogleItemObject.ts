export interface GoogleItemObject {
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    mime: string;
    fileFormat: string;
    image: {
        contextLink: string;
        height: number;
        width: number;
        byteSize: number;
        thumbnailLink: string;
        thumbnailHeight: number;
        thumbnailWidth: number;
    }
};