import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import PostFeaturedArticleHomepage from './PostFeaturedArticleHomepage';
import { useArticle } from './ArticleContext';

export default function FeaturedArticleHomepage() {

    const { posts } = useArticle();

    return (
        <div className="relative flex my-7 mx-auto">
            <Splide aria-label="My Favorite Images" className='w-full'>
                {
                    posts !== null
                        ? posts.map((e) => (
                            <SplideSlide key={e.id}>
                                <PostFeaturedArticleHomepage data={e} />
                            </SplideSlide>
                        ))
                        : "Loading..."
                }
            </Splide>
        </div>

    )
}
