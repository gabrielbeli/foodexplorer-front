import { SectionContainer } from './styles'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'

export function Section({ title, cards }) {
  const settings = {
    modules: [Navigation],
    navigation: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    breakpoints: {
      769: {
        spaceBetween: 27,
      },
    },
  }

  return (
    <SectionContainer>
      <h2>{title}</h2>

      <Swiper {...settings}>
        {cards.map((card, index) => (
          <SwiperSlide key={String(index)}>{card}</SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  )
}
