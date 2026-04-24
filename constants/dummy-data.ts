import onboardingOne from "@/assets/svg/onboarding/onboarding-1.png";
import onboardingTwo from "@/assets/svg/onboarding/onboarding-2.png";
import onboardingThree from "@/assets/svg/onboarding/onboarding-3.png";
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
    icon: require("@/assets/svg/music-icon.svg"),
    hasToggle: true,
  },
  {
    id: "sound",
    label: "အသံ",
    icon: require("@/assets/svg/speaker-icon.svg"),
    hasToggle: true,
  },
  {
    id: "privacy",
    label: "ဥပဒေရေးရာနှင့် ကိုယ်ရေးလုံခြုံမှု",
    icon: require("@/assets/svg/incognito-icon.svg"),
    route: CONFIG.PRIVACY,
  },
  {
    id: "chat",
    label: "ဆက်သွယ်ရန်",
    icon: require("@/assets/svg/chat-icon.svg"),
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

export const WORDS_BY_CATEGORY: Record<CategoryType, WordType[]> = {
  animals: [
    { id: "w-animals-1", text: "ကြောင်", image: null, hint: "အိမ်မွေး" },
    { id: "w-animals-2", text: "ခွေး", image: null, hint: "လုံခြုံရေး" },
    { id: "w-animals-3", text: "ကျား", image: null, hint: "တော" },
    { id: "w-animals-4", text: "ဆင်", image: null, hint: "ကြီးမား" },
    { id: "w-animals-5", text: "နွား", image: null, hint: "နို့" },
    { id: "w-animals-6", text: "မြင်း", image: null, hint: "မြန်" },
    { id: "w-animals-7", text: "ဝက်", image: null, hint: "စားသုံး" },
    { id: "w-animals-8", text: "ကျားသစ်", image: null, hint: "စက်ကွက်" },
    { id: "w-animals-9", text: "ကြက်", image: null, hint: "ဥ" },
    { id: "w-animals-10", text: "ငှက်", image: null, hint: "ပျံ" },
    { id: "w-animals-11", text: "မြွေ", image: null, hint: "ရှည်" },
    { id: "w-animals-12", text: "ဖား", image: null, hint: "ခုန်" },
  ],
  foods: [
    { id: "w-foods-1", text: "မုန့်ဟင်းခါး", image: null, hint: "မနက်စာ" },
    { id: "w-foods-2", text: "ရေခဲမုန့်", image: null, hint: "နွေရာသီ" },
    { id: "w-foods-3", text: "ပီဇာ", image: null, hint: "အနောက်တိုင်း" },
    { id: "w-foods-4", text: "ဟမ်ဘာဂါ", image: null, hint: "fast food" },
  ],
  locations: [
    { id: "w-locations-1", text: "ကျောင်း", image: null, hint: "သင်ကြား" },
    { id: "w-locations-2", text: "ဆေးရုံ", image: null, hint: "ကျန်းမာရေး" },
    { id: "w-locations-3", text: "စျေး", image: null, hint: "ဝယ်ယူ" },
    { id: "w-locations-4", text: "လေဆိပ်", image: null, hint: "လေယာဉ်" },
  ],
  countries: [
    { id: "w-countries-1", text: "မြန်မာ", image: null, hint: "အာရှ" },
    { id: "w-countries-2", text: "ဂျပန်", image: null, hint: "နည်းပညာ" },
    { id: "w-countries-3", text: "အမေရိကန်", image: null, hint: "ကြီးမား" },
    { id: "w-countries-4", text: "ကိုရီးယား", image: null, hint: "K-pop" },
  ],
  movies: [
    { id: "w-movies-1", text: "Titanic", image: null, hint: "သင်္ဘော" },
    { id: "w-movies-2", text: "Avengers", image: null, hint: "hero" },
    { id: "w-movies-3", text: "Harry Potter", image: null, hint: "magic" },
    { id: "w-movies-4", text: "Frozen", image: null, hint: "snow" },
  ],
  jobs: [
    { id: "w-jobs-1", text: "ဆရာဝန်", image: null, hint: "ဆေးရုံ" },
    { id: "w-jobs-2", text: "ဆရာ", image: null, hint: "ကျောင်း" },
    { id: "w-jobs-3", text: "ရဲ", image: null, hint: "လုံခြုံရေး" },
    { id: "w-jobs-4", text: "အင်ဂျင်နီယာ", image: null, hint: "တည်ဆောက်" },
  ],
  technologies: [
    {
      id: "w-technologies-1",
      text: "မိုဘိုင်းဖုန်း",
      image: null,
      hint: "ဆက်သွယ်",
    },
    { id: "w-technologies-2", text: "လက်ပ်တော့", image: null, hint: "အလုပ်" },
    { id: "w-technologies-3", text: "အင်တာနက်", image: null, hint: "online" },
    { id: "w-technologies-4", text: "AI", image: null, hint: "smart" },
  ],
  imaginations: [
    { id: "w-imaginations-1", text: "နဂါး", image: null, hint: "ပျံနိုင်" },
    { id: "w-imaginations-2", text: "ဝိညာဉ်", image: null, hint: "မမြင်ရ" },
    { id: "w-imaginations-3", text: "မယ်မင်း", image: null, hint: "ပုံပြင်" },
    {
      id: "w-imaginations-4",
      text: "ဒိုင်နိုဆော",
      image: null,
      hint: "ရှေးခေတ်",
    },
  ],
  supes: [
    { id: "w-supes-1", text: "Superman", image: null, hint: "ပျံ" },
    { id: "w-supes-2", text: "Batman", image: null, hint: "dark" },
    { id: "w-supes-3", text: "Spider-Man", image: null, hint: "web" },
    { id: "w-supes-4", text: "Iron Man", image: null, hint: "tech suit" },
  ],
  nature: [
    { id: "w-nature-1", text: "တောင်", image: null, hint: "မြင့်" },
    { id: "w-nature-2", text: "မြစ်", image: null, hint: "ရေ" },
    { id: "w-nature-3", text: "သစ်တော", image: null, hint: "အပင်" },
    { id: "w-nature-4", text: "ပင်လယ်", image: null, hint: "ကြီးမား" },
  ],
  histories: [
    { id: "w-histories-1", text: "ဘုရင့်နောင်", image: null, hint: "ဘုရင်" },
    { id: "w-histories-2", text: "ပုဂံ", image: null, hint: "ရှေးဟောင်း" },
    {
      id: "w-histories-3",
      text: "တော်လှန်ရေး",
      image: null,
      hint: "ပြောင်းလဲ",
    },
    {
      id: "w-histories-4",
      text: "အင်္ဂလိပ်ခေတ်",
      image: null,
      hint: "ကိုလိုနီ",
    },
  ],
  sports: [
    { id: "w-sports-1", text: "ဘောလုံး", image: null, hint: "ကန်" },
    { id: "w-sports-2", text: "ဘတ်စကက်ဘော", image: null, hint: "ခုန်" },
    { id: "w-sports-3", text: "တင်နစ်", image: null, hint: "ရိုက်" },
    { id: "w-sports-4", text: "ပြေး", image: null, hint: "မြန်" },
  ],
};

export const QUESTIONS_BY_CATEGORY: Record<CategoryType, QuestionType[]> = {
  animals: [
    {
      id: "q-animals-1",
      text: "ဘယ်တိရစ္ဆာန်တွေကို အိမ်မှာမွေးကြလဲ",
      image: null,
      hint: "တိရစ္ဆာန်",
    },
    {
      id: "q-animals-2",
      text: "တောထဲမှာ ဘာတိရစ္ဆာန်တွေရှိလဲ",
      image: null,
      hint: "wild",
    },
    {
      id: "q-animals-3",
      text: "ဘယ်တိရစ္ဆာန်က ကြီးမားဆုံးလဲ",
      image: null,
      hint: "big",
    },
    {
      id: "q-animals-4",
      text: "ဘယ်တိရစ္ဆာန်က အမြန်ဆုံးလဲ",
      image: null,
      hint: "fast",
    },
  ],
  foods: [
    {
      id: "q-foods-1",
      text: "မနက်စာအတွက် ဘာစားကြလဲ",
      image: null,
      hint: "စား",
    },
    {
      id: "q-foods-2",
      text: "နွေရာသီမှာ ဘာအစားအစာစားကြလဲ",
      image: null,
      hint: "အေး",
    },
    {
      id: "q-foods-3",
      text: "fast food တွေက ဘာတွေရှိလဲ",
      image: null,
      hint: "quick",
    },
    {
      id: "q-foods-4",
      text: "သင်ကြိုက်တဲ့ အစားအစာကဘာလဲ",
      image: null,
      hint: "ကြိုက်",
    },
  ],
  locations: [
    {
      id: "q-locations-1",
      text: "စာသင်ဖို့ ဘယ်နေရာကို သွားလဲ",
      image: null,
      hint: "study",
    },
    {
      id: "q-locations-2",
      text: "နာမကျန်းရင် ဘယ်သွားလဲ",
      image: null,
      hint: "health",
    },
    {
      id: "q-locations-3",
      text: "ဝယ်ယူဖို့ ဘယ်နေရာကို သွားလဲ",
      image: null,
      hint: "buy",
    },
    {
      id: "q-locations-4",
      text: "လေယာဉ်စီးဖို့ ဘယ်သွားလဲ",
      image: null,
      hint: "travel",
    },
  ],
  countries: [
    {
      id: "q-countries-1",
      text: "သင်ဘယ်နိုင်ငံမှာနေသလဲ",
      image: null,
      hint: "country",
    },
    {
      id: "q-countries-2",
      text: "နည်းပညာကောင်းတဲ့နိုင်ငံကဘာလဲ",
      image: null,
      hint: "tech",
    },
    {
      id: "q-countries-3",
      text: "အကြီးဆုံးနိုင်ငံကဘာလဲ",
      image: null,
      hint: "big",
    },
    {
      id: "q-countries-4",
      text: "K-pop က ဘယ်နိုင်ငံကလဲ",
      image: null,
      hint: "music",
    },
  ],
  movies: [
    {
      id: "q-movies-1",
      text: "သင်ကြိုက်တဲ့ ရုပ်ရှင်ကဘာလဲ",
      image: null,
      hint: "movie",
    },
    {
      id: "q-movies-2",
      text: "superhero movie တွေကဘာလဲ",
      image: null,
      hint: "hero",
    },
    {
      id: "q-movies-3",
      text: "magic ပါတဲ့ ရုပ်ရှင်တွေကဘာလဲ",
      image: null,
      hint: "magic",
    },
    {
      id: "q-movies-4",
      text: "animation movie တွေကဘာလဲ",
      image: null,
      hint: "cartoon",
    },
  ],
  jobs: [
    {
      id: "q-jobs-1",
      text: "ဆေးရုံမှာ ဘယ်သူအလုပ်လုပ်လဲ",
      image: null,
      hint: "health",
    },
    {
      id: "q-jobs-2",
      text: "ကျောင်းမှာ ဘယ်သူသင်ပေးလဲ",
      image: null,
      hint: "teach",
    },
    {
      id: "q-jobs-3",
      text: "လုံခြုံရေးကို ဘယ်သူတာဝန်ယူလဲ",
      image: null,
      hint: "safe",
    },
    {
      id: "q-jobs-4",
      text: "တည်ဆောက်တဲ့အလုပ်ကဘာလဲ",
      image: null,
      hint: "build",
    },
  ],
  technologies: [
    {
      id: "q-technologies-1",
      text: "ဆက်သွယ်ဖို့ ဘာအသုံးပြုလဲ",
      image: null,
      hint: "phone",
    },
    {
      id: "q-technologies-2",
      text: "အလုပ်လုပ်ဖို့ laptop ကို ဘာကြောင့်သုံးလဲ",
      image: null,
      hint: "work",
    },
    {
      id: "q-technologies-3",
      text: "internet က ဘာအတွက်လဲ",
      image: null,
      hint: "online",
    },
    {
      id: "q-technologies-4",
      text: "AI ဆိုတာဘာလဲ",
      image: null,
      hint: "smart",
    },
  ],
  imaginations: [
    {
      id: "q-imaginations-1",
      text: "ပျံနိုင်တဲ့ စိတ်ကူးယဉ်အရာတွေကဘာလဲ",
      image: null,
      hint: "fly",
    },
    {
      id: "q-imaginations-2",
      text: "မမြင်ရတဲ့အရာတွေကဘာလဲ",
      image: null,
      hint: "invisible",
    },
    {
      id: "q-imaginations-3",
      text: "ပုံပြင်ထဲက အရာတွေကဘာလဲ",
      image: null,
      hint: "story",
    },
    {
      id: "q-imaginations-4",
      text: "ရှေးခေတ်သတ္တဝါတွေကဘာလဲ",
      image: null,
      hint: "ancient",
    },
  ],
  supes: [
    {
      id: "q-supes-1",
      text: "ဘယ်ဟီးရိုးက ပျံနိုင်လဲ",
      image: null,
      hint: "fly",
    },
    {
      id: "q-supes-2",
      text: "dark hero က ဘယ်သူလဲ",
      image: null,
      hint: "night",
    },
    {
      id: "q-supes-3",
      text: "web သုံးတဲ့ hero ကဘယ်သူလဲ",
      image: null,
      hint: "spider",
    },
    {
      id: "q-supes-4",
      text: "tech suit ဝတ်တဲ့ hero ကဘယ်သူလဲ",
      image: null,
      hint: "iron",
    },
  ],
  nature: [
    {
      id: "q-nature-1",
      text: "မြင့်တဲ့သဘာဝအရာကဘာလဲ",
      image: null,
      hint: "high",
    },
    {
      id: "q-nature-2",
      text: "ရေစီးတဲ့အရာကဘာလဲ",
      image: null,
      hint: "water",
    },
    {
      id: "q-nature-3",
      text: "အပင်များများရှိတဲ့နေရာကဘာလဲ",
      image: null,
      hint: "forest",
    },
    { id: "q-nature-4", text: "ကြီးမားတဲ့ရေကဘာလဲ", image: null, hint: "sea" },
  ],
  histories: [
    {
      id: "q-histories-1",
      text: "ရှေးခေတ်ဘုရင်ကဘယ်သူလဲ",
      image: null,
      hint: "king",
    },
    {
      id: "q-histories-2",
      text: "ရှေးဟောင်းမြို့ကဘာလဲ",
      image: null,
      hint: "ancient",
    },
    {
      id: "q-histories-3",
      text: "ပြောင်းလဲမှုဖြစ်တဲ့အရာကဘာလဲ",
      image: null,
      hint: "change",
    },
    {
      id: "q-histories-4",
      text: "ကိုလိုနီခေတ်ဆိုတာဘာလဲ",
      image: null,
      hint: "colonial",
    },
  ],
  sports: [
    {
      id: "q-sports-1",
      text: "ဘယ်အားကစားကို ကန်ကစားလဲ",
      image: null,
      hint: "kick",
    },
    {
      id: "q-sports-2",
      text: "ဘယ်အားကစားမှာ လှန်ရလဲ",
      image: null,
      hint: "basket",
    },
    {
      id: "q-sports-3",
      text: "ဘယ်အားကစားမှာ ရိုက်ရလဲ",
      image: null,
      hint: "hit",
    },
    {
      id: "q-sports-4",
      text: "ဘယ်အားကစားမှာ ပြေးရလဲ",
      image: null,
      hint: "run",
    },
  ],
};

export const TEAMMATES_WIN_QUOTES = [
  { id: "1", text: "ကမ္ဘာကျော် Imposterကြီး အဖမ်းခံရပါပြီ", isHint: false },
  { id: "2", text: "မိပြီလေ အထာက မရှိဘူး", isHint: false },
  { id: "3", text: "ဒါပဲလေ ၅တန်းကျောင်းသားတောင် ရိပ်မိတယ်", isHint: false },
  {
    id: "4",
    text: "အသေအချာ ချက်ပြုတ်ခံလိုက်ရသော Imposterကြီး ဖြစ်ပါတယ်",
    isHint: false,
  },
  {
    id: "5",
    text: "အထာတွေက နေဝင်သွားတဲ့ Imposter ကြီး ဖြစ်ပါတယ်",
    isHint: false,
  },
  { id: "6", text: "မိမှာပေါ့ နှဖူးမှာ စာကပ်ထားတဲ့အတိုင်းပဲ", isHint: false },
  {
    id: "7",
    text: "တစ်ယောက်ယောက်တော့ ဦးနှောက်ကို အိမ်မှာ မေ့ခဲ့ပုံရတယ်",
    isHint: false,
  },
  {
    id: "8",
    text: "Imposterအစား လူရွှင်တော်လုပ်ပါလား ပိုအောင်မြင်မှာ သေချာတယ်",
    isHint: false,
  },
  { id: "9", text: "ဆရာကြီးတော့ ဆရာကြီးပဲ (ရယ်စရာကြီး)", isHint: false },
  {
    id: "10",
    text: "ချက်ပြုတ်တာကတော့ ဆရာကြီးပဲ၊ ဒါပေမယ့် အချက်လွန်ပြီး ဦးနှောက်ကတော့ အိုးထဲမှာ မီးကျွမ်းသွားရှာပြီ",
    isHint: false,
  },
  {
    id: "11",
    text: "ပိုက်ဆံပေးမယ် ဈေးထဲမှာ ဦးနှောက်သွားဝယ်ချည်",
    isHint: false,
  },
  { id: "12", text: "၂၀၀ ပေးမယ် ဦးနှောက်အစိပ်သား သွားဝယ်ချည်", isHint: false },
  { id: "13", text: "Error 404: Brain Not Found!", isHint: false },
  { id: "14", text: "Hintပေးထားတာတောင် အဖြစ်ကမရှိဘူး", isHint: true },
  {
    id: "15",
    text: "တစ်ယောက်ယောက်ကတော့ ဦးနှောက်ကို Airplane Mode ထားပြီး ဆော့နေတာ သေချာတယ်",
    isHint: false,
  },
  {
    id: "16",
    text: "Imposterလုပ်မယ့်အစား ဦးနှောက်ကို ပြတိုက်မှာ သွားပြလိုက်ပါ၊ 'လုံးဝမသုံးရသေးသောပစ္စည်း' ဆိုပြီးတော့ပေါ့",
    isHint: false,
  },
  {
    id: "17",
    text: "ဆယ်နှစ်ကြိုးစားဖို့ မပြောနဲ့ ဦးနှောက်ကို ပါကင်ဖောက်ဖို့တောင် အချိန်ယူရဦးမယ်ထင်တယ်",
    isHint: false,
  },
];

export const IMPOSTER_WIN_QUOTES = [
  {
    id: "1",
    text: "တစ်ဖွဲ့လုံး ဆရာကျကျ ချက်ပြုတ်ခံလိုက်ရပါပြီ",
    isHint: false,
  },
  {
    id: "2",
    text: "Imposterကို မိဖို့ ဆယ်နှစ် ကြိုးစားလိုက်ဦး",
    isHint: false,
  },
  {
    id: "3",
    text: "တစ်ဖွဲ့လုံးကို လူတွေထင်နေတာ ပြောင်းဖူးတွေ ဖြစ်နေတယ်",
    isHint: false,
  },
  {
    id: "4",
    text: "ဦးနှောက်ကတော့ ရှယ်ပဲ... ဒါပေမယ့် အလှဆင်ဖို့ပဲ သုံးတာထင်တယ်",
    isHint: false,
  },
  {
    id: "5",
    text: "လူကြီးမင်းတို့ရဲ့ စုံထောက်ဉာဏ်ကတော့ ကမ္ဘာ့နံပါတ်တစ်ပါပဲဲ (နောက်ဆုံးကနေ ရေရင််)",
    isHint: false,
  },
  {
    id: "6",
    text: "ဒီလောက် သိသာတာကို မမိတာ တမင်လွှတ်ပေးတာလို့ပဲ ယူဆလိုက်ပါတော့မယ်",
    isHint: false,
  },
  { id: "7", text: "တော်လိုက်တာ ဒီ‌လောက်လွဲအောင် ဘယ်လိုဖြေလဲ", isHint: false },
  { id: "8", text: "တော်ရုံskillနဲ့တော့ တက်မလာနဲ့", isHint: false },
  { id: "9", text: "တော်လိုက်တာ တက်တက်စင်အောင်လွဲ", isHint: false },
  { id: "10", text: "ဆရာကြီးတွေပါပဲ (လွဲတဲ့နေရာမှာ)", isHint: false },
  {
    id: "11",
    text: "အပိုတွေလျှောက်နုတ် အထာတွေလျှောက်ထုတ် နေတာမဟုတ်ဘူး Imposterချက်ပြုတ်နေတာ",
    isHint: false,
  },
  {
    id: "12",
    text: "ပါကင်မဖောက်ရသေးသော ဦးနှောက်များ ရောင်းရန်ရှိသည်",
    isHint: false,
  },
  {
    id: "13",
    text: "တစ်ဖွဲ့လုံး ဦးနှောက်ကို အိမ်မှာ မေ့ကျန်ခဲ့ကြတာလား",
    isHint: false,
  },
  {
    id: "14",
    text: "ကြည့်ရတာတော့... ဒီနေ့ပွဲမှာ ဦးနှောက်ပါတဲ့သူ တစ်ယောက်မှ ပါမလာဘူးထင်တယ်",
    isHint: false,
  },
  {
    id: "15",
    text: "စုံထောက်ဉာဏ်ကတော့ WiFi Signal လိုပဲ လိုတဲ့အချိန်ဆို ပျောက်သွားတယ်",
    isHint: false,
  },
  {
    id: "16",
    text: "တစ်ဖွဲ့လုံး ဦးနှောက်ကို Airplane Mode ထားပြီး ဆော့နေတာ သေချာတယ်",
    isHint: false,
  },
  {
    id: "17",
    text: "လူကြီးမင်းတို့ရဲ့ ဉာဏ်ရည်က Debug လုပ်ဖို့ လိုနေပါပြီ",
    isHint: false,
  },
];
