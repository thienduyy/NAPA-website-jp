import styled from '@emotion/styled';

const SlideWrapper = styled("div")`
    .slick-slider, .slick-track, .slick-slide, .slick-list {
        display: flex !important;
    }
    .slick-active div {
        width: 100%;
    }
    @media only screen and (width: 768px) {
        .slick-slide{
            justify-content: center;
        }
    }
    @media only screen and (width: 1024px) {
        .slick-slide{
            justify-content: center;
        }
    }
    @media only screen and (max-height: 414px) {
        .slick-slide{
            justify-content: center;
        }
    }
`;

export default SlideWrapper;
