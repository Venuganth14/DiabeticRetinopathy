import { MainPageBreadcrumb } from "@/components/breadcrumb/main-page-breadcrumb";
import Signup from "@/components/button/signup";
import SocialMediaFloatingButtonGroup from "@/components/button/social-media-button";
import  {PredictionSheet}  from "@/components/form/inquiry-form";
// import DynamicNgrokUrl from "@/components/form/ngrokurl";
import ImageUploadComponent from "@/components/form/upload";
import { MainPageText } from "@/components/page-content/main-page-text";
import { VideoTextCard } from "@/components/titles/conclusion";
import { MainTitle } from "@/components/titles/main-title";

import { SymptomTitle } from "@/components/titles/symptom-title";


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <SocialMediaFloatingButtonGroup />
      </div>
      <div className="relative w-full h-[80vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src="/dr1.mp4"
        />
      </div>
      {/* <ClientAuthComponent /> */}
      <div className="mt-5 px-6 lg:px-20 ">
        <MainPageBreadcrumb page={""} />
      </div>
      <div className="mt-12">
        <div className="px-4 lg:px-20 text-center">
          <MainTitle
            title1={"Diabetic"}
            title2={"Retinopathy"}
            description={""}
          />
        </div>
        <div className="px-4 lg:px-20 text-center mt-6">
          <MainPageText
            description={
              "Diabetic retinopathy is a condition that affects the blood vessels in the retina, the part of your eye that senses light, and is a common complication of diabetes.You must undergo a full-scope dilated eye check-up at least once every year if you have diabetes. Diabetic retinopathy is asymptomatic in early stages but it is important to catch it in time in order to save your eyesight. Preventing or delaying vision loss is achievable through regular physical activities, proper nutrition and adhering to medication regimen for diabetic patients."
            }
          />
        </div>
    
        <div className="mt-16">
          <div className=" grid justify-items-center">
          <Signup/>
          </div>
        </div>
      </div>
    
      {/* <DynamicNgrokUrl/> */}
      <div className="mt-12 mb-12">
        <div className="px-4 lg:px-20">
          <SymptomTitle
            title1="Symptoms of"
            title2="Diabetic Retinopathy"
            description={{
              paragraphs: [
                "Diabetic retinopathy often goes unnoticed during its nonproliferative stages because it typically doesn't cause symptoms. During these stages, blood vessels may not leak, so many individuals are unaware they have the condition. Symptoms usually emerge when the disease advances to proliferative diabetic retinopathy.",
                "However, an eye examination by an eye care specialist or ophthalmologist can detect diabetic retinopathy in its early stages, even before symptoms arise.",
                "In the early stages of diabetic retinopathy, there are often no noticeable symptoms, though some people may experience occasional changes in vision, such as difficulty reading or seeing distant objects. These changes may be intermittent.",
                "As the disease progresses, blood vessels in the retina may begin to bleed into the vitreous—the gel-like substance inside the eye. If this occurs, you may notice dark, floating spots or cobweb-like streaks. While these spots may sometimes clear up on their own, prompt treatment is crucial. Without treatment, scar tissue can develop at the back of the eye, and bleeding may recur or worsen.",
              ],
              listItems: [
                "Increased eye floaters",
                "Blurry or distorted vision",
                "Poor night vision",
                "Vision loss",
                "Decreased field of vision",
                "Changes in color perception",
              ],
            }}
          />
        </div>
        <div className="mt-8 py-12 px-8 lg:px-4">
        <VideoTextCard
          videoSrc="dr3.mp4"
          title1="Understanding"
          title2="Diabetic Retinopathy"
          description={{
            paragraphs: [
              "Early detection and prediction of diabetic retinopathy are crucial for preventing vision loss and managing diabetes complications. Our platform uses advanced machine learning and deep learning to identify diabetic retinopathy at various stages. By combining image processing and predictive analytics, we help healthcare providers and patients monitor retinal health more effectively.",
              "Our goal is to connect advanced technology with healthcare, offering insights that lead to better health outcomes. We are dedicated to improving our models' accuracy and user experience.",
              "Together, we can tackle diabetic retinopathy and enhance the quality of life for millions affected by diabetes worldwide.",
            ],
          }}
          additionalInfo={
            "Our mission is to bridge the gap between cutting-edge technology and healthcare, providing users with actionable insights that can lead to better health outcomes. We are committed to continually improving the accuracy and performance of our models, as well as enhancing the overall user experience.\n\n" +
            "Together, we can fight diabetic retinopathy and improve the quality of life for millions of individuals affected by diabetes worldwide."
          }
        />
      </div>
        {/* <div className="px-4 lg:px-20">
          <SubTitle
            title1={"types of"}
            title2="diabetic retinopathy"
            description={""}
          />
        </div> */}
        {/* <div className="mt-8 py-12 px-8 lg:px-4">
          <div className="container">
            <BestOffers data={BestOffersData} />
          </div>
        </div> */}
      </div>
     
    </main>
  );
}
