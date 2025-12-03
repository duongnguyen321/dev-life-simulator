import { chapter1, chapter1Dialogues } from './chapter1';
import { chapter2, chapter2Dialogues } from './chapter2';
import { chapter3, chapter3Dialogues } from './chapter3';
import { chapter4, chapter4Dialogues } from './chapter4';
import { chapter5, chapter5Dialogues } from './chapter5';
import { chapter6, chapter6Dialogues } from './chapter6';
import { chapter7, chapter7Dialogues } from './chapter7';
import { chapter8, chapter8Dialogues } from './chapter8';
import { chapter9, chapter9Dialogues } from './chapter9';
import type { Chapter, DialogueNode } from '../types';

export const chapters: Record<number, Chapter> = {
	1: chapter1,
	2: chapter2,
	3: chapter3,
	4: chapter4,
	5: chapter5,
	6: chapter6,
	7: chapter7,
	8: chapter8,
	9: chapter9,
};

export const allDialogues: Record<string, DialogueNode> = {
	...chapter1Dialogues,
	...chapter2Dialogues,
	...chapter3Dialogues,
	...chapter4Dialogues,
	...chapter5Dialogues,
	...chapter6Dialogues,
	...chapter7Dialogues,
	...chapter8Dialogues,
	...chapter9Dialogues,
};

// Add reflection quotes to allDialogues
Object.values(chapters).forEach((chapter) => {
	if (chapter.reflectionQuotes) {
		chapter.reflectionQuotes.forEach((quote) => {
			allDialogues[quote.id] = {
				id: quote.id,
				text: quote.text,
				textVi: quote.textVi,
				textEn: quote.textEn,
				choices: quote.choices,
				speaker: 'player', // Reflection is internal monologue
			};
		});
	}
});

export const getChapter = (id: number): Chapter | undefined => chapters[id];

export const getDialogue = (id: string): DialogueNode | undefined =>
	allDialogues[id];
