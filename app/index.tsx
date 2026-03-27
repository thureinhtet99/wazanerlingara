import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";

export default function Index() {
  // const router = useRouter();

  return (
    <ThemedView className="flex-1">
      <Link href="/test-screen">
        <ThemedText>TEST</ThemedText>
      </Link>

      <ThemedText>Index</ThemedText>
    </ThemedView>
  );
}
