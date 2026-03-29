import { CategoryCardType, ModeType } from "@/types/index.types";

export const modes: ModeType[] = [
  {
    id: "word",
    title: "စကားလုံးဂိမ်း",
    desc: "လျှို့ဝှက်စကားလုံး မသိတဲ့သူကို ရှာမယ်",
    icon: require("@/assets/svg/magnify.svg"),
  },
  {
    id: "question",
    title: "အမေးအဖြေဂိမ်း",
    desc: "မေးခွန်းမသိဘဲ ဖြေနေတဲ့သူကို ရှာမယ်",
    icon: require("@/assets/svg/question-mode.svg"),
  },
];

export const CATEGORIES: CategoryCardType[] = [
  {
    type: "animals",
    title: "တိရစ္ဆာန်များ",
    image: require("@/assets/svg/animals.svg"),
  },
  {
    type: "foods",
    title: "အစားအသောက်",
    image: require("@/assets/svg/foods.svg"),
  },
  {
    type: "locations",
    title: "နေရာဒေသ",
    image: require("@/assets/svg/locations.svg"),
  },
  {
    type: "countries",
    title: "နိုင်ငံများ",
    image: require("@/assets/svg/countries.svg"),
  },
  {
    type: "movies",
    title: "ရုပ်ရှင်",
    image: require("@/assets/svg/movies.svg"),
  },
  {
    type: "jobs",
    title: "အလုပ်အကိုင်",
    image: require("@/assets/svg/jobs.svg"),
  },
  {
    type: "technologies",
    title: "နည်းပညာ",
    image: require("@/assets/svg/technologies.svg"),
  },
  {
    type: "imaginations",
    title: "စိတ်ကူးယဉ် အရာများ",
    image: require("@/assets/svg/imaginations.svg"),
  },
  {
    type: "supes",
    title: "စူပါဟီးရိုးများ",
    image: require("@/assets/svg/supes.svg"),
  },
  {
    type: "nature",
    title: "သဘာဝ",
    image: require("@/assets/svg/nature.svg"),
  },
  {
    type: "histories",
    title: "သမိုင်း",
    image: require("@/assets/svg/histories.svg"),
  },
  {
    type: "sports",
    title: "အားကစား",
    image: require("@/assets/svg/sports.svg"),
  },
];
