// Update MainPage Component
import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { MainTitle } from "@/components/titles/main-title";
import { SubTitle } from "@/components/titles/sub-title";
import { MainPageBreadcrumb } from "../../components/breadcrumb/main-page-breadcrumb";
import { BestOffers } from "@/components/page-content/home-page/best-offers";
import { BestOffersData } from "@/utils/json/best-offers";
import { DiabeticRetinopathyStages } from "@/utils/json/(details)/main-details-sub-page";
import { DiabeticRetinopathyStagePage } from "@/lib/type/type";
import { redirect } from "next/navigation";
import SocialMediaFloatingButtonGroup from "../../components/button/social-media-button";
import { PredictionSheet } from "@/components/form/inquiry-form";
import ClientAuthComponent from "./clientAuth";
import ImageUploadComponent from "@/components/form/upload";
// import DynamicNgrokUrl from "@/components/form/ngrok";

type Props = {
  params: { page: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const details = DiabeticRetinopathyStages.find(
    (data) => data.url === params.page
  );

  return {
    title: details ? details["meta-title"] : "Diabetic Retinopathy",
    description: details
      ? details["meta-description"]
      : "Learn about the different stages of diabetic retinopathy.",
  };
}

export default async function MainPage({ params }: Props) {
  const mainData = DiabeticRetinopathyStages.find(
    (data) => data.url === params.page
  );

  if (!mainData) {
    redirect("/");
    return null;
  }

  // Retrieve the result message from localStorage
  const resultMessage = typeof window !== "undefined" ? localStorage.getItem('resultMessage') : null;

  return (
    <main className="px-4 lg:px-20">
      <SocialMediaFloatingButtonGroup />

      <div className="relative">
        <div className="absolute inset-0">
          <video autoPlay muted loop className="w-full h-full object-cover">
            {/* Optional: You can include a default video if mainData.video does not exist */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* <ClientAuthComponent /> */}

      <div className="mt-20">
        <MainPageBreadcrumb page={mainData.breadcrumb} />
      </div>

      {/* Display the result message if available */}
      {resultMessage && (
        <div className="mt-6 bg-yellow-200 p-4 border border-yellow-300 rounded">
          <p>{resultMessage}</p>
        </div>
      )}

      <div className="mt-12 text-center">
        <MainTitle
          title1={mainData["main-title1"]}
          title2={mainData["main-title2"]}
          description=""
        />
        <p className="mt-6">{mainData["main-description"]}</p>
      </div>
      <div className="mt-12">
        <SubTitle title1="Overview" title2={""} description={""} />
        {mainData.visuals.map((visual, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center lg:items-start mb-6"
          >
            {/* Image on the left side */}
            <div className="flex-shrink-0 w-[200px] h-[200px] overflow-hidden lg:mr-4 mb-4 lg:mb-0">
               <Image
                src={visual.imageUrl}
                alt={visual.description}
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            {/* Subtitle and description on the right side */}
            <div className="flex-1">
              <p className="mt-4">{mainData.overview}</p>
              <p className="mt-2">{visual.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <ImageUploadComponent/> */}
      {/* <div className="mt-16">
        <div className=" grid justify-items-center">
          <PredictionSheet prediction={true} />
        </div>
      </div> */}

      <div className="mt-12">
        <SubTitle title1="Symptoms" title2={""} description={""} />
        <p>{mainData.symptoms}</p>
      </div>

      <div className="mt-12">
        <SubTitle title1="Treatment" title2="Options" description={""} />
        <p>{mainData.treatmentOptions}</p>
      </div>

      <div className="mt-12 mb-12">
        <div className="text-center">
          <SubTitle
            title1="Types of"
            title2="Diabetic Retinopathy"
            description={""}
          />
        </div>
        <div className="mt-8 py-12">
          <BestOffers data={BestOffersData} />
        </div>
      </div>
      
      <div className="mt-8">
          {/* <div className=" grid justify-items-center">
          <PredictionSheet prediction={true} />
          </div> */}
        </div>
      {mainData.resources && (
        <div className="mt-8">
          <SubTitle title1="Related" title2="Information" description={""} />
          <div className="flex flex-wrap gap-8">
            {mainData.resources.videoUrl && (
              <div className="flex-1 min-w-[250px] max-w-[400px]">
                <div className="overflow-hidden h-[200px]">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    src={mainData.resources.videoUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

            {mainData.resources.articleLinks && (
              <div className="flex-1 min-w-[250px] max-w-[400px]">
                <SubTitle title1="Related" title2="Articles" description={""} />
                <ul className="list-disc pl-4">
                  {mainData.resources.articleLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {mainData.resources.brochureUrl && (
              <div className="flex-1 min-w-[250px] max-w-[400px]">
                <h3 className="font-semibold text-lg">Brochure</h3>
                <a
                  href={mainData.resources.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Brochure
                </a>
              </div>
            )}

            {mainData.resources.supportGroupLinks && (
              <div className="flex-1 min-w-[250px] max-w-[400px]">
                <h3 className="font-semibold text-lg">Support Groups</h3>
                <ul className="list-disc pl-4">
                  {mainData.resources.supportGroupLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
