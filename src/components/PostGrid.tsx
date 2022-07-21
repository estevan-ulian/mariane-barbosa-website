import Image from "next/image"
import Link from "next/link"

export default function PostGrid({ posts }) {

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
           {posts?.map(post => {
                const { id, title, slug, coverImage, excerpt, date } = post
                const image = coverImage?.url
                const excerpt125words = excerpt.slice(0, 125)
            
                return (
                <article key={id} 
                    className={
                        `w-full relative 
                        transition-all duration-300 hover:scale-105
                    `}
                >
                    <Link href={`/blog/${slug}`}>
                    <a>
                        <div className="w-full relative">
                        <Image unoptimized loader={() => image} src={image} alt={title} width={768} height={360} className={`rounded-t-2xl`} />
                        </div>
                        <div className="p-3 border-l border-b border-r border-accentColor-700 rounded-b-2xl border-opacity-10">
                            <span className="text-sm opacity-50">{date}</span>
                            <h4 className="text-xl font-bold text-secondaryColor-700 mt-4 mb-3" dangerouslySetInnerHTML={ { __html: title}} />
                            <p className="text-darkColor-100" dangerouslySetInnerHTML={ { __html: excerpt125words + " ..."}} />
                        </div> 
                    </a>
                    </Link>
                </article>
                )
            })}
        </div>
    )
}