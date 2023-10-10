'use client'

import BearCarousel, {BearSlideCard, IBearSlideItemData, BearSlideImage} from 'bear-react-carousel';
import "bear-react-carousel/dist/index.css";
import {useCallback} from 'react';

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


    const slideData = useCallback(() => {
        const dataList = [
            {id: 1, imageUrl: '/responsive/01.webp', desc: 'Blueberry'},
            {id: 2, imageUrl: '/responsive/02.webp', desc: 'berry'},
            {id: 3, imageUrl: '/responsive/03.webp', desc: 'aam'},
        ]

        const bearSlideItemData: IBearSlideItemData[] = dataList.map(row => {
            return {
                key: row.id,
                children: <BearSlideImage imageUrl={row.imageUrl}/>,
            };
        });
        return bearSlideItemData;
    }, []);


    return <BearCarousel
        data={slideData()}
        height="auto"
        slidesPerView={1}
        isEnableNavButton={false}
        isEnablePagination
        isEnableLoop
        isLazy
        // isDebug
        breakpoints={{
            768: {
                slidesPerView: 3,
                isEnablePagination: false,
                isEnableNavButton: true,
            }
        }}
    />;
}

export default MyCarousel;
