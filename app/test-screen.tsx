import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Progress from "@/components/ui/progress";
import Switch from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "expo-router";
import { useState } from "react";

export default function TestScreen() {
  const [checked, setChecked] = useState(false);

  return (
    <ThemedView className="flex flex-col gap-4">
      <Link href="/">Go to Home</Link>
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="default" disabled>
        Default
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Input placeholder="Test" />
      <Input placeholder="Test" variant="success" />
      <Input placeholder="Test" variant="error" />
      <Input placeholder="Test" disabled />
      <Textarea />
      <Switch checked={checked} onChange={() => setChecked(!checked)} />
      <Progress progressPercent={Math.random() * 100} isResettingProgressBar />
    </ThemedView>
  );
}
