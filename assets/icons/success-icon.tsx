import Svg, { Circle, Path } from "react-native-svg";

import { ThemeTokens } from "@/constants/theme";

export default function SuccessIcon() {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Circle cx="20" cy="20" r="20" fill={ThemeTokens.palette.success[500]} />
      <Path
        d="M12 20L17.5 25.5L28 14.5"
        stroke={ThemeTokens.ui.white}
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
