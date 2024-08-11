import { articleCategories } from "../../Article/Domain/Article";
import { MachineLearningRepository } from "../Domain/MachineLearningRepository";

export const createMachineLearningService = ( repository: MachineLearningRepository ) => {
    return {
        createCategory: async (title: string) => {
            const category = await repository.getCategory(title)
            if (category) {
                if (!articleCategories.includes(category)) {
                    return "Categorie not founded!";
                } 
                return category;
            }
        }
    }
}