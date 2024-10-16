import { BestOffersCard } from "../../lib/type/type";


export const BestOffersData: BestOffersCard[] = [
    {
        id: 1,
        title: "No Diabetic Retinopathy",
        description: "Healthy retinal blood vessels maintain clear vision with no signs of diabetic retinopathy.",
        image: "/dr6.png",
        alt: "No DR",
        price: "£300.00",
        url: "no-diabetic-retinopathy"
    },
    {
        id: 2,
        title: "Mild NPDR",
        description: "Tiny swellings in the retinal blood vessels may cause minor fluid leakage, leading to early retinal changes.",
        image: "/dr2.png",
        alt: "Mild Nonproliferative DR",
        price: "£300.00",
        url: "mild-nonproliferative-diabetic-retinopathy"
    },
    {
        id: 3,
        title: "Moderate NPDR",
        description: "Increased swelling disrupts blood flow, causing fluid buildup in the retina and affecting vision.",
        image: "/dr4.png",
        alt: "Moderate Nonproliferative DR",
        price: "£300.00",
        url: "moderate-nonproliferative-diabetic-retinopathy",
    },
    {
        id: 4,
        title: "Severe NPDR",
        description: "Significant blockage of retinal blood vessels triggers the body's response to grow new, fragile vessels.",
        image: "/dr3.png",
        alt: "Severe Nonproliferative DR",
        price: "£300.00",
        url: "severe-nonproliferative-diabetic-retinopathy"
    },
    {
        id: 5,
        title: "Proliferative",
        description: "New, delicate blood vessels form, risking fluid leakage that can lead to vision loss or blindness.",
        image: "/dr5.png",
        alt: "Proliferative DR",
        price: "£300.00",
        url: "proliferative-diabetic-retinopathy"
    },
   
] as const;