export interface Content {
    id: number | null;
        title: string;
        body?: string;
        author: string;
        imageLink?: string;
        type: string;
        hashtags?:string[];
}
