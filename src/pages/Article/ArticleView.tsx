import { Header } from "./Components/Header";
import ArticleSection from "./Components/ArticlesSection";
import { createInMemoryRepository } from "../../lib/Article/Infrastructure/InMemoryRepository";
import { createArticleService } from "../../lib/Article/Aplication/ArticleService";
import { createGNewsRepository } from "../../lib/Article/Infrastructure/GNewsRepository";
import { useContext } from "react";
import { ArticleViewContext } from "./Context/ArticleContext";
import { HeroBanner } from "./Components/HeroBanner";

const repository = createGNewsRepository()
const service = createArticleService(repository)
export const getRepository = () => repository
export const getService = () => service

export default function ArticleView() {

    const { isFilterOpen, search,isClickFilter } = useContext(ArticleViewContext)

    return <div className={`flex justify-center w-4/5 items-center flex-col ${isFilterOpen}`}>
        <Header />
        {search.length === 0 && !isClickFilter && <HeroBanner
            id="1"
            title="Exploring Emotions in 'Inside Out'"
            content="Inside Out is a 2015 animated film by Pixar that takes viewers on a journey through the mind of an 11-year-old girl named Riley. The movie is unique in its portrayal of emotions as characters, each playing a crucial role in Riley's life as she navigates a major move from Minnesota to San Francisco."
            relaseDate={new Date("2015-06-19")}
            url="https://en.wikipedia.org/wiki/Inside_Out_(2015_film)"
            autor="Jane Doe"
            image="https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg"
            category="Entertainment"
        />
        }
        <ArticleSection />
    </div>
}