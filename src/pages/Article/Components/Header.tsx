import { useContext } from "react";
import SearchInput from "./SearchInput";
import { ArticleViewContext } from "../Context/ArticleContext";
import { FilterComponent } from "./FilterComponent";

export function Header() {

    const { isFilterOpen,setIsFilterOpen } = useContext(ArticleViewContext);

    const openFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    }

    return (
        <header className="w-full h-24 p-8 items-center flex justify-center">
            <nav className="flex w-full items-center flex-col justify-center cellphone:flex-row gap-16">
                <h2 className="text-orange-600 text-3xl">NewsFC</h2>
                <ul className="flex gap-8 text-slate-600">
                    <li><a target="_blank" href="https://github.com/FallasDev">Contact Us</a></li>
                    <li><a target="_blank" href="https://gnews.io/">Api Reference</a></li>
                    <li><a target="_blank" href="https://gnews.io/#pricing">Suscribe</a></li>
                </ul>
                <SearchInput/>
                <button type="button" onClick={openFilter} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show Filters!</button>
            </nav>
            { isFilterOpen && <FilterComponent/>}
        </header>
    )
}