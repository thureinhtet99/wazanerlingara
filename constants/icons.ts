import jimCarreyDance from "@/assets/gif/jim-carrey-dance.gif";
import laughInEvil from "@/assets/gif/laugh-in-evil.gif";
import thinkingEye from "@/assets/gif/thinking-eye.gif";
import animals from "@/assets/images/animals.png";
import avatar1 from "@/assets/images/avatar/avatar-1.png";
import avatar2 from "@/assets/images/avatar/avatar-2.png";
import avatar3 from "@/assets/images/avatar/avatar-3.png";
import avatar4 from "@/assets/images/avatar/avatar-4.png";
import avatar5 from "@/assets/images/avatar/avatar-5.png";
import avatar6 from "@/assets/images/avatar/avatar-6.png";
import avatar7 from "@/assets/images/avatar/avatar-7.png";
import avatar8 from "@/assets/images/avatar/avatar-8.png";
import avatar9 from "@/assets/images/avatar/avatar-9.png";
import avatar10 from "@/assets/images/avatar/avatar-10.png";
import avatar11 from "@/assets/images/avatar/avatar-11.png";
import avatar12 from "@/assets/images/avatar/avatar-12.png";
import avatar13 from "@/assets/images/avatar/avatar-13.png";
import avatar14 from "@/assets/images/avatar/avatar-14.png";
import avatar15 from "@/assets/images/avatar/avatar-15.png";
import avatar16 from "@/assets/images/avatar/avatar-16.png";
import avatar17 from "@/assets/images/avatar/avatar-17.png";
import avatar18 from "@/assets/images/avatar/avatar-18.png";
import avatar19 from "@/assets/images/avatar/avatar-19.png";
import avatar20 from "@/assets/images/avatar/avatar-20.png";
import avatar21 from "@/assets/images/avatar/avatar-21.png";
import avatar22 from "@/assets/images/avatar/avatar-22.png";
import avatar23 from "@/assets/images/avatar/avatar-23.png";
import avatar24 from "@/assets/images/avatar/avatar-24.png";
import country from "@/assets/images/countries.png";
import food from "@/assets/images/foods.png";
import history from "@/assets/images/histories.png";
import imagination from "@/assets/images/imaginations.png";
import job from "@/assets/images/jobs.png";
import movie from "@/assets/images/movies.png";
import nature from "@/assets/images/natures.png";
import place from "@/assets/images/places.png";
import questionMode from "@/assets/images/question-mode.png";
import sport from "@/assets/images/sports.png";
import supe from "@/assets/images/supes.png";
import tech from "@/assets/images/techs.png";
import wordMode from "@/assets/images/word-mode.png";
import logoSvg from "@/assets/svg/logo.svg";
import wazanerlingaraSvg from "@/assets/svg/wazanerlingara.svg";

export const svgs = {
	logoSvg,
	wazanerlingaraSvg,
} as const;

export const images = {
	avatar1,
	avatar2,
	avatar3,
	avatar4,
	avatar5,
	avatar6,
	avatar7,
	avatar8,
	avatar9,
	avatar10,
	avatar11,
	avatar12,
	avatar13,
	avatar14,
	avatar15,
	avatar16,
	avatar17,
	avatar18,
	avatar19,
	avatar20,
	avatar21,
	avatar22,
	avatar23,
	avatar24,
	place,
	nature,
	wordMode,
	questionMode,
	movie,
	sport,
	supe,
	tech,
	animals,
	country,
	food,
	history,
	imagination,
	job,
	laughInEvil,
	jimCarreyDance,
	thinkingEye,
} as const;

export type SvgKey = keyof typeof svgs;
export type ImageKey = keyof typeof images;
