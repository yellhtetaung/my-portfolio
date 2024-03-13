import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getBlog() {
    const response = await client.getEntries({
        content_type: 'post',
    });

    return response.items;
}

export async function getBlogById(id: string) {
    const response = await client.getEntry(id);

    console.log(response);

    return response.fields;
}
