import { Article } from "../../../lib/Article/Domain/Article";

export function ArticleComponent({ id, title, autor, image, content, url, relaseDate }: Article) {
    return (
        <div className="p-8 flex flex-col gap-2" key={id}>
            <img className="w-96 max-h-64" src={image} alt="" />
            <h3 className="text-gray-500">{autor} • <span>{relaseDate.toDateString()}</span></h3>
            <h2 className="text-black text-4xl">{title}</h2>
            <p className="text-gray-500">{content}</p>
            <a className="text-blue-500" href={url}>
                <span className="text-black">For more information: </span>{autor}
            </a>
        </div>
    )
}