import { ThemedText } from "@/components/themed-text";
import { SvgAsset } from "@/components/ui/svg-asset";
import { cn } from "@/lib/util";
import type { CategoryCardType, CategoryType } from "@/types/index.types";
import { Pressable } from "react-native";

export default function CategoryCard({
  category,
  isSelected,
  onSelect,
}: {
  category: CategoryCardType;
  isSelected: boolean;
  onSelect: (type: CategoryType) => void;
}) {
  return (
    <Pressable
      onPress={() => onSelect(category.type)}
      aria-pressed={isSelected}
      className={cn(
        "border border-white flex flex-col rounded-2xl items-center justify-center pb-2",
        isSelected && "border-4",
      )}
    >
      <SvgAsset source={category.image} width={140} height={140} />
      <ThemedText type="subtitle">{category.title}</ThemedText>
    </Pressable>
  );
}
