import { articleCategories } from "../../Article/Domain/Article";
import { MachineLearningRepository } from "../Domain/MachineLearningRepository";
import { CreateMLCEngine } from "@mlc-ai/web-llm";

export const createWebLLMRepository = async (): Promise<MachineLearningRepository> => {

    const selectedModel = "SmolLM-135M-Instruct-q0f32-MLC";
    const engine = await CreateMLCEngine(selectedModel, {
        initProgressCallback: (info) => console.log(info)   
    })

    console.log(selectedModel);
    

    return {
        getCategory: async (title: string) => {
            const category = engine.chat.completions.create({
                messages: [{
                    role: "user",
                    content: `You are a news classifier. Your task is to classify news headlines into one of the following categories: World, Politics, Business, Technology, Science, Health, Sports, Entertainment, Travel, Lifestyle, Opinion, Weather, Education, Crime, Environment, Food, Culture, Real Estate, Fashion, Automotive.

                    When given a news headline, respond with only the category name that best fits the headline from the list above. Do not invent new categories. Only use the provided categories.
                    
                    Examples:
                    1. "The stock market hits a new high" -> Business
                    2. "New breakthrough in cancer treatment" -> Health
                    3. "The latest advancements in AI technology" -> Technology
                    4. "NASA discovers something incredible" -> Science
                    5. "Local team wins championship" -> Sports
                    
                    Now, classify the following headline: ${title}`
                }]
            })
            console.log((await category).choices[0].message);
            
            return (await category).choices[0].message.content
        }
    }
}