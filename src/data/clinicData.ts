import { ClinicInfo, DentalService, GalleryImage, ReviewItem } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: "Dr. Jatkar's Dental Clinic",
  marathiName: "डॉ. जातकर'स डेंटल क्लिनिक",
  doctorName: "Dr. Rohit Jatkar",
  address: "Gangakamal, Road No. 7, Raviraj Apartment, Shop No. 6, Tingre Nagar Rd, Opp. Axis Bank ATM, Vishrantwadi",
  landmark: "Opp. Axis Bank ATM, Tingre Nagar",
  area: "Tingre Nagar, Vishrantwadi",
  city: "Pune",
  pincode: "411032",
  phone: "+91 74999 31696",
  formattedPhone: "+917499931696",
  plusCode: "HVGR+X7 Pune, Maharashtra",
  rating: 5.0,
  reviewCount: 17,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dr.+Jatkar's+Dental+Clinic+Tingre+Nagar+Pune+HVGR%2BX7",
  whatsappUrl: "https://wa.me/917499931696?text=Hello%20Dr.%20Jatkar's%20Dental%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation%20appointment.",
  whatsappNumber: "917499931696",
};

export const SERVICES: DentalService[] = [
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Permanent, natural-looking replacement solutions for missing teeth that restore full bite strength and facial structure.",
    iconName: "ShieldCheck",
    benefits: ["Natural appearance & feel", "Prevents jawbone erosion", "Long-lasting stability"],
    recommendedFor: "Patients seeking fixed, durable replacement for one or more missing teeth."
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Gentle and pain-relieving procedure designed to save infected or severely damaged teeth from extraction.",
    iconName: "Sparkles",
    benefits: ["Immediate pain relief", "Preserves natural tooth structure", "Prevents spread of infection"],
    recommendedFor: "Severe toothaches, deep decay, sensitivity, or infected dental pulp."
  },
  {
    id: "dental-crowns",
    title: "Dental Crowns",
    description: "Custom-crafted protective caps that restore strength, size, shape, and appearance of weak or damaged teeth.",
    iconName: "Crown",
    benefits: ["Restores chewing function", "Protects fractured or worn teeth", "Aesthetically blends with natural enamel"],
    recommendedFor: "Teeth after root canal treatment, large fillings, or cracked enamel."
  },
  {
    id: "dental-bridges",
    title: "Bridges",
    description: "Seamless tooth replacement solution anchored to adjacent natural teeth to bridge gaps and stabilize your smile.",
    iconName: "Maximize2",
    benefits: ["Restores complete smile contour", "Prevents remaining teeth from shifting", "Improves speech and chewing ability"],
    recommendedFor: "Replacing consecutive missing teeth without removable dentures."
  },
  {
    id: "braces",
    title: "Braces",
    description: "Traditional and ceramic orthodontic treatment options to align misaligned teeth, fix bite issues, and enhance smile symmetry.",
    iconName: "Grid",
    benefits: ["Fixes complex alignment issues", "Improves overall bite function", "Durable and proven orthodontic results"],
    recommendedFor: "Children, teens, and adults with crooked, crowded, or spaced teeth."
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners",
    description: "Discreet, removable, and comfortable transparent trays designed to align your teeth without metal wires.",
    iconName: "EyeOff",
    benefits: ["Nearly invisible aesthetic", "Removable for easy eating and brushing", "Smooth & gentle on cheeks/gums"],
    recommendedFor: "Adults and teens looking for a subtle, flexible orthodontic alignment option."
  },
  {
    id: "dentures",
    title: "Dentures",
    description: "Custom partial or complete dentures crafted for optimal fit, comfort, and natural chewing capability.",
    iconName: "Smile",
    benefits: ["Customized for facial contour fit", "Restores speech and eating confidence", "Easy cleaning and maintenance"],
    recommendedFor: "Elderly patients or individuals needing full or partial arch replacement."
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Smile enhancement procedures including professional teeth whitening, cosmetic bonding, and smile makeovers.",
    iconName: "Sparkle",
    benefits: ["Brightens stained teeth", "Corrects minor chips and gaps", "Boosts overall smile confidence"],
    recommendedFor: "Anyone desiring a cleaner, brighter, and more symmetrical aesthetic smile."
  },
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description: "Comprehensive oral health examinations, tooth-colored fillings, tartar cleaning, and preventive care.",
    iconName: "Activity",
    benefits: ["Early detection of oral issues", "Painless dental cleaning & polishing", "Tooth-colored composite restorations"],
    recommendedFor: "Routine family dental checkups and preventive maintenance every 6 months."
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    author: "Vinod Manekia",
    rating: 5,
    text: "Parents denture, wife's root canal and my filling was done very well without any complaints. All issues were sorted out to our satisfaction. Very good value for money and great job.",
    highlight: "Complete family dental care & satisfaction",
    date: "Recent Google Review"
  },
  {
    id: "review-2",
    author: "Gaurav Pandey",
    rating: 5,
    text: "Had a great experience at this dental clinic. Got my crown treatment done smoothly and the entire process was comfortable and professional. Highly recommended!",
    highlight: "Smooth crown treatment & professional care",
    date: "Recent Google Review"
  },
  {
    id: "review-3",
    author: "Harpal Singh Thukral",
    rating: 5,
    text: "Dr. Jatkar’s Dental Clinic in Tingre Nagar is a specialised care facility with a lot of hands on experience in Dental Field. Dr. Himself is soft spoken and knowledgeable about dental hygiene...",
    highlight: "Soft spoken, experienced & knowledgeable doctor",
    date: "Recent Google Review"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "clinic-1",
    src: "/assets/clinic inside 2.jpg",
    title: "Advanced Dental Operatory & Chair",
    category: "Clinic Interior",
    alt: "Dr. Rohit Jatkar performing careful dental treatment at Dr. Jatkar's Dental Clinic in Tingre Nagar, Pune"
  },
  {
    id: "clinic-2",
    src: "/assets/clinic inside.jpg",
    title: "Sterilized Equipment & Treatment Environment",
    category: "Equipment & Safety",
    alt: "Modern operatory unit with GOMAX x-ray equipment and UV chamber at Dr. Jatkar's Dental Clinic"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Patient-Centered Care",
    description: "Every treatment plan is tailored strictly around your personal oral health goals, comfort, and peace of mind.",
    icon: "Heart"
  },
  {
    title: "Comfortable Treatment Experience",
    description: "Gentle techniques, quiet environment, and thoughtful care designed to minimize discomfort and dental anxiety.",
    icon: "Feather"
  },
  {
    title: "Clear Treatment Guidance",
    description: "Dr. Jatkar explains procedure steps clearly so you understand your options before any treatment begins.",
    icon: "Compass"
  },
  {
    title: "Modern Dental Care",
    description: "Equipped with high standards of clinical hygiene, digital diagnosis tools, and modern dental equipment.",
    icon: "Shield"
  },
  {
    title: "Family-Friendly Approach",
    description: "Compassionate dental checkups and treatments tailored for children, adults, and senior family members.",
    icon: "Users"
  },
  {
    title: "Transparent Communication",
    description: "Honest advice, clear cost estimations without hidden charges, and honest follow-up guidance.",
    icon: "CheckCircle2"
  }
];

export const FAQS = [
  {
    question: "Where is Dr. Jatkar's Dental Clinic located in Pune?",
    answer: "The clinic is located at Shop No. 6, Raviraj Apartment, Gangakamal, Road No. 7, Tingre Nagar Rd, Opposite Axis Bank ATM, Vishrantwadi, Pune, Maharashtra 411032."
  },
  {
    question: "Is root canal treatment painful at Dr. Jatkar's Dental Clinic?",
    answer: "Root canal treatments are performed with effective local anesthesia and gentle techniques to ensure a painless and comfortable experience."
  },
  {
    question: "How do I decide between traditional braces and clear aligners?",
    answer: "During your consultation, Dr. Jatkar evaluates your dental alignment, bite complexity, lifestyle, and preferences to recommend whether braces or aligners are right for you."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment directly through our website, call us at +91 74999 31696, or send us a message on WhatsApp for instant confirmation."
  }
];
