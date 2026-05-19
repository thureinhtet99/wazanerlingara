import {
	QUESTIONS_BY_CATEGORY,
	WORDS_BY_CATEGORY,
} from "@/constants/dummy-data";
import type { CategoryType, QuestionType, WordType } from "@/types/index.types";

const getRandomItem = <T>(items: T[]): T | null => {
	if (!items.length) {
		return null;
	}

	return items[Math.floor(Math.random() * items.length)];
};

export function getRandomWordByCategory(
	category: CategoryType,
): WordType | null {
	return getRandomItem(WORDS_BY_CATEGORY[category] ?? []);
}

export function getRandomQuestionByCategory(
	category: CategoryType,
): QuestionType | null {
	return getRandomItem(QUESTIONS_BY_CATEGORY[category] ?? []);
}
