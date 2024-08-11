import { Article,  } from "./Article";

export interface ArticleRepository {
    getAll(): Promise<Article[]>,
    find(filter: { category: string, country:string, lan: string,q: string }): Promise<Article[]>
    getCategories(): Promise<string[]>
    getLan(): Promise<{name: string,value: string}[]>
    getCountry(): Promise<{name: string,value: string}[]>
}