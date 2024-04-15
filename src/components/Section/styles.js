import styled from 'styled-components'

export const SectionContainer = styled.div`
  max-width: 90%;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin-bottom: 2.4rem;
  }

  .swiper-slide {
    width: fit-content;
  }

  .swiper-button-prev {
    width: 7.25rem;
    height: 100%;
    background: ${(props) => props.theme.GRADIENT[100]};
    left: -5px;
    top: 1.375rem;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .swiper-button-next {
    width: 7.25rem;
    height: 100%;
    background: ${(props) => props.theme.GRADIENT[100]};
    right: 0;
    top: 1.375rem;
    padding-right: 0.5rem;
  }

  @media (max-width: 768px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }

  @media (min-width: 769px) {
    width: 90%;
    margin: 0 auto;

    > h2 {
      font-size: 3rem;
      line-height: 5rem;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-weight: 700;
      font-size: 3rem;
      color: ${(props) => props.theme.LIGHT[100]};
    }

    .swiper-button-prev::after {
      transform: rotate(180deg);
    }
  }
`
