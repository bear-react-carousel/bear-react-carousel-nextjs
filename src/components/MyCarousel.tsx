'use client'

import BearCarousel, {BearSlideCard, IBearSlideItemData} from 'bear-react-carousel';
import "bear-react-carousel/dist/index.css";

const MyCarousel = () => {
    const images = [
        { id: 1, imageUrl: "/sample/01.webp" },
        { id: 2, imageUrl: "/sample/02.webp" },
        { id: 3, imageUrl: "/sample/03.webp" },
        { id: 4, imageUrl: "/sample/04.webp" },
        { id: 5, imageUrl: "/sample/05.webp" },
        { id: 6, imageUrl: "/sample/06.webp" }
    ];

    const bearSlideItemData: IBearSlideItemData[] = images.map((row) => {
        return {
            key: row.id,
            children: <BearSlideCard bgSize="100%" bgUrl={row.imageUrl} />
        };
    });

    return <BearCarousel data={bearSlideItemData} height="400px" />;
}

export default MyCarousel;
