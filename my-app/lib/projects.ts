import { T } from "@/lib/theme";

export interface Screenshot {
  src: string;
  caption: string;
  maxWidth?: number | string;
}

export type ProjectCategory =
  | "Systems Programming"
  | "Machine Learning"
  | "Mobile"
  | "Algorithms"
  | "Databases";

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
  category: ProjectCategory;
  featured?: boolean;
  featuredOrder?: number;
  github: string | null;
  live: string | null;
  youtube?: string | null;
  screenshots?: Screenshot[];
  screenshotGridCount?: number; // how many screenshots go in the grid (rest render full-width below)
  screenshotColumns?: number;  // number of columns in the screenshot grid (default: 2)
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
    category: "Algorithms",
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
    accent: T.accent,
    category: "Algorithms",
    featured: true,
    featuredOrder: 3,
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
    slug: "calculator-app",
    number: "12",
    title: "Calculator App",
    subtitle: "Mobile Development · iOS-Style React Native Calculator",
    oneliner:
      "A fully functional iOS-style calculator built in React Native, featuring a pixel-accurate dark theme, robust edge case handling, and cross-platform support verified by 27 unit tests.",
    description:
      "This mobile application is a fully functional calculator that replicates the classic iOS calculator interface. Developed for a Mobile Application Development course, the app handles standard arithmetic, decimals, percentages, and positive/negative toggling. It features a dark-themed, highly accurate visual design and robust error handling to manage edge cases like division by zero and consecutive operator inputs.",
    bullets: [
      "Implemented a reliable calculation engine with robust safeguards against edge cases like division by zero, leading zeros, and redundant operator inputs.",
      "Matched a strict visual design specification to recreate the familiar dark theme, circular buttons, and color scheme of a classic smartphone calculator.",
      "Leveraged a single React Native codebase to efficiently target both iOS and Android platforms, ensuring accuracy by successfully passing 27 rigorous unit tests.",
    ],
    tags: ["JavaScript", "React Native", "Expo", "Jest", "React Native Testing Library"],
    accent: T.accent2,
    category: "Mobile",
    github: null,
    live: null,
    screenshotGridCount: 0,
    screenshots: [
      {
        src: "/projects/CalculatorApp/calculator-image.png",
        caption: "The calculator UI running on iOS — demonstrating the dark theme, circular button layout, and color-coded operator keys that closely replicate the native iOS calculator experience.",
        maxWidth: 360,
      },
    ],
  },
  {
    slug: "robotic-goalie",
    number: "18",
    title: "Robotic Goalie",
    subtitle: "Robotics & Computer Vision · Autonomous Goal Defense",
    oneliner:
      "A real-time robotic goalie system that streams live video from a smartphone, detects incoming balls with a fine-tuned YOLOv8 model, and issues movement commands to an iRobot Create 3.",
    description:
      "A real-time robotic goalie system that utilizes an iRobot Create 3 to autonomously defend a goal against incoming shots. Built on a Sense → Think → Act pipeline, the system streams live video from a robot-mounted smartphone to a laptop. The software processes the video feed to detect the incoming ball, uses a greedy centering algorithm to determine the necessary trajectory, and instantly issues precise movement commands to the robot via Bluetooth to block the shot.",
    bullets: [
      "Engineered a non-blocking software architecture using Python's asyncio and threading, ensuring the OpenCV video capture loop and the robot's Bluetooth event loop operated simultaneously without lagging.",
      "Built a robust data pipeline to merge, re-index, and manage custom datasets sourced from Roboflow, then trained and fine-tuned a YOLOv8 object detection model to reliably track high-speed targets.",
      "Bridged high-level computer vision logic with physical hardware execution, translating bounding-box coordinates into actionable ROS 2 commands via the iRobot Education SDK.",
    ],
    tags: ["Python", "YOLOv8", "OpenCV", "Roboflow", "iRobot SDK", "asyncio", "Bluetooth BLE"],
    accent: T.accent,
    category: "Machine Learning",
    featured: true,
    featuredOrder: 1,
    github: "https://github.com/pranav-cheraku/robotic-goalie",
    live: null,
    youtube: "https://www.youtube.com/watch?v=eCNDledIDFw&list=PLh_sUoeDic-4XiX038rOFWnLxm4t1trq6&index=2",
    screenshots: [
      {
        src: "/projects/RoboticGoalie/ObjectDeteciton.png",
        caption: "YOLOv8 object detection in action — the model identifies and tracks the incoming ball in real time, drawing a bounding box around the target.",
      },
      {
        src: "/projects/RoboticGoalie/OverheadView.png",
        caption: "Overhead view of the robotic goalie setup — the iRobot Create 3 positioned in front of the goal, with the smartphone camera mounted to stream live video to the detection pipeline.",
      },
    ],
  },
  {
    slug: "dictionary-app",
    number: "17",
    title: "Dictionary App",
    subtitle: "Mobile Development · Customizable Word Search Experience",
    oneliner:
      "A React Native dictionary app with real-time definitions, phonetic audio playback, interactive synonyms, and persistent light/dark mode and font preferences via React Context.",
    description:
      "A mobile dictionary application built to provide a seamless and highly customizable word-search experience. Users can look up English words to view comprehensive definitions, parts of speech, and example usage, as well as listen to phonetic pronunciations. The app goes beyond basic search by featuring interactive synonyms and letting users fully personalize their experience with dynamic light/dark mode toggling and multiple font selections that persist across the entire application.",
    bullets: [
      "Successfully integrated The Free Dictionary API using Axios to fetch real-time word data, and utilized expo-audio to handle streaming playback for phonetic pronunciations.",
      "Engineered a lightweight, robust global state system using the React Context API and custom hooks (useTheme, useFont), allowing user preferences for typography and color themes to instantly propagate across all screens.",
      "Built a multi-screen stack navigation flow using React Navigation, complete with a floating action button for settings access, custom SVG iconography, and responsive safe-area handling.",
    ],
    tags: ["JavaScript", "React Native", "Expo", "Axios", "Jest", "React Native Testing Library"],
    accent: T.accent3,
    category: "Mobile",
    github: null,
    live: null,
    screenshotGridCount: 3,
    screenshotColumns: 3,
    screenshots: [
      {
        src: "/projects/DictionaryApp/homescreen.png",
        caption: "The main search screen showing a full dictionary entry for 'keyboard' — including phonetic pronunciation with an audio play button, noun and verb definitions, and a tappable synonym.",
      },
      {
        src: "/projects/DictionaryApp/fontscreen.png",
        caption: "The font selection screen with Sans Serif, Serif, and Monospace options. The live preview panel updates instantly to reflect the chosen typeface across the entire app.",
      },
      {
        src: "/projects/DictionaryApp/themescreen.png",
        caption: "The theme selection screen offering Light and Dark color schemes, managed globally via the React Context API so the preference persists across all screens.",
      },
    ],
  },
  {
    slug: "single-user-relational-database",
    number: "16",
    title: "Single User Relational Database",
    subtitle: "Database Systems · In-Memory RDBMS from Scratch",
    oneliner:
      "SURLY is a fully functional RDBMS built from scratch in Java, featuring a custom query language, a lexical analyzer, and support for full DDL/DML operations.",
    description:
      "SURLY is a fully functional, single-user relational database management system built entirely from scratch. Designed as a lightweight, in-memory database, it features its own custom query language capable of parsing and executing both Data Definition Language (DDL) and Data Manipulation Language (DML) commands. The system reads plain-text command files through a custom-built lexical analyzer, interprets the statements, and executes complex database operations without relying on any external libraries, frameworks, or persistent disk storage.",
    bullets: [
      "Built a lexical analyzer from scratch to parse a custom SQL-like query language, routing commands through dedicated parser classes to execute in-memory operations.",
      "Developed robust logic for creating, destroying, inserting, and deleting relations with strict schema validation, type checking, and length constraints.",
      "Implemented complex relational algebra transformations (SELECT, PROJECT, JOIN) alongside a condition evaluation engine that handles AND/OR logic precedence and six relational operators.",
      "Architected the entire database system including data storage, a metadata registry (CATALOG), and a dynamically formatted tabular print system using exclusively the Java Standard Library with zero external dependencies.",
    ],
    tags: ["Java", "Relational Algebra", "Lexical Analysis", "LinkedList", "HashSet"],
    accent: T.accent,
    category: "Databases",
    featured: true,
    featuredOrder: 5,
    github: null,
    live: null,
    screenshotGridCount: 4,
    screenshots: [
      {
        src: "/projects/SingleUserRelationalDatabase/surly-schema-creation.png",
        caption: "Executing the SURLY interpreter from the command line. The system reads a plain-text command file, creates relation schemas (STUDENT, COURSE, ENROLLMENT), loads tuples via INSERT commands, and displays the STUDENT relation in a dynamically formatted table.",
      },
      {
        src: "/projects/SingleUserRelationalDatabase/surly-select-queries.png",
        caption: "Demonstrating the SELECT relational algebra operation with WHERE clause filtering. CS_STUDENTS filters by major, GOOD_STUDENTS uses a numeric comparison (GPA > 3.5), and SOPHOMORE_CS combines two conditions with AND logic — all producing temporary relations.",
      },
      {
        src: "/projects/SingleUserRelationalDatabase/surly-join-results.png",
        caption: "The JOIN operation in action. STUDENT_COURSES pairs each student with their enrollments using a nested-loop theta join on matching IDs. FULL_ENROLLMENT chains a second join to bring in course titles and credits, demonstrating multi-table query composition.",
      },
      {
        src: "/projects/SingleUserRelationalDatabase/surly-delete.png",
        caption: "Conditional tuple deletion using DELETE WHERE with compound conditions. The first command removes all enrollments with a grade of C, and the second targets a specific student-course pair using AND. Each operation reports the number of tuples removed and prints the updated relation.",
      },
    ],
  },
  {
    slug: "jdbc-course-registration",
    number: "15",
    title: "JDBC-Based Course Registration System",
    subtitle: "Database Systems · Java Student Registration CLI",
    oneliner:
      "A Java application that connects to a MySQL database via JDBC, enabling students to authenticate, view transcripts, audit degree requirements, and enroll or drop courses.",
    description:
      "This application connects to a MySQL database via JDBC and allows students to log in with their student ID, view their academic transcript, check remaining degree requirements, enroll in course sections with prerequisite validation, and drop courses. The system enforces data integrity by verifying student identity, checking for duplicate enrollments, and validating prerequisites before allowing registration. Database credentials are passed as command-line arguments for portability, and all user-facing queries use prepared statements to prevent SQL injection.",
    bullets: [
      "Implemented a full registration workflow handling authentication, enrollment, transcript retrieval, and degree auditing against a relational database with multiple joined tables.",
      "Built prerequisite validation logic that queries the prereq table and cross-references the student's completed coursework, supporting courses with multiple prerequisites.",
      "Used prepared statements exclusively for all user-input queries, preventing SQL injection vulnerabilities.",
      "Implemented comprehensive error handling so the program gracefully recovers from invalid input, missing records, and database errors without crashing.",
    ],
    tags: ["Java", "MySQL", "JDBC", "MySQL Connector/J", "SQL"],
    accent: T.accent3,
    category: "Databases",
    github: null,
    live: null,
    screenshotGridCount: 4,
    screenshots: [
      {
        src: "/projects/JDBC-BasedCourseRegistrationSystem/1-login-and-transcript.png",
        caption: "Student authentication with ID validation, followed by a chronologically sorted academic transcript displaying course details, grades, and credits retrieved via a single JDBC prepared statement query.",
      },
      {
        src: "/projects/JDBC-BasedCourseRegistrationSystem/2-degree-requirements.png",
        caption: "Degree requirements check that compares completed coursework against all courses in the student's department, identifying CS-319 Image Processing as the only remaining requirement.",
      },
      {
        src: "/projects/JDBC-BasedCourseRegistrationSystem/3-add-course-prereq-check.png",
        caption: "Course enrollment flow demonstrating prerequisite validation — the system queries the prereq table and blocks enrollment in BIO-301 because the student hasn't completed the required prerequisite courses.",
      },
      {
        src: "/projects/JDBC-BasedCourseRegistrationSystem/4-add-remove-and-exit.png",
        caption: "Successful course enrollment into CS-101 Fall 2009, followed by the remove course feature displaying all enrolled sections and allowing the student to drop a selected course via a DELETE prepared statement.",
      },
    ],
  },
  {
    slug: "world-clock-app",
    number: "14",
    title: "World Clock App",
    subtitle: "Mobile Development · Dynamic Time & Location Dashboard",
    oneliner:
      "A dynamic mobile clock app that delivers real-time, IP-based location data, automatic day/night theming, expandable temporal details, and refreshable programming quotes.",
    description:
      "A dynamic mobile clock application that provides users with real-time, location-aware data based on their IP address. The app features a highly responsive, time-sensitive interface that automatically transitions between day and night themes, complete with personalized greetings, custom SVG icons, and shifting backgrounds. Beyond standard timekeeping, the app serves as a useful dashboard by offering an expandable panel with in-depth temporal details like timezones and week numbers, and displaying refreshable programming quotes.",
    bullets: [
      "Engineered a visually reactive interface that conditionally renders themes, custom inline SVGs, and dynamic greetings based on a 12-hour day/night cycle, leveraging React Hooks for smooth UI transitions.",
      "Orchestrated asynchronous data fetching from three distinct external APIs to synchronize location, exact time, and programming quotes, while managing platform-specific Expo configurations for both iOS and Android.",
      "Designed a comprehensive unit testing architecture using Jest and React Testing Library to ensure full coverage across all components and custom hooks.",
    ],
    tags: ["JavaScript", "React Native", "Expo", "Axios", "Jest", "React Testing Library"],
    accent: T.accent2,
    category: "Mobile",
    github: null,
    live: null,
    screenshotGridCount: 4,
    screenshots: [
      {
        src: "/projects/worldClockApp/day-home.png",
        caption: "Day theme — collapsed view showing the afternoon greeting, current time, location in Bellingham WA, and a refreshable programming quote at the top.",
      },
      {
        src: "/projects/worldClockApp/day-menu.png",
        caption: "Day theme — expanded panel revealing in-depth temporal details including the current timezone, day of the year, day of the week, and week number.",
      },
      {
        src: "/projects/worldClockApp/night-home.png",
        caption: "Night theme — collapsed view showing the evening greeting with a starry sky background, automatically applied based on the 12-hour day/night cycle.",
      },
      {
        src: "/projects/worldClockApp/night-menu.png",
        caption: "Night theme — expanded panel showing the same temporal details against the night background, demonstrating the theme transition across the full interface.",
      },
    ],
  },
  {
    slug: "interactive-comments-app",
    number: "13",
    title: "Interactive Comments App",
    subtitle: "Mobile Development · Threaded Social Comments",
    oneliner:
      "A cross-platform React Native app featuring a fully interactive threaded comments section with nested replies, upvoting, and CRUD operations.",
    description:
      "A cross-platform mobile application featuring an interactive, threaded comments section. Built to mimic a standard social discussion interface, the app allows users to view nested comment threads, compose new replies, cast upvotes or downvotes, and manage their own posts. It handles data dynamically through a mock REST API, simulating real-world backend interactions.",
    bullets: [
      "Developed a fully functional comment system featuring visually indented nested replies, custom SVG icons, and responsive layouts optimized for modern mobile screens.",
      "Implemented comprehensive CRUD functionality with identity verification, utilizing Axios and JSON Server to securely manage user posts and simulate real-world backend interactions.",
      "Ensured high code quality by engineering a comprehensive automated testing suite with Jest and React Native Testing Library to verify core user interactions and API mocking.",
    ],
    tags: ["JavaScript", "React Native", "Expo", "Axios", "JSON Server", "Jest", "React Native Testing Library"],
    accent: T.accent3,
    category: "Mobile",
    github: null,
    live: null,
    screenshotGridCount: 2,
    screenshots: [
      {
        src: "/projects/InteractiveCommentsApp/design.png",
        caption: "The main comments feed showing nested reply threads, upvote/downvote controls, timestamps, and the compose bar — with the current user's post marked and editable.",
      },
      {
        src: "/projects/InteractiveCommentsApp/modal.png",
        caption: "The delete confirmation modal triggered when a user attempts to remove their own comment, with cancel and confirm actions overlaid on the dimmed thread.",
      },
    ],
  },
  {
    slug: "network-chat-application",
    number: "11",
    title: "Network Chat Application",
    subtitle: "Systems Programming · TCP Client-Server Messaging",
    oneliner:
      "A TCP-based client-server chat application in C, built with a custom binary protocol and I/O multiplexing via select() to handle concurrent users without threads or forking.",
    description:
      "A TCP-based client-server chat application that enables real-time public and private messaging. Built entirely in C, the system relies on a custom binary protocol and utilizes I/O multiplexing to efficiently handle concurrent users and network communication without the overhead of multithreading or forking.",
    bullets: [
      "Designed and implemented a lightweight custom binary protocol using 16-bit headers for control messages and 32-bit headers for chat messages.",
      "Leveraged the select() system call for robust I/O multiplexing on both the client and server sides to monitor multiple sockets and standard input simultaneously.",
      "Implemented advanced data handling features, including message chunking for payloads over 2000 bytes, partial message buffering, and graceful disconnect management.",
      "Built a configurable GNU Make build system and utilized unit testing, GDB, and Valgrind to ensure memory safety and accurate header parsing.",
    ],
    tags: ["C", "POSIX Sockets", "TCP", "I/O Multiplexing", "GNU Make", "GCC", "GDB", "Valgrind"],
    accent: T.accent,
    category: "Systems Programming",
    featured: true,
    featuredOrder: 4,
    github: null,
    live: null,
    screenshotGridCount: 2,
    screenshots: [
      {
        src: "/projects/NetworkChatApplication/chat-full-session.png",
        caption: "Full chat session from Alice's perspective — showing username negotiation, public messaging, private messages with Bob, and user join/leave notifications as Charlie and Bob disconnect.",
      },
      {
        src: "/projects/NetworkChatApplication/chat-private-messaging.png",
        caption: "Bob's view of the chat session — receiving public messages from all users, exchanging private messages with Alice, and handling an error when attempting to message a nonexistent user.",
      },
      {
        src: "/projects/NetworkChatApplication/chat-public-and-private.png",
        caption: "Charlie's view demonstrating message visibility — public messages from all users are visible, while private messages between Alice and Bob are correctly excluded from Charlie's terminal.",
      },
    ],
  },
  {
    slug: "tcp-word-game",
    number: "10",
    title: "TCP-Based Two Player Word Game",
    subtitle: "Systems Programming · Networked Client-Server Architecture",
    oneliner:
      "A concurrent, turn-based two-player word guessing game in C using a TCP client-server architecture, a custom binary protocol, and a Trie for real-time Scrabble dictionary validation.",
    description:
      "A highly concurrent, turn-based, two-player word guessing game built entirely in C. Utilizing a robust client-server architecture over TCP, the system pairs players into real-time, best-of-five matches where they compete to form valid Scrabble words from a randomized letter board. The project features strict server-side validation, time-limit enforcement, and communicates via a highly specified, custom binary protocol to ensure cross-compatibility between any compliant client and server.",
    bullets: [
      "Designed a robust TCP server that leverages POSIX process forking (fork()) to manage and host multiple independent matches simultaneously without blocking.",
      "Implemented a highly efficient Trie data structure from scratch to provide lightning-fast word validation against the massive TWL06 competitive Scrabble dictionary.",
      "Exchanged raw data using uint8_t values and character arrays over TCP streams, ensuring strict adherence to a custom protocol specification for flawless client-server interoperability.",
      "Managed game state and enforced strict player turn time limits server-side using socket-level timeout configurations.",
    ],
    tags: ["C", "POSIX Sockets", "TCP", "GNU Make", "GCC", "GDB", "Trie"],
    accent: T.accent2,
    category: "Systems Programming",
    github: null,
    live: null,
    screenshotGridCount: 2,
    screenshots: [
      {
        src: "/projects/TCP-BasedTwoPlayerWordGame/player1-client-output.png",
        caption: "Player 1's client view — shows connection setup, board generation, word validation, turn-based gameplay across multiple rounds, and score tracking between players.",
      },
      {
        src: "/projects/TCP-BasedTwoPlayerWordGame/player2-client-output.png",
        caption: "Player 2's client view — demonstrates synchronized game state, opponent word display, and round progression as both players communicate through the server over TCP.",
      },
    ],
  },
  {
    slug: "toyos",
    number: "09",
    title: "ToyOS",
    subtitle: "Operating Systems · RISC-V Kernel Engineering",
    oneliner:
      "A teaching OS for the 64-bit RISC-V architecture where I built the core kernel internals like process lifecycle management, virtual memory, system calls, and synchronization primitives.",
    description:
      "ToyOS is a teaching operating system for the 64-bit RISC-V architecture, developed as part of an Operating Systems course. While the user-level programs, library code, and hardware abstraction layers were provided as a foundation, my work focused exclusively on engineering the core kernel internals from scratch. Over the quarter, I implemented the foundational subsystems, including strict resource management, virtual memory validation, and full process lifecycles, necessary to bring the OS from a kernel-only state to safely executing user-level shell programs and games.",
    bullets: [
      "Implemented complete process lifecycle management, handling process creation (Clone), termination (Exit), and parent-child synchronization (Wait/Join), which included deep-copying three-level page tables and user CPU states.",
      "Built secure user-to-kernel mode switching, hardware trap handling for dynamic stack growth via page faults, and system call execution to safely load and run ELF binaries.",
      "Engineered robust synchronization primitives, creating custom Mutex and Condition variables with fair FIFO waiting queues and direct ownership transfer to safely manage concurrency.",
      "Managed all kernel objects using strictly statically allocated arrays, bitmaps, and custom linked lists to completely eliminate dynamic memory allocation within the kernel.",
    ],
    tags: ["C++", "RISC-V Assembly", "C", "QEMU", "GDB", "Sv39 Virtual Memory"],
    accent: T.accent3,
    category: "Systems Programming",
    github: null,
    live: null,
  },
  {
    slug: "fake-image-detection",
    number: "08",
    title: "Fake Image Detection",
    subtitle: "Deep Learning · GAN Face Classification",
    oneliner:
      "A deep learning binary classifier that distinguishes genuine human faces from AI-generated GAN fakes, trained and evaluated across many architectures.",
    description:
      "This project focused on developing a deep learning binary classifier to distinguish between genuine human faces and AI-generated (GAN) fakes, addressing the real-world challenge of synthetic media and disinformation on social platforms. I engineered a progressive series of neural network architectures, starting from a simple baseline and exploring various advanced model designs. By systematically increasing model complexity and implementing modern deep learning techniques, I rigorously evaluated performance across multiple iterations to identify the optimal approach for predictive classification.",
    bullets: [
      "Designed and trained several distinct models of increasing complexity, implementing a variety of modern deep learning structural techniques to systematically evaluate and improve classification performance.",
      "Built robust training loops utilizing dynamic learning rate scheduling (ReduceLROnPlateau), custom early stopping, gradient clipping, and tailored optimizer parameters.",
      "Developed an end-to-end data pipeline to load, preprocess, and apply data augmentations to 256×256 image datasets.",
      "Evaluated model efficacy across standard classification metrics including precision, recall, F1-score, and ROC-AUC.",
    ],
    tags: ["Python", "PyTorch", "Torchvision", "NumPy", "scikit-learn", "Pillow"],
    accent: T.accent,
    category: "Machine Learning",
    featured: true,
    featuredOrder: 2,
    github: null,
    live: null,
  },
  {
    slug: "beer-style-prediction",
    number: "07",
    title: "Beer Style Prediction",
    subtitle: "Machine Learning · Multiclass Classification",
    oneliner:
      "A multiclass classification system that predicts beer styles from brewing ingredients, trained on over 200,000 recipes and 10,355 unique features across 80 distinct style categories.",
    description:
      "For my Machine Learning final project, I developed a multiclass classification system to predict beer styles based strictly on their brewing ingredients. Working with a massive, high-dimensional dataset of over 200,000 recipes and 10,355 unique ingredient features, the goal was to accurately categorize each recipe into one of 80 distinct beer styles. I systematically progressed from simple baseline models to exploring more complex architectures, navigating the unique challenges of highly sparse data to build a robust predictive classification system.",
    bullets: [
      "Engineered a final prediction model that successfully captured complex ingredient relationships, significantly outperforming the initial baseline benchmarks.",
      "Successfully managed and processed massive, highly sparse feature matrices (over 10,000 dimensions) using scipy.sparse to efficiently feed data into both scikit-learn and TensorFlow models.",
      "Systematically built, tuned, and evaluated a wide range of algorithms to find the optimal approach, exploring models such as Logistic Regression, KNN, Random Forest, XGBoost, and Deep Neural Networks.",
    ],
    tags: ["Python", "TensorFlow / Keras", "scikit-learn", "XGBoost", "NumPy", "SciPy", "Matplotlib", "Seaborn"],
    accent: T.accent3,
    category: "Machine Learning",
    github: null,
    live: null,
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
    category: "Machine Learning",
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
    category: "Systems Programming",
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
    category: "Systems Programming",
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
    category: "Algorithms",
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
