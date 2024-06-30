export const typeDefs = `#graphql

    type Source {
        id: String
        name: String
    }

    type News {
        source: Source
        author: String
        title: String
        description: String
        url: String
        urlToImage: String
        publishedAt: String
        content: String
    }

    type Query {
        getNews:[News]
    }
`;
