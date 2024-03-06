export default function TitleSinglePage({ data }) {

    return (

        <div className="flex gap-3">

            <section className="container mx-auto py-5">
                <div className="relative rounded-xl overflow-hidden">
                    <img
                        src="https://picsum.photos/900/900"
                        className="w-full h-96 object-cover"
                        alt=""
                    />

                    <div className="absolute w-full h-full rounded-xl overflow-hidden bottom-0 bg-gradient-to-t from-10% from-black/60">
                        {/* description */}
                        <div className="absolute bottom-0 px-6 py-8">
                            <h1 className="mb-3 text-3xl font-bold text-white">{data.title.rendered}</h1>
                            {/* tags */}
                            <div className="flex gap-3">
                                {/* Hurung */}
                                <span className="inline-block rounded-full bg-red-300 px-3 py-1">
                                    anime
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
