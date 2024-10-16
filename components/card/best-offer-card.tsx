"use client"

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { BestOffersCard } from "@/lib/type/type";

type CardProps = {
  data: BestOffersCard;
}

export const BestOfferCard: React.FC<CardProps> = ({
  data
}) => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled(true);
    router.push(data.url);
  }
  return (
    <Card className="h-[450px] lg:h-[470px] hover:shadow-md hover:shadow-purple-800 rounded-3xl border-2 border-purple-600">
      <Image
        className="rounded-3xl mx-auto"
        src={data.image}
        alt={data.alt}
        width={250}
        height={250}
      />
      <CardContent className="mt-4">
        <CardTitle className="text-sm lg:text-lg tracking-normal">
          {data.title}
        </CardTitle>
        <CardDescription className="mt-2 text-xs lg:text-sm md:h-16 lg:h-28">
          {data.description}
        </CardDescription>
        <div className="flex justify-center">
          <Button
            disabled={disabled}
            onClick={onClick}
            size={"sm"}
            className="uppercase text-sm px-4 rounded-none rounded-tl-xl rounded-br-xl bg-purple-600 text-white border-purple-600 hover:bg-purple-800 hover:text-white"
            style={{ marginTop: '2px' }}
          >
            read more
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
