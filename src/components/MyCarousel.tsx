import BearCarousel, {BearSlideCard, IBearSlideItemData, BearSlideImage} from 'bear-react-carousel';
import "bear-react-carousel/dist/index.css";
import {useCallback} from 'react';

const MyCarousel = () => {

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
