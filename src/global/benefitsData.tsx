import healthcarePNG from '@/assets/images/perks-benefits/healthcare.png'
import disabilityPNG from '@/assets/images/perks-benefits/disability.png'
import handheartPNG from '@/assets/images/perks-benefits/hand-heart.png'
import hsaPNG from '@/assets/images/perks-benefits/HSA.png'
import moneyPNG from '@/assets/images/perks-benefits/Money.png'
import willprepPNG from '@/assets/images/perks-benefits/will-prep.png'
import glassesPNG from '@/assets/images/perks-benefits/glasses.png'
import petinsurancePNG from '@/assets/images/perks-benefits/pet-insurance.png'
import evenmorePNG from '@/assets/images/perks-benefits/evenmore.png'

import { StaticImageData } from 'next/image';

export type ImageTextProps = {
    header: string;
    paragraph: string;
    src: StaticImageData;
    size: number;
}

export const benefitsData = [
    {
        header: "Healthcare",
        paragraph: "Choose from HMO or PPO options for individual, plus one, or family coverage. Dental included. All plans 83/17 split.",
        src: healthcarePNG,
        size: 70
    },
    {
        header: "Disability Benefits",
        paragraph: "Short-Term Disability and Basic Life Insurance to $50,000. Supplemental Life to $250,000 available, with insurability requirements.",
        src: disabilityPNG,
        size: 70
    },  
      {
        header: "Helping Hand",
        paragraph: "Independent and confidential Employee Assistance Program",
        src: handheartPNG,
        size: 70
    }, 
       {
        header: "HSA",
        paragraph: "Healthcare Savings Account with election of qualifying coverage. Vernacular contributes $2,000 per year. ",
        src: hsaPNG,
        size: 70
    },
    {
        header: "Retirement",
        paragraph: "401(k) through an intuitive and flexible platform.",
        src: moneyPNG,
        size: 70
    },
    {
        header: "Planning Ahead",
        paragraph: "Independent and confidential Will Preparation services.",
        src: willprepPNG,
        size: 70
    },
    {
        header: "Vision Coverage",
        paragraph: "Vernacular covers 100% of Vision costs for individual elections. Small fee for dependent coverage.",
        src: glassesPNG,
        size: 70
    },
    {
        header: "Have Pets?",
        paragraph: "Total Pet Plan and Wishbone Insurance.",
        src: petinsurancePNG,
        size: 70
    },
        {
        header: "And Even More!",
        paragraph: "Unlimited PTO, Flexible WFH Friday, Lunches, Life Improvement Benefits",
        src: evenmorePNG,
        size: 70
    },
    
]