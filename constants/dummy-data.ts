import onboardingOne from "@/assets/svg/onboarding/onboarding-1.png";
import onboardingTwo from "@/assets/svg/onboarding/onboarding-2.png";
import onboardingThree from "@/assets/svg/onboarding/onboarding-3.png";
import { CategoryCardType, CategoryType, ModeType } from "@/types/index.types";

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

// ----------------- Delete --------------------
export const CATEGORY: CategoryType = "animals";

export const GAME_SETTING = {
  imposterCount: 1,
  turnTimer: 5,
  durationTimer: 120,
  canImposterGetHint: false,
};

export const WORD = {
  id: "1",
  text: "ရေခဲမုန့်",
  imageId: svg.food,
  hint: "နွေရာသီ",
};

export const QUESTION = {
  id: "2",
  text: " မန်ယူဖန်ဖြစ်ရတာဘယ်လိုနေလဲ?",
  imageId: svg.imagination,
  hint: "အရူးလင်လုပ်",
};

// export const GAME_CONFIG: GameConfigType = {
//   id: "1",
//   players: [],
//   gameMode: "word",
//   category: CATEGORY,
//   gameSetting: GAME_SETTING,
//   word: WORD,
//   question: QUESTION,
//   roundCount: 3,
//   imposterId: "3",
// };
