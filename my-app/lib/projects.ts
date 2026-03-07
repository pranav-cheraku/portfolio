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
  screenshotGridCount?: number; // how many screenshots go in the 2-col grid (rest render full-width below)
}

export const PROJECTS: Project[] = [
  {
    slug: "phylogenetic-tree-construction",
    number: "02",
    title: "Phylogenetic Tree Construction",
    subtitle: "Bioinformatics · Evolutionary Relationship Mapping",
    oneliner:
      "A Java application that parses FASTA amino acid sequences, calculates pairwise genetic distances, and builds binary phylogenetic trees using hierarchical clustering.",
    description:
      "Developed a Java application that constructs and manipulates phylogenetic trees to map the evolutionary relationships between biological species. The program parses amino acid sequences from standard FASTA files, calculates pairwise genetic distances, and uses a hierarchical clustering algorithm to build a binary tree. Once constructed, the tree supports advanced querying, including calculating evolutionary distances, finding common ancestors, and exporting the data into scientific and visual formats.",
    bullets: [
      "Implemented an agglomerative clustering algorithm to iteratively build phylogenetic trees using weighted-average evolutionary distances.",
      "Built a binary tree architecture with optimized recursive and iterative traversals to efficiently query common ancestors and calculate sequence divergences.",
      "Parsed standard FASTA sequence files and generated scientific Newick outputs, bridging custom Java code with external visualization tools.",
    ],
    tags: ["Java", "Agglomerative Clustering", "Binary Trees", "HashMap / HashSet", "FASTA / Newick"],
    accent: T.accent2,
    github: null,
    live: null,
    screenshots: [
      {
        src: "/projects/PhylogeneticTreeConstruction/fasta-input-data.png",
        caption: "Raw FASTA input file containing aligned amino acid sequences for 270 species",
      },
      {
        src: "/projects/PhylogeneticTreeConstruction/pairwise-evolutionary-distances.png",
        caption: "Computed pairwise evolutionary distances between all species in the tree",
      },
      {
        src: "/projects/PhylogeneticTreeConstruction/phylogenetic-tree-visualization-start.png",
        caption: "Tree output showing species clustered by evolutionary similarity, starting from the root",
      },
      {
        src: "/projects/PhylogeneticTreeConstruction/phylogenetic-tree-visualization-end.png",
        caption: "End of tree output displaying 270 species, tree height of 34, and weighted height of 3.37",
      },
      {
        src: "/projects/PhylogeneticTreeConstruction/newick-tree-diagram.svg",
        caption: "Graphical rendering of the generated Newick tree showing evolutionary relationships between 270 species",
      },
    ],
  },
  {
    slug: "lattice-based-speech-recognition",
    number: "03",
    title: "Lattice-Based Speech Recognition System",
    subtitle: "Speech Recognition · Lattice Graph Decoding",
    oneliner:
      "A speech recognition second-pass decoder that parses lattice graphs, applies DAG shortest path and topological sort algorithms to extract the most probable transcription.",
    description:
      "A speech recognition second-pass decoder designed to process lattice graphs — directed acyclic graphs (DAGs) that compactly represent a massive space of possible spoken sentence transcriptions. The system parses custom lattice files, builds an in-memory graph using an adjacency matrix, and applies a suite of algorithms to evaluate acoustic and language model scores, ultimately extracting the most probable transcription hypothesis.",
    bullets: [
      "Engineered a DAG single-source shortest path algorithm that relaxes edges in topological order to identify the lowest-cost transcription hypothesis based on combined acoustic and language model scores.",
      "Computed Word Error Rate (WER) to evaluate hypothesis accuracy against reference transcripts by implementing the Minimum Edit Distance (Levenshtein) algorithm.",
      "Implemented Kahn's algorithm for topological sorting to correctly linearize DAG nodes and strictly respect edge dependencies during graph traversal.",
      "Developed custom export functionality to map lattice graphs into the Graphviz DOT format, facilitating the generation of detailed PDF and SVG visual representations.",
    ],
    tags: ["Java", "DAG Shortest Path", "Kahn's Topological Sort", "Minimum Edit Distance", "Adjacency Matrix", "Graphviz"],
    accent: T.accent3,
    github: null,
    live: null,
    screenshotGridCount: 2,
    screenshots: [
      {
        src: "/projects/Lattice-BasedSpeechRecognitionSystem/lattice-file-format-start.png",
        caption: "The header and node definitions of a lattice file. Each lattice begins with a unique utterance ID, start/end node indices, and node/edge counts, followed by timestamped node entries representing points in time during the spoken sentence.",
      },
      {
        src: "/projects/Lattice-BasedSpeechRecognitionSystem/lattice-file-format-end.png",
        caption: "The edge definitions at the end of a lattice file. Each edge connects two nodes with a candidate word and two scores — an acoustic model score and a language model score — used to determine the most likely transcription.",
      },
      {
        src: "/projects/Lattice-BasedSpeechRecognitionSystem/terminal-output.png",
        caption: "Program output for a sample utterance. The decoder finds the best hypothesis ('we didn't talk about life') against the reference transcript ('we didn't talk about pipes'), achieving a 20% word error rate across 3,095 unique paths with a lattice density of 156.934 words per second.",
      },
      {
        src: "/projects/Lattice-BasedSpeechRecognitionSystem/lattice-graph.png",
        caption: "Graphviz visualization of a 137-node speech recognition lattice. Each path from node 0 (left) to node 136 (right) represents a possible transcription hypothesis. The graph shows how the recognizer considers many competing words at each time step — for example, 'we', 'we_did', 'we_didn't', and 'he_didn't' all branch from similar starting points before converging through 'talk' toward the final silence nodes.",
      },
    ],
  },
  {
    slug: "numpy-deep-neural-network",
    number: "06",
    title: "NumPy Deep Neural Network",
    subtitle: "Machine Learning · Neural Network from Scratch",
    oneliner:
      "A fully custom deep neural network built from scratch in Python using only NumPy. It supports arbitrary depth, configurable activations, and both classification and regression tasks.",
    description:
      "A custom-built deep neural network implemented entirely from scratch in Python, without relying on standard machine learning frameworks like PyTorch or TensorFlow. This project demonstrates a fundamental understanding of neural network mechanics by manually implementing forward and backward propagation, weight initialization, and gradient descent. The resulting program is a highly configurable, foundational model capable of executing both classification and regression tasks.",
    bullets: [
      "Engineered the entire neural network architecture from scratch, including forward and backward propagation and parameter updates, supporting arbitrary network depths and configurable hidden unit activations (ReLU, sigmoid, tanh).",
      "Executed both classification and regression tasks using minibatch gradient descent, successfully building out the math and matrix operations manually.",
    ],
    tags: ["Python 3", "MATLAB/Octave", "NumPy"],
    accent: T.accent2,
    github: null,
    live: null,
  },
  {
    slug: "multithreaded-image-edge-detection",
    number: "05",
    title: "Multithreaded Image Edge Detection",
    subtitle: "Systems Programming · Parallel Image Processing",
    oneliner:
      "A high-performance C program that applies a 3x3 Laplacian convolution filter to raw PPM images using a two-tier concurrency model.",
    description:
      "A high-performance, multithreaded image edge detector built in C. This program processes raw P6 PPM images by applying a 3x3 Laplacian convolution filter to identify and highlight areas of sharp intensity change. To maximize performance, it utilizes a two-tier concurrency model: it processes multiple image files simultaneously while further dividing the row-by-row image filtering across multiple threads.",
    bullets: [
      "Implemented a two-level parallelization strategy using POSIX Threads (pthreads) to handle multiple image files and segment row-by-row filtering simultaneously.",
      "Manually parsed, processed, and wrote binary RGB pixel data to apply a 3x3 Laplacian convolution filter without relying on external image processing libraries.",
      "Validated memory safety and eliminated threading errors using Valgrind and Helgrind, and automated batch processing workflows with a custom Bash script.",
    ],
    tags: ["C", "POSIX Threads", "GCC", "Valgrind", "Helgrind", "Multithreading", "Mutex Synchronization"],
    accent: T.accent3,
    github: null,
    live: null,
    screenshotGridCount: 2,
    screenshots: [
      {
        src: "/projects/MultithreadedImageEdgeDetection/original_sage.png",
        caption: "Original P6 PPM input image of a sage landscape, used as input to the edge detector.",
      },
      {
        src: "/projects/MultithreadedImageEdgeDetection/edge_detected_sage.png",
        caption: "Edge-detected output after applying the 3x3 Laplacian filter using multithreaded convolution. Edges appear as bright lines against a dark background, highlighting areas of sharp intensity change in the original image.",
      },
      {
        src: "/projects/MultithreadedImageEdgeDetection/convolution_diagram.png",
        caption: "Diagram illustrating the discrete convolution process used in the Laplacian filter. Each output pixel is computed by multiplying neighboring input pixel values with the corresponding filter weights and summing the results.",
      },
    ],
  },
  {
    slug: "mini-unix-shell",
    number: "04",
    title: "Mini Unix Shell",
    subtitle: "Systems Programming · Unix Process Management",
    oneliner:
      "A custom Unix shell interpreter built in C that implements the fork-exec-wait pattern, and six built-in POSIX commands, all with zero memory leaks verified via Valgrind.",
    description:
      "A custom, simplified command-line interpreter that mimics the behavior of Unix shells like bash or zsh. Operating via a continuous read-eval-print loop, the program handles user input to either execute custom built-in commands directly within the shell process or fork child processes to run external Unix commands. It was designed to exercise core operating systems concepts, including process lifecycle management, dynamic memory allocation, and direct interaction with system calls.",
    bullets: [
      "Implemented the fork-exec-wait pattern to accurately manage child processes, and utilized raw POSIX system calls to build six native shell commands (like stat and tail).",
      "Engineered a robust input parser to tokenize arguments and handle arbitrary whitespace entirely from scratch, bypassing standard library shortcuts like strtok.",
      "Ensured a completely memory-safe architecture with zero leaks (verified via Valgrind) and applied comprehensive error handling across all system interactions.",
    ],
    tags: ["C", "POSIX API", "GCC", "GNU Make", "Valgrind", "GDB", "Linux"],
    accent: T.accent2,
    github: null,
    live: null,
    screenshotGridCount: 2,
    screenshots: [
      {
        src: "/projects/MiniUnixShell/shell_launch_and_navigation.png",
        caption: "Demonstrating the shell's built-in navigation commands: pwd displays the current working directory, cd .. moves to the parent directory, and cd with no arguments returns to the home directory.",
      },
      {
        src: "/projects/MiniUnixShell/external_commands.png",
        caption: "Executing external Unix commands through the fork-exec-wait pattern: ls -l lists directory contents, echo prints output, whoami returns the current user, and date displays the system time — all parsed and executed as child processes.",
      },
      {
        src: "/projects/MiniUnixShell/touch_and_stat.png",
        caption: "Using the built-in touch command to create a new file, then inspecting it with stat, which displays file metadata including size, permissions, inode number, device info, ownership, and access/modify/change timestamps.",
      },
      {
        src: "/projects/MiniUnixShell/tail_single_and_multi.png",
        caption: "The built-in tail command displaying the last 10 lines of a 15-line file. When given multiple files, it automatically prefixes each output section with a ==> filename <== header to distinguish between them.",
      },
    ],
  },
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
