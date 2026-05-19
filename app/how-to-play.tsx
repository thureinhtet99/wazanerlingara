import { Image, ScrollView, Text, View } from "react-native";

import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HowToPlay() {
	return (
		<ThemedView className="flex-1 relative">
			<View className="flex-1 flow-row items-center justify-start absolute h-full w-full">
				<Image
					source={require("@/assets/images/imposter.png")}
					className="opacity-20 self-center h-full w-full"
				/>
			</View>
			<View className="mb-6 mt-1 flex-row items-center justify-center">
				<BackButton />
				<ThemedText type="title">ဘယ်လိုကစားရမလဲ</ThemedText>
			</View>

			<ScrollView className="flex-1 px-2" contentContainerClassName="gap-10">
				<ThemedText type="subtitle">
					ကစားပွဲတစ်ခု စတင်ရင် &quot;စကစားကြမယ်&quot; ကစားမည့်သူများ၏ အမည်များကို ထည့်ပါ။
					အနည်းဆုံး သုံးယောက်မှ အများဆုံး ဆယ်ယောက်အထိ ပါဝင်ကစားနိုင်ပါသည်။ အားလုံးက ဖုန်းတစ်လုံးတည်းကိုပဲ
					အသုံးပြုပြီး မိမိတို့ရဲ့ Roleကို သူများမမြင်အောင် အလှည့်ကျ ကြည့်ရပါမယ်။
				</ThemedText>
				<ThemedText type="subtitle">
					ကစားသမားအများစုက တူညီတဲ့ စကားလုံးတစ်လုံးတည်းကိုပဲ ရရှိပါမယ်။ Imposterကတော့ ဘာစကားလုံးမှ
					ရရှိမှာ မဟုတ်ပါဘူး။ (Hostက ခွင့်ပြုထားရင်တော့ Imposter အတွက် Hint ရနိုင်ပါတယ်။)
					မိမိရထားသော keywordကို မှတ်ထားပြီး လျှို့ဝှက်ထားပါ။
				</ThemedText>
				<ThemedText type="subtitle">
					ကစားသမားတွေက အလှည့်ကျစနစ်ဖြင့် မိမိရထားသော keywordနဲ့ ပတ်သက်တဲ့အရာတွေကို သတ်မှတ်ချိန်အတွင်းမှာ
					တိုတိုတုတ်တုတ် ပြောရပါမယ်။{" "}
					<Text className="text-red-500">keywordကို လုံးဝ(လုံးဝ) မပြောရပါဘူး။</Text>
				</ThemedText>
				<ThemedText type="subtitle">
					Imposter ကတော့ keywordကို သိချင်ယောင်ဆောင်ပြီး သံသယအဝင်မခံရအောင် သူများတွေ
					ပြောသွားတာကို သေချာနားထောင်ပြီး ခန့်မှန်းပြောရပါမယ်။
				</ThemedText>
				<ThemedText type="subtitle">
					အားလုံး ပြောပြီးသွားတဲ့အခါ ဘယ်သူက Imposter ဖြစ်နိုင်မလဲ၊ ဘယ်သူ့စကားတွေက မသင်္ကာစရာ
					ကောင်းနေလဲဆိုတာကို ဝိုင်းဝန်းဆွေးနွေးရပါမယ်။
				</ThemedText>
				<ThemedText type="subtitle">
					ကစားသမားအားလုံးက Imposterလို့ ထင်ရတဲ့သူကို မဲပေးရပါမယ်။ မဲပေးခံရသူက တကယ့် Imposter
					ဖြစ်နေရင် Teammatesတွေ အနိုင်ရပါမယ်။ မဲပေးခံရသူက Imposterမဟုတ်ဘူးဆိုရင်တော့ Imposterက
					အနိုင်ရသွားပါမယ်။
				</ThemedText>
			</ScrollView>
		</ThemedView>
	);
}
