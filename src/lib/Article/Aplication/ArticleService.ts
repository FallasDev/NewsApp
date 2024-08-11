
import { Article } from "../Domain/Article";
import { ArticleRepository } from "../Domain/ArticleRepository";


export const createArticleService = (repository: ArticleRepository) => {
    return {
        getAll: async () => {
            const articles = await repository.getAll();
            
            const newArticles: Article[] = [];
            for (const article of articles) {
                const index = article.content.indexOf("...");
                let newContent = article.content.substring(0, index);
                newArticles.push({
                    ...article,
                    content: newContent,
                })
            }
            return newArticles;
        },
        search: async (filter: { category: string, country: string, lan: string,q: string }) => {
            const findedArticles = await repository.find(filter);
            
            
            if (findedArticles.length === 0) {
                return { error: true, result: [] };
            }
            return { error: false, result: findedArticles };
        }
    }
}

