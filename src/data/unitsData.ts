import { Unit } from '../types';

export const UNITS: Unit[] = [
  {
    id: 'rank_structure',
    number: 1,
    name: 'Rank Structure',
    iconName: 'medal',
    totalLessons: 6,
    testDescription:
      'Tests your knowledge of Navy and Marine Corps enlisted and officer ranks, insignia, and chain of command.',
  },
  {
    id: 'passage_memorization',
    number: 2,
    name: 'Passage Memorization',
    iconName: 'book',
    totalLessons: 8,
    testDescription:
      "Tests your recall of the General Orders, the Code of Conduct, Leadership Traits, the Constitutional Paradigm, the Sailor's Creed, the Marine Corps Hymn, and Anchors Aweigh.",
  },
  {
    id: 'nautical_terms',
    number: 3,
    name: 'Nautical Terms',
    iconName: 'anchor',
    totalLessons: 5,
    testDescription:
      'Tests your knowledge of ship hull classifications, the NATO phonetic alphabet, line handling commands, and Navy and Marine Corps service terms.',
  },
  {
    id: 'procedures',
    number: 4,
    name: 'Procedures',
    iconName: 'checklist',
    totalLessons: 7,
    testDescription:
      'Tests your knowledge of weapon safety rules, shipboard boarding procedure, flag folding, knot tying, sound signals, and fire classifications.',
  },
  {
    id: 'history',
    number: 5,
    name: 'History',
    iconName: 'flag',
    totalLessons: 3,
    testDescription:
      'Tests your knowledge of U.S. Navy and Marine Corps history, founding dates, and the origins of key ranks.',
  },
  {
    id: 'physical_fitness',
    number: 6,
    name: 'Physical Fitness',
    iconName: 'dumbbell',
    totalLessons: 4,
    testDescription:
      'Tests your knowledge of Navy PRT and Marine Corps PFT standards, swim qualification requirements, and fitness preparation strategies.',
  },
];

export const FULL_KNOWLEDGE_EXAM_INFO = {
  id: 'full_knowledge_exam',
  name: 'Full Knowledge Exam',
  testDescription:
    '50 questions covering every unit — the same format and time limit as the official NSI knowledge exam.',
  totalQuestions: 50,
  timeLimitMinutes: 45,
};
