import onboardingOne from "@/assets/svg/onboarding/onboarding-1.png";
import onboardingTwo from "@/assets/svg/onboarding/onboarding-2.png";
import onboardingThree from "@/assets/svg/onboarding/onboarding-3.png";
import {
  CategoryCardType,
  CategoryType,
  ModeType,
  QuestionType,
  WordType,
} from "@/types/index.types";

import { svg } from "./icons";

export const ONBOARDING_STEPS = [
  {
    title: "စကားလုံးစစ်ပွဲ စတင်ပါပြီ",
    description:
      "သူငယ်ချင်းတွေထဲမှာ ဘယ်သူက အမှန်တရားကို ရှာဖွေသူလဲ? ဘယ်သူကတော့ ဟန်ဆောင်ကောင်းတဲ့ Imposterလဲဆိုတာ ဖော်ထုတ်ကြည့်လိုက်ပါ။",
    image: onboardingOne,
  },
  {
    title: "လူတိုင်းကို သံသယဝင်ပါ",
    description:
      "အခြားသူတွေပြောတာကို သေချာနားထောင်ပြီး Imposterကို ဖော်ထုတ်ပါ။ သင်ကောဘယ်သူလဲ? ရိုးသားတဲ့Teammateလား? ဒါမှမဟုတ် အမှောင်ထုထဲမှာ ပုန်းအောင်းနေတဲ့Imposterလား?",
    image: onboardingTwo,
  },
  {
    title: "အသင့်ဖြစ်ပြီလား",
    description:
      "သူငယ်ချင်းများနှင့်အတူ စိတ်လှုပ်ရှားဖွယ် Imposter ဂိမ်းကို အခုပဲ အတူ ကစားပြီး ပျော်ရွှင်လိုက်ပါ။",
    image: onboardingThree,
  },
];

export const MODES: ModeType[] = [
  {
    id: "word",
    title: "စကားလုံးဂိမ်း",
    desc: "လျှို့ဝှက်စကားလုံး မသိတဲ့သူကို ရှာမယ်",
    icon: svg.wordMode,
  },
  {
    id: "question",
    title: "အမေးအဖြေဂိမ်း",
    desc: "မေးခွန်းမသိဘဲ ဖြေနေတဲ့သူကို ရှာမယ်",
    icon: svg.questionMode,
  },
];

export const CATEGORIES: CategoryCardType[] = [
  {
    type: "animals",
    title: "တိရစ္ဆာန်များ",
    image: svg.animals,
  },
  {
    type: "foods",
    title: "အစားအသောက်",
    image: svg.food,
  },
  {
    type: "locations",
    title: "နေရာဒေသ",
    image: svg.place,
  },
  {
    type: "countries",
    title: "နိုင်ငံများ",
    image: svg.country,
  },
  {
    type: "movies",
    title: "ရုပ်ရှင်",
    image: svg.movie,
  },
  {
    type: "jobs",
    title: "အလုပ်အကိုင်",
    image: svg.job,
  },
  {
    type: "technologies",
    title: "နည်းပညာ",
    image: svg.tech,
  },
  {
    type: "imaginations",
    title: "စိတ်ကူးယဉ် အရာများ",
    image: svg.imagination,
  },
  {
    type: "supes",
    title: "စူပါဟီးရိုးများ",
    image: svg.supe,
  },
  {
    type: "nature",
    title: "သဘာဝ",
    image: svg.nature,
  },
  {
    type: "histories",
    title: "သမိုင်း",
    image: svg.history,
  },
  {
    type: "sports",
    title: "အားကစား",
    image: svg.sport,
  },
];

