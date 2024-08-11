import { useContext, useEffect, useState } from "react";
import { ArticleViewContext } from "../Context/ArticleContext";
import { Article } from "../../../lib/Article/Domain/Article";
import { ArticleComponent } from "./ArticleComponent";
import { getService } from "../ArticleView";

export default function ArticleSection() {

    const [articles, setArticles] = useState<Article[]>([]);
    const [error, setError] = useState("");

    const { search, selectedCategory, selectedCountry, selectedLan, isClickFilter, setIsClickFilter, setIsFilterOpen } = useContext(ArticleViewContext);

    useEffect(() => {
        (
            async () => {
                const service = getService();
                const articles = await service.getAll();   
                if (articles.length === 0) {
                    setError("Sorry we have a mistery error. :/");
                }             
            }
        )()
    }, [])

    useEffect(() => {
        (
            async () => {
                const service = getService();

                if (!isClickFilter) {
                    return;
                }
                console.log(search, selectedLan, selectedCountry, selectedCategory);

                const { result, error } = await service.search({ q: search, lan: selectedLan, country: selectedCountry, category: selectedCategory });

                setIsClickFilter(false);
                setIsFilterOpen(false);
                if (error) {
                    setError("Article Not founded, Sorry :(");
                    setArticles([]);
                    return;
                }

                setArticles(result);
            }
        )()
    }, [isClickFilter,search])

    useEffect(() => {
        (
            async () => {
                const service = getService();

                if (search.length === 0) {
                    setArticles(await service.getAll());
                    return;
                }

                const { result,error } = await service.search({ q: search, lan: selectedLan, country: selectedCountry, category: selectedCategory ?? "General" });
                if (error) {
                    setError("Article Not founded, Sorry :(");
                    setArticles([]);
                    return;
                }                

                setArticles(result);
            }
        )()
    }, [search])

    return (articles.length > 0) ? <section className={`w-full mt-24 cellphone:mt-0  grid grid-cols-auto-fill-400`}>
        {
            articles.map((article) => (
                <ArticleComponent
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    autor={article.autor}
                    content={article.content}
                    image={article.image}
                    url={article.url}
                    relaseDate={article.relaseDate}
                    category={article.category}
                />
            ))
        }
    </section> : <h3 className="mt-28 font-medium text-2xl cellphone:mt-0">{error}</h3>
}