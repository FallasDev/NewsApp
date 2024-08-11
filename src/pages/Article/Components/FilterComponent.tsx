import { useContext, useEffect, useState } from "react"
import { getRepository } from "../ArticleView"
import { ArticleViewContext } from "../Context/ArticleContext";


export function FilterComponent() {
    const { selectedCategory,setSelectedCategory,
        setSelectedCountry,setSelectedLan,selectedCountry,selectedLan,setIsClickFilter } = useContext(ArticleViewContext);

    const [categories, setCategories] = useState<string[]>([]);
    const [languages, setLanguages] = useState<{ name: string, value: string }[]>([])
    const [countries, setCountries] = useState<{ name: string, value: string }[]>([])

    useEffect(() => {   
        (
            async () => {
                const category = await getRepository().getCategories();
                const languages = await getRepository().getLan();
                const countries = await getRepository().getCountry()
                setCategories(category);
                setLanguages(languages);
                setCountries(countries);       
            }
        )()
        
    }, [])

    //Filters functions
    const handleCategories = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const userCategorySelect = ev.target.value;
        setSelectedCategory(userCategorySelect)
    }

    const handleCountries = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const userCountrySelect = ev.target.value;        
        setSelectedCountry(userCountrySelect);
    }

    const handleLan = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const userLanSelect = ev.target.value;
        setSelectedLan(userLanSelect);
    }

    const handleReset = () => {
        setSelectedCategory("");
        setSelectedCountry("");
        setSelectedLan("");
    }

    const applyFilters = () => {
        setIsClickFilter(true);
    }

    return <div className="m-10 overflow-auto w-fit bg-slate-200 top-20 max-h-96 rounded-lg border  fixed left-0 z-10 cellphone:left-1/3 border-gray-200 open:shadow-lg text-gray-700">
        <form action="" className="flex border-t border-gray-200 lg:border-t-0">
            <fieldset className="w-full">
                <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Categories</legend>

                <div className="space-y-2 px-5 py-6">
                    {categories.map((category) => {
                        return <div key={"#" + category} className="flex items-center">
                            <input id={"#" + category} checked={category === selectedCategory} value={category} type="radio" onChange={handleCategories} name="" className="h-5 w-5 rounded border-gray-300" />
                            <label htmlFor={"#" + category}  className="ml-3 text-sm font-medium"> {category} </label>
                        </div>
                    })}
                </div>
            </fieldset>

            <fieldset className="w-full">
                <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Languages</legend>
                <div className="space-y-2 px-5 py-6">

                    {
                        languages.map((language) => {
                            return <div key={language.name} className="flex items-center">
                                <input id={language.name} checked={language.value === selectedLan} value={language.value} type="radio" name="language"  onChange={handleLan} className="h-5 w-5 rounded border-gray-300" />
                                <label htmlFor={language.name} className="ml-3 text-sm font-medium"> {language.name} </label>
                            </div>
                        })
                    }
                </div>
            </fieldset>
            <fieldset className="w-full">
                <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Countries</legend>
                <div className="space-y-2 px-5 py-6">
                    {
                        countries.map((country) => {
                            return <div key={country.value} className="flex items-center">
                                <input id={country.value} checked={country.value === selectedCountry}  value={country.value} type="radio" name="country" onChange={handleCountries} className="h-5 w-5 rounded border-gray-300" />
                                <label htmlFor={country.value} className="ml-3 text-sm font-medium"> {country.name} </label>
                            </div>
                        })
                    }
                </div>
            </fieldset>
        </form>
        <div className="">
            <div className="flex justify-between border-t border-gray-200 px-5 py-3">
                <button name="reset" type="button" onClick={handleReset} className="rounded text-xs font-medium text-gray-600 underline">Reset All</button>

                <button name="commit" type="button" onClick={applyFilters} className="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95">Apply Filters</button>
            </div>
        </div>
    </div>

}