import onboardingOne from "@/assets/svg/onboarding/onboarding-1.png";
import onboardingTwo from "@/assets/svg/onboarding/onboarding-2.png";
import onboardingThree from "@/assets/svg/onboarding/onboarding-3.png";
import dataCollection from "@/data-collection.json";
import {
  CategoryCardType,
  CategoryType,
  ModeType,
  QuestionType,
  SettingType,
  WordType,
} from "@/types/index.types";

import { CONFIG } from "./config";
import { images } from "./icons";

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
    icon: images.wordMode,
  },
  {
    id: "question",
    title: "အမေးအဖြေဂိမ်း",
    desc: "မေးခွန်းမသိဘဲ ဖြေနေတဲ့သူကို ရှာမယ်",
    icon: images.questionMode,
  },
];

export const SETTING_ITEMS: SettingType[] = [
  {
    id: "music",
    label: "နောက်ခံသီချင်း",
    icon: {
      family: "Ionicons",
      name: "musical-notes-outline",
    },
    hasToggle: true,
  },
  {
    id: "sound",
    label: "အသံ",
    icon: {
      family: "Ionicons",
      name: "volume-high-outline",
    },
    hasToggle: true,
  },
  {
    id: "privacy",
    label: "ဥပဒေရေးရာနှင့် ကိုယ်ရေးလုံခြုံမှု",
    icon: {
      family: "MaterialCommunityIcons",
      name: "incognito",
    },
    route: CONFIG.PRIVACY,
  },
  {
    id: "chat",
    label: "ဆက်သွယ်ရန်",
    icon: {
      family: "Ionicons",
      name: "chatbubble-ellipses-outline",
    },
    route: CONFIG.CONTACT,
  },
];

export const CATEGORIES: CategoryCardType[] = [
  {
    type: "animals",
    title: "တိရစ္ဆာန်များ",
    image: images.animals,
  },
  {
    type: "foods",
    title: "အစားအသောက်",
    image: images.food,
  },
  {
    type: "locations",
    title: "နေရာဒေသ",
    image: images.place,
  },
  {
    type: "countries",
    title: "နိုင်ငံများ",
    image: images.country,
  },
  {
    type: "movies",
    title: "ရုပ်ရှင်",
    image: images.movie,
  },
  {
    type: "jobs",
    title: "အလုပ်အကိုင်",
    image: images.job,
  },
  {
    type: "technologies",
    title: "နည်းပညာ",
    image: images.tech,
  },
  {
    type: "imaginations",
    title: "စိတ်ကူးယဉ် အရာများ",
    image: images.imagination,
  },
  {
    type: "supes",
    title: "စူပါဟီးရိုးများ",
    image: images.supe,
  },
  {
    type: "nature",
    title: "သဘာဝ",
    image: images.nature,
  },
  {
    type: "histories",
    title: "သမိုင်း",
    image: images.history,
  },
  {
    type: "sports",
    title: "အားကစား",
    image: images.sport,
  },
];

export const WORDS_BY_CATEGORY: Record<CategoryType, WordType[]> =
  dataCollection.wordsByCategory as Record<CategoryType, WordType[]>;

export const QUESTIONS_BY_CATEGORY: Record<CategoryType, QuestionType[]> =
  dataCollection.questionsByCategory as Record<CategoryType, QuestionType[]>;

export const TEAMMATES_WIN_QUOTES = dataCollection.teammatesWinQuotes;

export const IMPOSTER_WIN_QUOTES = dataCollection.imposterWinQuotes;
