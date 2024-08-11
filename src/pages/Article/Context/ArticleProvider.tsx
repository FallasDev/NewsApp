import { useState } from "react";
import ArticleView from "../ArticleView";
import { ArticleViewContext } from "./ArticleContext";

export function ArticleProvider() {
    const [search, setSearch] = useState<string>("");
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [selectedLan, setSelectedLan] = useState<string>("");
    const [isClickFilter, setIsClickFilter] = useState<boolean>(false);

    return <ArticleViewContext.Provider value={{ search, setSearch, isFilterOpen, setIsFilterOpen, selectedCategory, setSelectedCategory, selectedCountry, setSelectedCountry, selectedLan, setSelectedLan,isClickFilter,setIsClickFilter }}>
        <ArticleView />
    </ArticleViewContext.Provider>
}