import animalsSvg from "@/assets/svg/animals.svg";
import backButtonSvg from "@/assets/svg/back-button.svg";
import countriesSvg from "@/assets/svg/countries.svg";
import foodsSvg from "@/assets/svg/foods.svg";
import historiesSvg from "@/assets/svg/histories.svg";
import homeSvg from "@/assets/svg/home.svg";
import imaginationsSvg from "@/assets/svg/imaginations.svg";
import incognitoIconSvg from "@/assets/svg/incognito-icon.svg";
import infoAlertSvg from "@/assets/svg/info-alert.svg";
import jobsSvg from "@/assets/svg/jobs.svg";
import lightBulbSvg from "@/assets/svg/light-bulb.svg";
import locationsSvg from "@/assets/svg/locations.svg";
import logoSvg from "@/assets/svg/logo.svg";
import magnifySvg from "@/assets/svg/magnify.svg";
import moviesSvg from "@/assets/svg/movies.svg";
import musicIconSvg from "@/assets/svg/music-icon.svg";
import natureSvg from "@/assets/svg/nature.svg";
import peopleFillSvg from "@/assets/svg/people-fill.svg";
import playIconSvg from "@/assets/svg/play-icon.svg";
import plusCircleSvg from "@/assets/svg/plus-circle-icon.svg";
import profileSvg from "@/assets/svg/profile.svg";
import questionMarkSvg from "@/assets/svg/question-mark-icon.svg";
import questionModeSvg from "@/assets/svg/question-mode.svg";
import settingSvg from "@/assets/svg/setting.svg";
import speakerSvg from "@/assets/svg/speaker-icon.svg";
import sportSvg from "@/assets/svg/sports.svg";
import supesSvg from "@/assets/svg/supes.svg";
import technologySvg from "@/assets/svg/technologies.svg";
import timerSvg from "@/assets/svg/timer.svg";
import wazanerlingaraSvg from "@/assets/svg/wazanerlingara.svg";

export const svg = {
  animalsSvg,
  backButtonSvg,
  countriesSvg,
  foodsSvg,
  historiesSvg,
  homeSvg,
  imaginationsSvg,
  incognitoIconSvg,
  infoAlertSvg,
  jobsSvg,
  lightBulbSvg,
  locationsSvg,
  logoSvg,
  magnifySvg,
  moviesSvg,
  musicIconSvg,
  natureSvg,
  peopleFillSvg,
  playIconSvg,
  plusCircleSvg,
  profileSvg,
  questionMarkSvg,
  questionModeSvg,
  settingSvg,
  speakerSvg,
  sportSvg,
  supesSvg,
  technologySvg,
  timerSvg,
  wazanerlingaraSvg,
} as const;

export type SvgKey = keyof typeof svg;