export const WORDS_BY_CATEGORY: Record<CategoryType, WordType[]> = {
  animals: [
    { id: "w-animals-1", text: "ဆင်", imageId: null, hint: "တောတွင်းhint" },
    { id: "w-animals-2", text: "ဆင်2", imageId: null, hint: "တောတွင်းhint2" },
  ],
  foods: [
    {
      id: "w-foods-1",
      text: "မုန့်ဟင်းခါး",
      imageId: null,
      hint: "နံနက်စာhint",
    },
    {
      id: "w-foods-2",
      text: "မုန့်ဟင်းခါး2",
      imageId: null,
      hint: "နံနက်စာhint2",
    },
  ],
  locations: [
    {
      id: "w-locations-1",
      text: "ဘုရားကျောင်း",
      imageId: null,
      hint: "ခရီးသွားhint",
    },
    {
      id: "w-locations-2",
      text: "ဘုရားကျောင်2",
      imageId: null,
      hint: "ခရီးသွားhint2",
    },
  ],
  countries: [
    { id: "w-countries-1", text: "ဂျပန်", imageId: null, hint: "အာရှhint" },
    { id: "w-countries-2", text: "ဂျပန်2", imageId: null, hint: "အာရှhint2" },
  ],
  movies: [
    {
      id: "w-movies-1",
      text: "Titanic",
      imageId: null,
      hint: "ချစ်ခြင်းမေတ္တာhint",
    },
    {
      id: "w-movies-2",
      text: "Titanic2",
      imageId: null,
      hint: "ချစ်ခြင်းမေတ္တာhint2",
    },
  ],
  jobs: [
    { id: "w-jobs-1", text: "ဆရာဝန်", imageId: null, hint: "ဆေးရုံhint" },
    { id: "w-jobs-2", text: "ဆရာဝန်2", imageId: null, hint: "ဆေးရုံ2hint" },
  ],
  technologies: [
    {
      id: "w-technologies-1",
      text: "Artificial Intelligence",
      imageId: null,
      hint: "နည်းပညာhint",
    },
    {
      id: "w-technologies-2",
      text: "Artificial Intelligence2",
      imageId: null,
      hint: "နည်းပညာhint2",
    },
  ],
  imaginations: [
    {
      id: "w-imaginations-1",
      text: "အချိန်ခရီးသွား",
      imageId: null,
      hint: "စိတ်ကူးယဉ်hint",
    },
    {
      id: "w-imaginations-2",
      text: "အချိန်ခရီးသွား2",
      imageId: null,
      hint: "စိတ်ကူးယဉ်hint2",
    },
  ],
  supes: [
    { id: "w-supes-1", text: "Spider-Man", imageId: null, hint: "Herohint" },
    { id: "w-supes-2", text: "Spider-Man2", imageId: null, hint: "Herohint2" },
  ],
  nature: [
    { id: "w-nature-1", text: "တောင်တန်း", imageId: null, hint: "သဘာဝhint" },
    { id: "w-nature-2", text: "တောင်တန်း2", imageId: null, hint: "သဘာဝhint2" },
  ],
  histories: [
    { id: "w-histories-1", text: "ပဂံ", imageId: null, hint: "သမိုင်းဝင်hint" },
    {
      id: "w-histories-2",
      text: "ပဂံ2",
      imageId: null,
      hint: "သမိုင်းဝင်hint2",
    },
  ],
  sports: [
    { id: "w-sports-1", text: "ဘောလုံး", imageId: null, hint: "အသင်းhint" },
    { id: "w-sports-2", text: "ဘောလုံး2", imageId: null, hint: "အသင်းhint2" },
  ],
};

