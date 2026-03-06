import { T } from "@/lib/theme";

export interface Screenshot {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;     // shown on detail page header
  oneliner: string;     // shown on grid card
  description: string;  // full paragraph for detail page
  bullets?: string[];   // key highlights on detail page
  tags: string[];
  accent: string;       // T.accent | T.accent2 | T.accent3
  github: string | null;
  live: string | null;
  screenshots?: Screenshot[];
}

export const PROJECTS: Project[] = [
  {
    slug: "ngram-language-model",
    number: "01",
    title: "Probabilistic N-Gram Language Model",
    subtitle: "Natural Language Processing · Probability-Based Text Generation",
    oneliner:
      "A statistical n-gram language model in Java that learns word sequence frequencies from training text and generates sentence completions using maximum likelihood estimation.",
    description:
      "Developed a statistical n-gram language model in Java capable of probability-based text generation. The program processes plaintext training data to learn the frequencies of word sequences and computes conditional probabilities using maximum likelihood estimation. Based on a user-provided starting phrase, the model predicts and generates sentence completions. By adjusting the order of the n-gram, the project effectively demonstrates the natural language processing (NLP) tradeoff between text coherence and creative variability.",
    bullets: [
      "Engineered a functional n-gram language model from scratch that generates realistic sentence completions based on training text.",
      "Leveraged Java's hash-based data structures (HashMap, HashSet) to efficiently track, store, and count vocabulary and sequence frequencies.",
      "Applied maximum likelihood estimation to calculate conditional probabilities, driving the random text generation engine.",
    ],
    tags: ["Java", "NLP", "N-gram Modeling", "HashMap / HashSet", "Maximum Likelihood Estimation"],
    accent: T.accent3,
    github: null,
    live: null,
    screenshots: [
      {
        src: "/projects/ProbabilisticN-gramLanguageModel/ngram-sentence-generation.png",
        caption:
          "Interactive sentence generation using the n-gram language model. The program takes different history inputs (e.g., <s>, the, the dog) and generates completions for orders 2 through 4, demonstrating how higher-order models produce more contextually accurate predictions.",
      },
      {
        src: "/projects/ProbabilisticN-gramLanguageModel/learned-vocabulary.png",
        caption:
          "The vocabulary extracted from the training corpus, sorted in case-insensitive alphabetical order. Each unique word — including the start-of-sentence <s> and end-of-sentence </s> tokens — is stored and used during probability computation and word generation.",
      },
      {
        src: "/projects/ProbabilisticN-gramLanguageModel/ngram-counts.png",
        caption:
          "N-gram frequency counts (orders 2 through 4) computed from the training text. These counts are used to calculate maximum likelihood probability estimates — for example, the dog appears 3 times and the appears 6 times as a history, giving P(dog | the) = 0.5.",
      },
    ],
  },
];
