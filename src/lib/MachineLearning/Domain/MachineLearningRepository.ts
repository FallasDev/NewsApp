export interface MachineLearningRepository{
    getCategory( title: string ) : Promise<string | null> 
}