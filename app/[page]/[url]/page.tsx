import React from "react";
import { Metadata } from "next";
import Image from "next/image";

import { MainTitle } from "@/components/titles/main-title";
import { SubTitle } from "@/components/titles/sub-title";
import { MainPageBreadcrumb } from "../../../components/breadcrumb/main-page-breadcrumb";
import { BestOffers } from "@/components/page-content/home-page/best-offers";
import { PredictionSheet } from "@/components/form/inquiry-form";
import SocialMediaFloatingButtonGroup from "../../../components/button/social-media-button";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Diagnosis and Eye Symptoms",
    description:
      "Discover how various eye symptoms are diagnosed and what they might indicate.",
  };
}

export default function DiagnosisPage() {
  return (
    <main className="px-4 lg:px-20">
      <SocialMediaFloatingButtonGroup />

      <div className="mt-6">
        <MainPageBreadcrumb page="Diagnosis" />
      </div>

      <div className="mt-12 text-center">
        <MainTitle
          title1="Diagnosis and Eye Symptoms"
          title2=""
          description="Understanding how different eye symptoms are diagnosed and what they may reveal about your eye health."
        />
      </div>

      <div className="mt-12">
        <SubTitle title1="Diagnosis" title2="" description="" />
        <p>
          Diagnosis of eye conditions involves a comprehensive examination and
          evaluation by an ophthalmologist. Tests may include:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Visual acuity tests to measure the clarity of vision.</li>
          <li>Slit-lamp examination to inspect the structures of the eye.</li>
          <li>Fundoscopy to view the retina and optic nerve.</li>
          <li>Intraocular pressure measurement to check for glaucoma.</li>
          <li>Additional imaging or lab tests if necessary.</li>
        </ul>
        <p className="mt-4">
          Based on the symptoms and test results, an accurate diagnosis can be
          made to determine the appropriate treatment.
        </p>
      </div>

      <div className="mt-12">
        <SubTitle title1="Eye Symptoms" title2="" description="" />
        <p>
          This list of symptoms and possible eye problems is for general
          reference only and is not intended to diagnose any specific eye
          disease or condition. Online symptom checkers can&apos;t cover all
          visual symptoms or all possible related conditions. Eye injuries,
          sudden changes to—or loss of—vision and eye pain can be signs of
          serious problems, requiring emergency attention. If you have any eye
          or vision symptoms, talk to your ophthalmologist. Always consult a
          doctor about your own health and seek treatment if you have any
          worries about your eyes or vision.
        </p>

        <div className="mt-6">
          <Image
            src="/eye-symptoms.jpg"
            alt="Closeup of a mature or advanced cataract in an older adult's eye"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-6">
          <SubTitle title1="Common Eye Symptoms" title2="" description="" />
          <ul className="list-disc pl-6">
            <li>Blurry vision</li>
            <li>Double vision</li>
            <li>Redness or irritation</li>
            <li>Floaters or flashes of light</li>
            <li>Eye pain or discomfort</li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <div className="grid justify-items-center">
          <PredictionSheet prediction={true} />
        </div>
      </div>

      <div className="mt-12">
        <div className="text-center">
          <SubTitle title1="Explore More" title2="" description="" />
        </div>
        <div className="mt-8 py-12">
          <BestOffers data={[]} /> {/* Add data as needed */}
        </div>
      </div>
    </main>
  );
}
