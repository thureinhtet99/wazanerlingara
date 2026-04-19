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
    { id: "w-animals-1", text: "ကြောင်", imageId: null, hint: "အိမ်မွေး" },
    { id: "w-animals-2", text: "ခွေး", imageId: null, hint: "လုံခြုံရေး" },
    { id: "w-animals-3", text: "ကျား", imageId: null, hint: "တော" },
    { id: "w-animals-4", text: "ဆင်", imageId: null, hint: "ကြီးမား" },
    { id: "w-animals-5", text: "နွား", imageId: null, hint: "နို့" },
    { id: "w-animals-6", text: "မြင်း", imageId: null, hint: "မြန်" },
    { id: "w-animals-7", text: "ဝက်", imageId: null, hint: "စားသုံး" },
    { id: "w-animals-8", text: "ကျားသစ်", imageId: null, hint: "စက်ကွက်" },
    { id: "w-animals-9", text: "ကြက်", imageId: null, hint: "ဥ" },
    { id: "w-animals-10", text: "ငှက်", imageId: null, hint: "ပျံ" },
    { id: "w-animals-11", text: "မြွေ", imageId: null, hint: "ရှည်" },
    { id: "w-animals-12", text: "ဖား", imageId: null, hint: "ခုန်" },
  ],
  foods: [
    { id: "w-foods-1", text: "မုန့်ဟင်းခါး", imageId: null, hint: "မနက်စာ" },
    { id: "w-foods-2", text: "ရေခဲမုန့်", imageId: null, hint: "နွေရာသီ" },
    { id: "w-foods-3", text: "ပီဇာ", imageId: null, hint: "အနောက်တိုင်း" },
    { id: "w-foods-4", text: "ဟမ်ဘာဂါ", imageId: null, hint: "fast food" },
  ],
  locations: [
    { id: "w-locations-1", text: "ကျောင်း", imageId: null, hint: "သင်ကြား" },
    { id: "w-locations-2", text: "ဆေးရုံ", imageId: null, hint: "ကျန်းမာရေး" },
    { id: "w-locations-3", text: "စျေး", imageId: null, hint: "ဝယ်ယူ" },
    { id: "w-locations-4", text: "လေဆိပ်", imageId: null, hint: "လေယာဉ်" },
  ],
  countries: [
    { id: "w-countries-1", text: "မြန်မာ", imageId: null, hint: "အာရှ" },
    { id: "w-countries-2", text: "ဂျပန်", imageId: null, hint: "နည်းပညာ" },
    { id: "w-countries-3", text: "အမေရိကန်", imageId: null, hint: "ကြီးမား" },
    { id: "w-countries-4", text: "ကိုရီးယား", imageId: null, hint: "K-pop" },
  ],
  movies: [
    { id: "w-movies-1", text: "Titanic", imageId: null, hint: "သင်္ဘော" },
    { id: "w-movies-2", text: "Avengers", imageId: null, hint: "hero" },
    { id: "w-movies-3", text: "Harry Potter", imageId: null, hint: "magic" },
    { id: "w-movies-4", text: "Frozen", imageId: null, hint: "snow" },
  ],
  jobs: [
    { id: "w-jobs-1", text: "ဆရာဝန်", imageId: null, hint: "ဆေးရုံ" },
    { id: "w-jobs-2", text: "ဆရာ", imageId: null, hint: "ကျောင်း" },
    { id: "w-jobs-3", text: "ရဲ", imageId: null, hint: "လုံခြုံရေး" },
    { id: "w-jobs-4", text: "အင်ဂျင်နီယာ", imageId: null, hint: "တည်ဆောက်" },
  ],
  technologies: [
    {
      id: "w-technologies-1",
      text: "မိုဘိုင်းဖုန်း",
      imageId: null,
      hint: "ဆက်သွယ်",
    },
    { id: "w-technologies-2", text: "လက်ပ်တော့", imageId: null, hint: "အလုပ်" },
    { id: "w-technologies-3", text: "အင်တာနက်", imageId: null, hint: "online" },
    { id: "w-technologies-4", text: "AI", imageId: null, hint: "smart" },
  ],
  imaginations: [
    { id: "w-imaginations-1", text: "နဂါး", imageId: null, hint: "ပျံနိုင်" },
    { id: "w-imaginations-2", text: "ဝိညာဉ်", imageId: null, hint: "မမြင်ရ" },
    { id: "w-imaginations-3", text: "မယ်မင်း", imageId: null, hint: "ပုံပြင်" },
    {
      id: "w-imaginations-4",
      text: "ဒိုင်နိုဆော",
      imageId: null,
      hint: "ရှေးခေတ်",
    },
  ],
  supes: [
    { id: "w-supes-1", text: "Superman", imageId: null, hint: "ပျံ" },
    { id: "w-supes-2", text: "Batman", imageId: null, hint: "dark" },
    { id: "w-supes-3", text: "Spider-Man", imageId: null, hint: "web" },
    { id: "w-supes-4", text: "Iron Man", imageId: null, hint: "tech suit" },
  ],
  nature: [
    { id: "w-nature-1", text: "တောင်", imageId: null, hint: "မြင့်" },
    { id: "w-nature-2", text: "မြစ်", imageId: null, hint: "ရေ" },
    { id: "w-nature-3", text: "သစ်တော", imageId: null, hint: "အပင်" },
    { id: "w-nature-4", text: "ပင်လယ်", imageId: null, hint: "ကြီးမား" },
  ],
  histories: [
    { id: "w-histories-1", text: "ဘုရင့်နောင်", imageId: null, hint: "ဘုရင်" },
    { id: "w-histories-2", text: "ပုဂံ", imageId: null, hint: "ရှေးဟောင်း" },
    {
      id: "w-histories-3",
      text: "တော်လှန်ရေး",
      imageId: null,
      hint: "ပြောင်းလဲ",
    },
    {
      id: "w-histories-4",
      text: "အင်္ဂလိပ်ခေတ်",
      imageId: null,
      hint: "ကိုလိုနီ",
    },
  ],
  sports: [
    { id: "w-sports-1", text: "ဘောလုံး", imageId: null, hint: "ကန်" },
    { id: "w-sports-2", text: "ဘတ်စကက်ဘော", imageId: null, hint: "ခုန်" },
    { id: "w-sports-3", text: "တင်နစ်", imageId: null, hint: "ရိုက်" },
    { id: "w-sports-4", text: "ပြေး", imageId: null, hint: "မြန်" },
  ],
};

