import styled from '@emotion/styled'

const SliderWrapper = styled("div")`

  .slick-dots li button::before {
    font-size: 12px !important;
    color: white !important;
    transition: all 500ms ease;
  }

  .slick-dots {
    bottom: 25px;
    z-index: 3;
  }

  @media only screen and (max-width: 800px) {
    .slick-slider {
      height: 100%;
    }

    .slick-dots {
      bottom: 30px;
      z-index: 2;
    }
    .slick-dots li {
      // width: 14px;
      margin: 0 20px;
    }
    .slick-dots li::before {
      content: '';
      background-color: white;
      width: calc(100% + 40px);
      left: -20px;
      height: 2px;
      position: absolute;
      top: calc(50% - 2px);
      opacity: .25;
      z-index: 1;
      box-shadow: 0px 0px 10px 0px #FFF;
    //   border-radius: 50%;
    }
    .slick-dots li:first-child::before {
    //   border-radius: 50%;
      border-radius: 50% 0px 0px 50%;
    }
    .slick-dots li:last-child::before {
      border-radius: 0px 50% 50% 0px;
    }

    .slick-dots li button {
      padding: 0;
    }
    .slick-dots li button::before {
      opacity: .85;
      font-size: 10px !important;
      // color: white !important;
      color: #472597!important;
      transition: width 0.3s ease-in-out;
      border-radius: 50%;
      // box-shadow: 0px 0px 10px 0px white;
      // line-height: 1;
      width: 10px;
      height: 10px;
      z-index: 2;
    }
    .slick-dots li button::after {
      content: '';
      opacity: .85;
      font-size: 10px !important;
      color: white !important;
      transition: width 0.3s ease-in-out;
      border-radius: 50%;
      // box-shadow: 0px 0px 10px 0px white;
      // line-height: 1;
      width: 10px;
      height: 10px;
      display: block;
      box-shadow: 0px 0px 5px #FFF;
    }
    .slick-dots li.slick-active button:before {
      opacity: 1;
      color: #dd38d9 !important;
      color: white !important;
      // background-image: linear-gradient(to right, #dd38d9, #8354ef);
    }
    /*.slick-dots li.slick-active button:after {
      box-shadow: 0 0 10px #ff6f61, 0 0 40px #ff6f61, 0 0 80px #ff6f61;
      background-image: linear-gradient(to right, #dd38d9, #8354ef);
    }*/
  }
`;

export default SliderWrapper;
