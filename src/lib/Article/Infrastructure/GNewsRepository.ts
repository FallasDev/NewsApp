import { Article, createArticleId } from "../Domain/Article";
import { ArticleRepository } from "../Domain/ArticleRepository";

interface GNewsSource {
    name: string;
    url: string;
}

interface GNewsArticle {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: GNewsSource;
}


export const createGNewsRepository = (): ArticleRepository => {

    const apikey = 'dda805174d13358e0f4cc52424560a68';

    return {
        getAll: async () => {
            const url = 'https://gnews.io/api/v4/top-headlines?category=general&lang=en&max=30&apikey=' + apikey;
            let articles: Article[] = []

            await fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.articles) {
                        return [];
                    }
                    const gNewsArticles: GNewsArticle[] = data.articles;

                    articles = gNewsArticles.map((gNewsArticle): Article => {

                        const article: Article = {
                            id: createArticleId(),
                            title: gNewsArticle.title,
                            autor: gNewsArticle.source.name,
                            content: gNewsArticle.content,
                            relaseDate: new Date(gNewsArticle.publishedAt),
                            image: gNewsArticle.image,
                            url: gNewsArticle.source.url,
                            category: "General"
                        }


                        return article;
                    })
                })
            return articles;
        },
        find: async (filter: { category: string, country: string, lan: string, q: string }) => {
            const url = `https://gnews.io/api/v4/search?&category=${filter.category}q=${filter.q}&lang=${filter.lan}&country=${filter.country}&max=10&apikey=` + apikey;
            let findedArticles: Article[] = [];
            await fetch(url)
                .then((res) => res.json())
                .then((data) => {

                    if (!data.articles) {
                        return [];
                    }

                    const gNewsArticles: GNewsArticle[] = data.articles;

                    findedArticles = gNewsArticles.map((gNewsArticle) => {
                        const article: Article = {
                            id: createArticleId(),
                            title: gNewsArticle.title,
                            autor: gNewsArticle.source.name,
                            content: gNewsArticle.content,
                            relaseDate: new Date(gNewsArticle.publishedAt),
                            image: gNewsArticle.image,
                            url: gNewsArticle.url,
                            category: filter.category
                        }
                        return article;
                    })
                })
            return findedArticles;
        },
        getCategories: () => {
            const categories = [
                "general",
                "world",
                "nation",
                "business",
                "technology",
                "entertainment",
                "sports",
                "science",
                "health"
            ];
            return new Promise((resolve) => resolve(categories));
        },
        getLan: () => {
            const languages = [
                { name: "Arabic", value: "ar" },
                { name: "Chinese", value: "zh" },
                { name: "Dutch", value: "nl" },
                { name: "English", value: "en" },
                { name: "French", value: "fr" },
                { name: "German", value: "de" },
                { name: "Greek", value: "el" },
                { name: "Hebrew", value: "he" },
                { name: "Hindi", value: "hi" },
                { name: "Italian", value: "it" },
                { name: "Japanese", value: "ja" },
                { name: "Malayalam", value: "ml" },
                { name: "Marathi", value: "mr" },
                { name: "Norwegian", value: "no" },
                { name: "Portuguese", value: "pt" },
                { name: "Romanian", value: "ro" },
                { name: "Russian", value: "ru" },
                { name: "Spanish", value: "es" },
                { name: "Swedish", value: "sv" },
                { name: "Tamil", value: "ta" },
                { name: "Telugu", value: "te" },
                { name: "Ukrainian", value: "uk" }
            ];
            return new Promise((resolve) => resolve(languages))
        },
        getCountry: () => {
            const countries = [
                { name: "Australia", value: "au" },
                { name: "Brazil", value: "br" },
                { name: "Canada", value: "ca" },
                { name: "China", value: "cn" },
                { name: "Egypt", value: "eg" },
                { name: "France", value: "fr" },
                { name: "Germany", value: "de" },
                { name: "Greece", value: "gr" },
                { name: "Hong Kong", value: "hk" },
                { name: "India", value: "in" },
                { name: "Ireland", value: "ie" },
                { name: "Israel", value: "il" },
                { name: "Italy", value: "it" },
                { name: "Japan", value: "jp" },
                { name: "Netherlands", value: "nl" },
                { name: "Norway", value: "no" },
                { name: "Pakistan", value: "pk" },
                { name: "Peru", value: "pe" },
                { name: "Philippines", value: "ph" },
                { name: "Portugal", value: "pt" },
                { name: "Romania", value: "ro" },
                { name: "Russian Federation", value: "ru" },
                { name: "Singapore", value: "sg" },
                { name: "Spain", value: "es" },
                { name: "Sweden", value: "se" },
                { name: "Switzerland", value: "ch" },
                { name: "Taiwan", value: "tw" },
                { name: "Ukraine", value: "ua" },
                { name: "United Kingdom", value: "gb" },
                { name: "United States", value: "us" }
            ];
            return new Promise((resolve) => resolve(countries));
        }
    }
}