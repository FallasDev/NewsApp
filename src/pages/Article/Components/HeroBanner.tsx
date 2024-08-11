import { Article } from "../../../lib/Article/Domain/Article";

export function HeroBanner({ id, title, autor, image, content, url, relaseDate }: Article) {
    return <div className="p-8 flex w-full justify-center items-center gap-8" key={id}>
        <img className="max-w-xl min-w-56 rounded-xl" src={image} alt="" />
        <div className="w-2/5 flex flex-col gap-6">
            <h3 className="text-gray-500">{autor} • <span>{relaseDate.toDateString()}</span></h3>
            <h2 className="text-black text-6xl">{title}</h2>
            <p className="text-gray-500">{content}</p>
            <a className="text-blue-500" href={url}>
                <span className="text-black">For more information: </span>{autor}
            </a>
        </div>
    </div>
}