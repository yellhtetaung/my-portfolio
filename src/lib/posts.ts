import { compileMDX } from 'next-mdx-remote/rsc';

import { Meta, BlogPost } from '@/types/types';

type Filetree = {
    tree: [
        {
            path: string;
        },
    ];
};

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    try {
        const res = await fetch(`https://raw.githubusercontent.com/yellhtetaung/Articles/main/${fileName}`, {
            cache: 'no-store',
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });

        if (!res.ok) return undefined;

        const rawMDX = await res.text();

        if (rawMDX === '404: Not Found') return undefined;

        const { frontmatter, content } = await compileMDX<Meta>({
            source: rawMDX,
            options: {
                parseFrontmatter: true,
            },
        });

        const id = fileName.replace(/\.mdx$/, '');

        const blogPostObj: BlogPost = {
            meta: {
                id,
                title: frontmatter.title,
                author: frontmatter.author,
                date: frontmatter.date,
                tags: frontmatter.tags,
                cover: frontmatter.cover,
            },
            content,
        };

        return blogPostObj;
    } catch (error) {
        console.log(error);
    }
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
    const res = await fetch('https://api.github.com/repos/yellhtetaung/Articles/git/trees/main?recursive=1', {
        cache: 'no-store',
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });

    if (!res.ok) return undefined;

    const repoFiletree: Filetree = await res.json();

    const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'));

    const posts: Meta[] = [];

    for (const file of filesArray) {
        const post = await getPostByName(file);
        if (post) {
            const { meta } = post;
            posts.push(meta);
        }
    }

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
