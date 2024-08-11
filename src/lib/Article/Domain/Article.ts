import { v4, validate } from "uuid";

export interface Article {
    id: string,
    title: string,
    autor: string,
    content: string,
    image: string
    relaseDate: Date,
    url: string,
    category: string
}

export const createArticleId = () => v4();

export const isValidArticleId = (id: string): boolean => {
    return validate(id);
}

export const isValidTitle = (title: string) => {

    const sensationalisms = ["Scandal", "Outrageous", "Heartbreaking:"]

    if (title.length > 124) {
        return { status: false, message: "The title is so Long!" }
    }

    if (sensationalisms.some((sensationalism) => title.includes(sensationalism))) {
        return { status: false, message: "The title includes sensationalism!" }
    }

    return { status: true, message: "The title is valid!" }
}

export const isValidContent = (content: string) => {
    if (content.length < 152) {
        return { status: false, message: "The content is so Short!" }
    }
    return { status: true, message: "The content is valid!" }
}

export const isValidDate = (date: Date) => {

    const nowYear = new Date().getFullYear()

    const isCurrentArticle = nowYear - date.getFullYear() < 10

    if (!isCurrentArticle) {
        return { status: false, message: "The article is so old!" }
    }
    return { status: true, message: "The date is valid!" }
}
