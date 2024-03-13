export interface Meta {
    id: string;
    title: string;
    author: string;
    date: string;
    tags: string[] | undefined;
    cover: string;
}

type BlogPost = {
    meta: Meta;
    content: ReactElement<any, string | JSXElementConstructor<any>>;
};
