import { Article } from "../Domain/Article";
import { ArticleRepository } from "../Domain/ArticleRepository";

const articles: Article[] = [
    {
        id: "1",
        title: "The Future of Technology",
        autor: "John Doe",
        content: "In this article, we explore the future of technology and its potential impacts on society...",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=20",
        relaseDate: new Date("2024-01-01"),
        url: "https://example.com/articles/future-technology",
        category: "General"
    },
    {
        id: "2",
        title: "AI in Healthcare",
        autor: "Jane Smith",
        content: "Artificial Intelligence is revolutionizing healthcare in various ways, from diagnosis to treatment...",
        image: "https://images.unsplash.com/photo-1616161560417-66d4db5892ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fElBfGVufDB8fDB8fHww&q=20",
        relaseDate: new Date("2024-02-15"),
        url: "https://example.com/articles/ai-healthcare",
        category: "General"
    },
    {
        id: "3",
        title: "Climate Change and You",
        autor: "Albert Johnson",
        content: "Climate change is a pressing issue that affects us all. This article delves into its causes and what we can do to mitigate its effects...",
        image: "https://plus.unsplash.com/premium_photo-1682125151349-a7f3dec5fe0b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtYmlvJTIwY2xpbWF0aWNvfGVufDB8fDB8fHww&q=20",
        relaseDate: new Date("2024-03-10"),
        url: "https://example.com/articles/climate-change",
        category: "General"
    },
    {
        id: "4",
        title: "The Rise of Electric Vehicles",
        autor: "Emily Davis",
        content: "Electric vehicles are becoming more popular each year. In this article, we discuss the benefits and challenges of this trend...",
        image: "https://images.unsplash.com/photo-1617704548623-340376564e68?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGVzbGF8ZW58MHx8MHx8fDA%3D&q=20",
        relaseDate: new Date("2024-04-20"),
        url: "https://example.com/articles/electric-vehicles",
        category: "General"
    },
];

const categories: string[] = ["general", "business", "technology"];

const languages = [
    { name: "English", value: "en" },
    { name: "Spanish", value: "es" },
    // Otros idiomas
];

const countries = [
    { name: "United States", value: "us" },
    { name: "Spain", value: "es" },
    // Otros países
];

export const createInMemoryRepository = () : ArticleRepository => {
    return {
        getAll: () => {
            return new Promise((resolve) => resolve(articles));
        },
        find(filter) {
            return new Promise((resolve) => resolve(
                articles.filter((article) => article.category.toLowerCase() === filter.category && article.title.toLowerCase().includes(filter.q.toLowerCase()))));
        },
        getCategories: () => {
            return new Promise((resolve) => resolve(categories));
        },
        getLan: () => {
            return new Promise((resolve) => resolve(languages))
        },
        getCountry: () => {
            return new Promise((resolve) => resolve(countries))
        }
    }
}