export const QUESTIONS_BY_CATEGORY: Record<CategoryType, QuestionType[]> = {
  animals: [
    {
      id: "q-animals-1",
      text: "ဒီတိရစ္ဆာန်က တောထဲမှာ နေတတ်လား?",
      imageId: null,
      hint: "တိရစ္ဆာန်hint",
    },
    {
      id: "q-animals-2",
      text: "ဒီတိရစ္ဆာန်က တောထဲမှာ နေတတ်လား?2",
      imageId: null,
      hint: "တိရစ္ဆာန်hint2",
    },
  ],
  foods: [
    {
      id: "q-foods-1",
      text: "ဒီအစားအစာကို မနက်စာအဖြစ် စားလေ့ရှိလား?",
      imageId: null,
      hint: "အစားအသောက်hint",
    },
    {
      id: "q-foods-2",
      text: "ဒီအစားအစာကို မနက်စာအဖြစ် စားလေ့ရှိလား?2",
      imageId: null,
      hint: "အစားအသောက်hint2",
    },
  ],
  locations: [
    {
      id: "q-locations-1",
      text: "ဒီနေရာက ခရီးသွားတွေအများကြီး သွားလေ့ရှိတဲ့နေရာလား?",
      imageId: null,
      hint: "နေရာhint",
    },
    {
      id: "q-locations-2",
      text: "ဒီနေရာက ခရီးသွားတွေအများကြီး သွားလေ့ရှိတဲ့နေရာလား?2",
      imageId: null,
      hint: "နေရာhint2",
    },
  ],
  countries: [
    {
      id: "q-countries-1",
      text: "ဒီနိုင်ငံက အာရှတိုက်ထဲမှာ ပါလား?",
      imageId: null,
      hint: "နိုင်ငံhint",
    },
    {
      id: "q-countries-2",
      text: "ဒီနိုင်ငံက အာရှတိုက်ထဲမှာ ပါလား?2",
      imageId: null,
      hint: "နိုင်ငံhint2",
    },
  ],
  movies: [
    {
      id: "q-movies-1",
      text: "ဒီရုပ်ရှင်က ချစ်ခြင်းမေတ္တာအကြောင်းလား?",
      imageId: null,
      hint: "ရုပ်ရှင်hint",
    },
    {
      id: "q-movies-2",
      text: "ဒီရုပ်ရှင်က ချစ်ခြင်းမေတ္တာအကြောင်းလား?2",
      imageId: null,
      hint: "ရုပ်ရှင်hint2",
    },
  ],
  jobs: [
    {
      id: "q-jobs-1",
      text: "ဒီအလုပ်က လူနာတွေကို ကူညီရတဲ့အလုပ်လား?",
      imageId: null,
      hint: "အလုပ်hint",
    },
    {
      id: "q-jobs-2",
      text: "ဒီအလုပ်က လူနာတွေကို ကူညီရတဲ့အလုပ်လား?2",
      imageId: null,
      hint: "အလုပ်hint2",
    },
  ],
  technologies: [
    {
      id: "q-technologies-1",
      text: "ဒီနည်းပညာကို ဖုန်းထဲမှာတောင် သုံးနေပြီလား?",
      imageId: null,
      hint: "နည်းပညာhint",
    },
    {
      id: "q-technologies-2",
      text: "ဒီနည်းပညာကို ဖုန်းထဲမှာတောင် သုံးနေပြီလား?2",
      imageId: null,
      hint: "နည်းပညာhint2",
    },
  ],
  imaginations: [
    {
      id: "q-imaginations-1",
      text: "ဒီအရာက အဖြစ်မှန်မဟုတ်ဘဲ စိတ်ကူးယဉ်လား?",
      imageId: null,
      hint: "စိတ်ကူးယဉ်hint",
    },
    {
      id: "q-imaginations-1",
      text: "ဒီအရာက အဖြစ်မှန်မဟုတ်ဘဲ စိတ်ကူးယဉ်လား?",
      imageId: null,
      hint: "စိတ်ကူးယဉ်hint2",
    },
  ],
  supes: [
    {
      id: "q-supes-1",
      text: "ဒီဟီးရိုးက ဝက်ဘ်ပစ်နိုင်လား?",
      imageId: null,
      hint: "Herohint",
    },
    {
      id: "q-supes-2",
      text: "ဒီဟီးရိုးက ဝက်ဘ်ပစ်နိုင်လား?2",
      imageId: null,
      hint: "Herohint2",
    },
  ],
  nature: [
    {
      id: "q-nature-1",
      text: "ဒီအရာကို သဘာဝပတ်ဝန်းကျင်ထဲမှာ တွေ့ရလား?",
      imageId: null,
      hint: "သဘာဝhint",
    },
    {
      id: "q-nature-2",
      text: "ဒီအရာကို သဘာဝပတ်ဝန်းကျင်ထဲမှာ တွေ့ရလား?2",
      imageId: null,
      hint: "သဘာဝhint2",
    },
  ],
  histories: [
    {
      id: "q-histories-1",
      text: "ဒီအရာက သမိုင်းဝင်တန်ဖိုးရှိလား?",
      imageId: null,
      hint: "သမိုင်းhint",
    },
    {
      id: "q-histories-2",
      text: "ဒီအရာက သမိုင်းဝင်တန်ဖိုးရှိလား?2",
      imageId: null,
      hint: "သမိုင်းhint2",
    },
  ],
  sports: [
    {
      id: "q-sports-1",
      text: "ဒီအားကစားမှာ အသင်းလိုက်ကစားရလား?",
      imageId: null,
      hint: "အားကစားhint",
    },
    {
      id: "q-sports-12",
      text: "ဒီအားကစားမှာ အသင်းလိုက်ကစားရလား?2",
      imageId: null,
      hint: "အားကစားhint2",
    },
  ],
};
