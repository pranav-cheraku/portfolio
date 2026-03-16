import FadeIn from "@/components/FadeIn";
import { T } from "@/lib/theme";
import SkillSection from "./SkillSection";

export const metadata = {
  title: "Skills - Pranav Cheraku",
};

const CATEGORIES = [
  {
    number: "01",
    label: "Languages",
    accent: T.accent,
    skills: [
      {
        name: "Python",
        context:
          "Core language for 8+ projects — Robotic Goalie, Fake Image Detection, Beer Style Prediction, KELP, Pathora, VentureMap, and both research labs.",
      },
      {
        name: "Java",
        context:
          "Used across 5 academic projects — Phylogenetic Tree Construction, Lattice Speech Recognition, Single-User RDBMS, JDBC Course Registration, and N-gram Language Model.",
      },
      {
        name: "TypeScript",
        context:
          "Used in KELP, Pathora, and VentureMap.",
      },
      {
        name: "JavaScript",
        context:
          "Powered 5 projects — Calculator App, Dictionary App, World Clock App, Interactive Comments App, and the OHTCC website.",
      },
      {
        name: "C",
        context:
          "Systems programming — ToyOS (RISC-V kernel), Mini Unix Shell, Multithreaded Image Edge Detection, and Network Chat Application.",
      },
      {
        name: "C++",
        context: "Used alongside C in ToyOS for low-level kernel components.",
      },
      {
        name: "SQL",
        context:
          "Used in production at FAST Enterprises to query and analyze GenTax tax data, and in the JDBC Course Registration System.",
      },
      {
        name: "VB.NET",
        context:
          "Used at FAST Enterprises to implement and configure live GenTax features serving millions of Pennsylvania taxpayers.",
      },
      {
        name: "C#",
        context: "Personal projects and coursework outside of this portfolio.",
      },
      {
        name: "HTML / CSS",
        context: "Built the OHTCC nonprofit website's UI from scratch.",
      },
      {
        name: "LaTeX",
        context: "Used for writing technical and academic documents.",
      },
    ],
  },
  {
    number: "02",
    label: "Frameworks & Libraries",
    accent: T.accent2,
    skills: [
      {
        name: "React",
        context: "Frontend for KELP, Pathora, VentureMap, and this portfolio.",
      },
      {
        name: "React Native",
        context:
          "Built 4 cross-platform mobile apps — Calculator App, Dictionary App, World Clock App, and Interactive Comments App.",
      },
      {
        name: "Next.js",
        context: "App Router framework powering this portfolio site.",
      },
      {
        name: "Flask",
        context: "REST API backend for Pathora and VentureMap.",
      },
      {
        name: "FastAPI",
        context: "Backend API powering KELP's two-stage AI pipeline.",
      },
      {
        name: "NumPy",
        context:
          "Core numerical library for NumPy Deep Neural Network and Beer Style Prediction.",
      },
      {
        name: "Pandas",
        context:
          "Data processing and transformation in KELP and Beer Style Prediction.",
      },
      {
        name: "Brian2",
        context:
          "Neural simulation framework used in Glomerulus Lab research to model hippocampal seizure dynamics.",
      },
      {
        name: "Expo",
        context:
          "Mobile build and development platform for Calculator App and Dictionary App.",
      },
      {
        name: "Tailwind CSS",
        context: "Styling framework for the OHTCC nonprofit website.",
      },
    ],
  },
  {
    number: "03",
    label: "AI & Machine Learning",
    accent: T.accent3,
    skills: [
      {
        name: "PyTorch",
        context:
          "Neural network training and GAN-based classifier in Fake Image Detection.",
      },
      {
        name: "TensorFlow / Keras",
        context:
          "Used for deep learning model building in Beer Style Prediction.",
      },
      {
        name: "scikit-learn",
        context:
          "Machine learning pipelines in Fake Image Detection and Beer Style Prediction.",
      },
      {
        name: "XGBoost",
        context: "Gradient boosting model used in Beer Style Prediction.",
      },
      {
        name: "LlamaIndex",
        context:
          "ReAct agent framework orchestrating AI tool-use in Pathora and VentureMap.",
      },
      {
        name: "YOLOv8",
        context:
          "Fine-tuned for real-time ball detection in the Robotic Goalie system.",
      },
      {
        name: "OpenCV",
        context:
          "Live video capture and frame processing pipeline in Robotic Goalie.",
      },
      {
        name: "Roboflow",
        context:
          "Dataset management, merging, and augmentation for Robotic Goalie training data.",
      },
      {
        name: "Gemini API",
        context:
          "LLM backbone across three projects — KELP (2.5), Pathora (1.5 Pro), and VentureMap (1.5 Pro).",
      },
    ],
  },
  {
    number: "04",
    label: "Tools & Platforms",
    accent: T.accent,
    skills: [
      {
        name: "Linux / Unix",
        context:
          "Use Unix daily on macOS and Linux — applied directly in ToyOS, Mini Unix Shell, and Multithreaded Edge Detection.",
      },
      {
        name: "Git",
        context:
          "Version control across all projects and collaborative research work.",
      },
      {
        name: "GDB / Valgrind",
        context:
          "Debugging and memory analysis for C systems projects — Network Chat, Mini Unix Shell, and Multithreaded Edge Detection.",
      },
      {
        name: "GNU Make",
        context:
          "Build automation for C-based projects including Network Chat Application, Mini Unix Shell, and TCP Word Game.",
      },
      {
        name: "POSIX Threads / Sockets",
        context:
          "Concurrency and networking primitives powering Multithreaded Image Edge Detection and Network Chat Application.",
      },
      {
        name: "QEMU",
        context: "Hardware emulator for running ToyOS on RISC-V architecture.",
      },
      {
        name: "iRobot SDK / ROS 2",
        context:
          "Robot control interface for issuing real-time movement commands in Robotic Goalie.",
      },
      {
        name: "Deck.gl / Mapbox GL",
        context:
          "3D county polygon rendering and geospatial mapping for KELP's Washington State risk visualization.",
      },
      {
        name: "Netlify",
        context: "Deployment and CI/CD pipeline for the OHTCC website.",
      },
      {
        name: "Jest",
        context:
          "Unit testing framework used across all 4 React Native mobile app projects.",
      },
      {
        name: "Vite",
        context: "Frontend build tooling for VentureMap.",
      },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div style={{ position: "relative" }}>
      
      <FadeIn immediate>
        <h2
          className="page-heading"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 42,
            fontWeight: 400,
            color: T.heading,
            marginBottom: 12,
          }}
        >
          Skills
        </h2>
      </FadeIn>

      <FadeIn immediate delay={60}>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 16,
            color: T.body,
            fontStyle: "italic",
            marginTop: 0,
            marginBottom: 8,
          }}
        >
          Hover or tap any skill to see where it&apos;s been applied.
        </p>
      </FadeIn>

      {CATEGORIES.map((cat, i) => (
        <FadeIn key={cat.number} immediate delay={100 + i * 80}>
          <SkillSection
            number={cat.number}
            label={cat.label}
            accent={cat.accent}
            skills={cat.skills}
          />
        </FadeIn>
      ))}
    </div>
  );
}
