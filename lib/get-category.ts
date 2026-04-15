export const getCategory = (categoryType: string): string => {
  const categoryMap: Record<string, string> = {
    animals: "တိရစ္ဆာန်များ",
    foods: "အစားအသောက်",
    locations: "နေရာဒေသ",
    countries: "နိုင်ငံများ",
    movies: "ရုပ်ရှင်",
    jobs: "အလုပ်အကိုင်",
    technologies: "နည်းပညာ",
    imaginations: "စိတ်ကူးယဉ် အရာများ",
    supes: "စူပါဟီးရိုးများ",
    nature: "သဘာဝ",
    histories: "သမိုင်း",
    sports: "အားကစား",
  };
  return categoryMap[categoryType] || categoryType;
};
