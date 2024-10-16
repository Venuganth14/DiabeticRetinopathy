"use client"

import React, { useEffect } from 'react'
import AOS from "aos";

import { BestOffersCarousel } from '../../carousel/best-offers-carousel'
import { BestOffersCard } from '@/lib/type/type';

type UiProps = {
  data: BestOffersCard[];
}

export const BestOffers: React.FC<UiProps> = ({
  data
}) => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
      
  return (
    <div data-aos="zoom-in">
        <BestOffersCarousel data={data} />
    </div>
  )
}
