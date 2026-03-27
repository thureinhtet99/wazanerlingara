import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  className?: string;
};

const IconPeople = ({ className, ...props }: Props) => {
  return (
    <Svg viewBox="0 0 32 32" className={className} fill="none" {...props}>
      <Circle cx="11.25" cy="6.75" r="6.75" fill="currentColor" />
      <Path
        d="M12 15C21.4268 15 23.4738 20.6557 23.8958 23.6654C24.0404 24.6969 23.1861 25.5 22.1446 25.5H1.85539C0.81385 25.5 -0.0403999 24.6969 0.104205 23.6654C0.52616 20.6557 2.57321 15 12 15Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default IconPeople;