export const QUESTIONS_BY_CATEGORY: Record<CategoryType, QuestionType[]> = {
  animals: [
    {
      id: "q-animals-1",
      text: "ဘယ်တိရစ္ဆာန်တွေကို အိမ်မှာမွေးကြလဲ",
      imageId: null,
      hint: "တိရစ္ဆာန်",
    },
    {
      id: "q-animals-2",
      text: "တောထဲမှာ ဘာတိရစ္ဆာန်တွေရှိလဲ",
      imageId: null,
      hint: "wild",
    },
    {
      id: "q-animals-3",
      text: "ဘယ်တိရစ္ဆာန်က ကြီးမားဆုံးလဲ",
      imageId: null,
      hint: "big",
    },
    {
      id: "q-animals-4",
      text: "ဘယ်တိရစ္ဆာန်က အမြန်ဆုံးလဲ",
      imageId: null,
      hint: "fast",
    },
  ],
  foods: [
    {
      id: "q-foods-1",
      text: "မနက်စာအတွက် ဘာစားကြလဲ",
      imageId: null,
      hint: "စား",
    },
    {
      id: "q-foods-2",
      text: "နွေရာသီမှာ ဘာအစားအစာစားကြလဲ",
      imageId: null,
      hint: "အေး",
    },
    {
      id: "q-foods-3",
      text: "fast food တွေက ဘာတွေရှိလဲ",
      imageId: null,
      hint: "quick",
    },
    {
      id: "q-foods-4",
      text: "သင်ကြိုက်တဲ့ အစားအစာကဘာလဲ",
      imageId: null,
      hint: "ကြိုက်",
    },
  ],
  locations: [
    {
      id: "q-locations-1",
      text: "စာသင်ဖို့ ဘယ်နေရာကို သွားလဲ",
      imageId: null,
      hint: "study",
    },
    {
      id: "q-locations-2",
      text: "နာမကျန်းရင် ဘယ်သွားလဲ",
      imageId: null,
      hint: "health",
    },
    {
      id: "q-locations-3",
      text: "ဝယ်ယူဖို့ ဘယ်နေရာကို သွားလဲ",
      imageId: null,
      hint: "buy",
    },
    {
      id: "q-locations-4",
      text: "လေယာဉ်စီးဖို့ ဘယ်သွားလဲ",
      imageId: null,
      hint: "travel",
    },
  ],
  countries: [
    {
      id: "q-countries-1",
      text: "သင်ဘယ်နိုင်ငံမှာနေသလဲ",
      imageId: null,
      hint: "country",
    },
    {
      id: "q-countries-2",
      text: "နည်းပညာကောင်းတဲ့နိုင်ငံကဘာလဲ",
      imageId: null,
      hint: "tech",
    },
    {
      id: "q-countries-3",
      text: "အကြီးဆုံးနိုင်ငံကဘာလဲ",
      imageId: null,
      hint: "big",
    },
    {
      id: "q-countries-4",
      text: "K-pop က ဘယ်နိုင်ငံကလဲ",
      imageId: null,
      hint: "music",
    },
  ],
  movies: [
    {
      id: "q-movies-1",
      text: "သင်ကြိုက်တဲ့ ရုပ်ရှင်ကဘာလဲ",
      imageId: null,
      hint: "movie",
    },
    {
      id: "q-movies-2",
      text: "superhero movie တွေကဘာလဲ",
      imageId: null,
      hint: "hero",
    },
    {
      id: "q-movies-3",
      text: "magic ပါတဲ့ ရုပ်ရှင်တွေကဘာလဲ",
      imageId: null,
      hint: "magic",
    },
    {
      id: "q-movies-4",
      text: "animation movie တွေကဘာလဲ",
      imageId: null,
      hint: "cartoon",
    },
  ],
  jobs: [
    {
      id: "q-jobs-1",
      text: "ဆေးရုံမှာ ဘယ်သူအလုပ်လုပ်လဲ",
      imageId: null,
      hint: "health",
    },
    {
      id: "q-jobs-2",
      text: "ကျောင်းမှာ ဘယ်သူသင်ပေးလဲ",
      imageId: null,
      hint: "teach",
    },
    {
      id: "q-jobs-3",
      text: "လုံခြုံရေးကို ဘယ်သူတာဝန်ယူလဲ",
      imageId: null,
      hint: "safe",
    },
    {
      id: "q-jobs-4",
      text: "တည်ဆောက်တဲ့အလုပ်ကဘာလဲ",
      imageId: null,
      hint: "build",
    },
  ],
  technologies: [
    {
      id: "q-technologies-1",
      text: "ဆက်သွယ်ဖို့ ဘာအသုံးပြုလဲ",
      imageId: null,
      hint: "phone",
    },
    {
      id: "q-technologies-2",
      text: "အလုပ်လုပ်ဖို့ laptop ကို ဘာကြောင့်သုံးလဲ",
      imageId: null,
      hint: "work",
    },
    {
      id: "q-technologies-3",
      text: "internet က ဘာအတွက်လဲ",
      imageId: null,
      hint: "online",
    },
    {
      id: "q-technologies-4",
      text: "AI ဆိုတာဘာလဲ",
      imageId: null,
      hint: "smart",
    },
  ],
  imaginations: [
    {
      id: "q-imaginations-1",
      text: "ပျံနိုင်တဲ့ စိတ်ကူးယဉ်အရာတွေကဘာလဲ",
      imageId: null,
      hint: "fly",
    },
    {
      id: "q-imaginations-2",
      text: "မမြင်ရတဲ့အရာတွေကဘာလဲ",
      imageId: null,
      hint: "invisible",
    },
    {
      id: "q-imaginations-3",
      text: "ပုံပြင်ထဲက အရာတွေကဘာလဲ",
      imageId: null,
      hint: "story",
    },
    {
      id: "q-imaginations-4",
      text: "ရှေးခေတ်သတ္တဝါတွေကဘာလဲ",
      imageId: null,
      hint: "ancient",
    },
  ],
  supes: [
    {
      id: "q-supes-1",
      text: "ဘယ်ဟီးရိုးက ပျံနိုင်လဲ",
      imageId: null,
      hint: "fly",
    },
    {
      id: "q-supes-2",
      text: "dark hero က ဘယ်သူလဲ",
      imageId: null,
      hint: "night",
    },
    {
      id: "q-supes-3",
      text: "web သုံးတဲ့ hero ကဘယ်သူလဲ",
      imageId: null,
      hint: "spider",
    },
    {
      id: "q-supes-4",
      text: "tech suit ဝတ်တဲ့ hero ကဘယ်သူလဲ",
      imageId: null,
      hint: "iron",
    },
  ],
  nature: [
    {
      id: "q-nature-1",
      text: "မြင့်တဲ့သဘာဝအရာကဘာလဲ",
      imageId: null,
      hint: "high",
    },
    {
      id: "q-nature-2",
      text: "ရေစီးတဲ့အရာကဘာလဲ",
      imageId: null,
      hint: "water",
    },
    {
      id: "q-nature-3",
      text: "အပင်များများရှိတဲ့နေရာကဘာလဲ",
      imageId: null,
      hint: "forest",
    },
    { id: "q-nature-4", text: "ကြီးမားတဲ့ရေကဘာလဲ", imageId: null, hint: "sea" },
  ],
  histories: [
    {
      id: "q-histories-1",
      text: "ရှေးခေတ်ဘုရင်ကဘယ်သူလဲ",
      imageId: null,
      hint: "king",
    },
    {
      id: "q-histories-2",
      text: "ရှေးဟောင်းမြို့ကဘာလဲ",
      imageId: null,
      hint: "ancient",
    },
    {
      id: "q-histories-3",
      text: "ပြောင်းလဲမှုဖြစ်တဲ့အရာကဘာလဲ",
      imageId: null,
      hint: "change",
    },
    {
      id: "q-histories-4",
      text: "ကိုလိုနီခေတ်ဆိုတာဘာလဲ",
      imageId: null,
      hint: "colonial",
    },
  ],
  sports: [
    {
      id: "q-sports-1",
      text: "ဘယ်အားကစားကို ကန်ကစားလဲ",
      imageId: null,
      hint: "kick",
    },
    {
      id: "q-sports-2",
      text: "ဘယ်အားကစားမှာ လှန်ရလဲ",
      imageId: null,
      hint: "basket",
    },
    {
      id: "q-sports-3",
      text: "ဘယ်အားကစားမှာ ရိုက်ရလဲ",
      imageId: null,
      hint: "hit",
    },
    {
      id: "q-sports-4",
      text: "ဘယ်အားကစားမှာ ပြေးရလဲ",
      imageId: null,
      hint: "run",
    },
  ],
};
