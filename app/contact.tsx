import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { z } from "zod";

import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NotificationModal from "@/components/ui/modal";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().trim(),
  email: z.email().trim(),
  message: z.string().trim().min(10),
});

type ContactFormType = z.infer<typeof contactSchema>;

export default function Contact() {
  const [pending, sendTransition] = useTransition();
  const [notificationState, setNotificationState] = useState<{
    visible: boolean;
    variant: "success" | "error";
    title?: string;
    message?: string;
  }>({
    visible: false,
    variant: "success",
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: { isValid },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmitForm = () => {
    const values = getValues();
    sendTransition(async () => {
      try {
        // TODO: Mock API call - replace with real endpoint
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (true) {
          setNotificationState({
            visible: true,
            variant: "success",
            title: "ပေးပို့မှု အောင်မြင်ပါသည်",
            message:
              "သင့်အကြံပြုချက်များကို ကျွန်ုပ်တို့ တန်ဖိုးထားပါသည်။ ကျေးဇူးတင်ပါသည်။",
          });
          console.log("Form submitted:", values);
        }
      } catch {
        setNotificationState({
          visible: true,
          variant: "error",
          title: "ပေးပို့မှု မအောင်မြင်ပါ",
          message:
            "နည်းပညာဆိုင်ရာ အခက်အခဲတစ်ခုကြောင့် သင့်မက်ဆေ့ချ်ကို ပေးပို့၍ မရသေးပါ။ သင်၏ အင်တာနက်ချိတ်ဆက်မှုကို စစ်ဆေးပြီး ခဏအကြာတွင် ပြန်လည်ကြိုးစားပေးပါရန် မေတ္တာရပ်ခံအပ်ပါသည်။",
        });
      }
    });
  };

  const handleCloseModal = () => {
    setNotificationState((prev) => ({ ...prev, visible: false }));
  };

  const handleSuccessAcknowledge = () => {
    handleCloseModal();
    reset();
  };

  const handleRetry = () => {
    handleCloseModal();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ThemedView className="flex-1">
        <View className="mb-6 mt-1 flex-row items-center justify-center">
          <BackButton />

          <ThemedText type="title" className="max-w-[200px] text-center">
            ဆက်သွယ်ရန်
          </ThemedText>
        </View>

        <View className="flex-1">
          <View className="gap-6">
            <View className="gap-2">
              <ThemedText type="subtitle">အမည်</ThemedText>
              <Controller
                control={control}
                name="name"
                render={({ field: { value, onChange, onBlur } }) => (
                  <Input
                    placeholder="နာမည် ရိုက်ထည့်ပါ..."
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>

            <View className="gap-2">
              <ThemedText type="subtitle">အီးမေးလ် လိပ်စာ</ThemedText>
              <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange, onBlur } }) => (
                  <Input
                    placeholder="အီးမေးလ် လိပ်စာ"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                )}
              />

              <ThemedText type="description" style={{ color: "#b8b000" }}>
                သင့်ထံသို့ ပြန်လည်ဆက်သွယ်ရန်အတွက်သာ အသုံးပြုပါမည်။
              </ThemedText>
            </View>

            <View className="gap-2">
              <ThemedText type="subtitle">မက်ဆေ့ချ်</ThemedText>
              <Controller
                control={control}
                name="message"
                render={({ field: { value, onChange, onBlur } }) => (
                  <Textarea
                    placeholder="မက်ဆေ့ချ်"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />

              <ThemedText type="description">
                စာကို အရှည်ကြီး မရေးပါနဲ့ ဖတ်ရမှာ ပျင်းလို့ 😔🫶
              </ThemedText>
            </View>
          </View>
        </View>

        <Button
          disabled={!isValid || pending}
          onPress={handleSubmit(handleSubmitForm)}
          accessibilityRole="button"
          accessibilityLabel="Send message"
        >
          <ThemedText type="subtitle" className="text-xl text-white">
            {pending ? "ပေးပို့နေသည်..." : "ပေးပို့မယ်"}
          </ThemedText>
        </Button>

        <NotificationModal
          visible={notificationState.visible}
          variant={notificationState.variant}
          title={notificationState.title}
          message={notificationState.message}
          primaryButtonText={
            notificationState.variant === "success"
              ? "အိုကေ"
              : "ထပ်မံကြိုးစားမည်"
          }
          secondaryButtonText={
            notificationState.variant === "error" ? "မလုပ်တော့ပါ" : undefined
          }
          onPrimaryPress={
            notificationState.variant === "success"
              ? handleSuccessAcknowledge
              : handleRetry
          }
          onSecondaryPress={
            notificationState.variant === "error" ? handleCloseModal : undefined
          }
        />
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}
