import { createContext } from "react";

interface ArticleViewContextType {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    isFilterOpen: boolean,
    setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>,
    selectedCategory: string,
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
    selectedCountry: string,
    setSelectedCountry: React.Dispatch<React.SetStateAction<string>>
    selectedLan: string,
    setSelectedLan: React.Dispatch<React.SetStateAction<string>>,
    isClickFilter: boolean,
    setIsClickFilter: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultArticleViewContext :ArticleViewContextType = {
    search: "",
    setSearch: () => "",
    isFilterOpen: false,
    setIsFilterOpen: () => false,
    selectedCategory: "",
    setSelectedCategory: () => {},
    selectedCountry: "",
    setSelectedCountry: () => {},
    selectedLan: "",
    setSelectedLan: () => {},
    isClickFilter: false,
    setIsClickFilter: () => {}
}

export const ArticleViewContext = createContext(defaultArticleViewContext);