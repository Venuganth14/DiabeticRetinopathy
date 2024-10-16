import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { BestOfferCard } from "../card/best-offer-card";

import { BestOffersCard } from "@/lib/type/type";

type CarouselProps = {
  data: BestOffersCard[];
};

export const BestOffersCarousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data.map((details) => (
          <CarouselItem key={details.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <BestOfferCard data={details} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
