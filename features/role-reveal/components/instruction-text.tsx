import { ThemedText } from "@/components/themed-text";

export default function InstructionText({ confirmed }: { confirmed: boolean }) {
  return (
    <ThemedText type="subtitle" className="text-center">
      {!confirmed ? (
        <>
          ကိုယ့် role ကို ကြည့်ဖို့ ကတ် ကို ထိ ပါ။ <br />
          အချိန် (၁၀) စက္ကန့် သာရပါမယ်။ ပြန်ကြည့် ခွင့် မရှိပါ။
        </>
      ) : (
        <>ပြန်ကြည့် ခွင့် မရှိပါ။</>
      )}
    </ThemedText>
  );
}
