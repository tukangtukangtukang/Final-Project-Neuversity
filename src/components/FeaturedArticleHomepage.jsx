import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import PostFeaturedArticleHomepage from './PostFeaturedArticleHomepage';

export default function FeaturedArticleHomepage() {
    return (
        <div className="relative flex my-7 mx-auto">
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <PostFeaturedArticleHomepage />
                </SplideSlide>
                <SplideSlide>
                    <PostFeaturedArticleHomepage />
                </SplideSlide>
                <SplideSlide>
                    <PostFeaturedArticleHomepage />
                </SplideSlide>
            </Splide>
        </div>

    )
}
