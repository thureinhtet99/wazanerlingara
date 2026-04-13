import { ThemedText } from "@/components/themed-text";
import { cn } from "@/lib/util";
import type { CategoryCardType, CategoryType } from "@/types/index.types";
import { Image, Pressable } from "react-native";

export default function CategoryCard({
  category,
  isSelected,
  handleClick,
}: {
  category: CategoryCardType;
  isSelected: boolean;
  handleClick: (type: CategoryType) => void;
}) {
  return (
    <Pressable
      onPress={() => handleClick(category.type)}
      aria-pressed={isSelected}
      className={cn(
        "w-full border border-white flex flex-col rounded-2xl items-center justify-center pb-2",
        isSelected && "border-4",
      )}
    >
      <Image
        source={category.image}
        width={140}
        height={140}
        alt={category.title}
      />

      <ThemedText type="subtitle">{category.title}</ThemedText>
    </Pressable>
  );
}
