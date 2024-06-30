import axios from "axios";

export const resolvers = {
  Query: {
    getNews: async () =>
      // (await axios.get(`http://localhost:3000/v1/news/top-headlines`)).data,
      {
        try {
          const response = await axios.get(
            `http://localhost:3001/v1/news/top-headlines`
          );
          return response.data;
        } catch (error) {
          throw new Error("error_fetching_news");
        }
      },
  },
};
