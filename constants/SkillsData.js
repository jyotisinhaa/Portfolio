import { AiFillHtml5, AiFillRobot } from "react-icons/ai";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiGrafana,
  SiPrometheus,
  SiSpringboot,
  SiTensorflow,
  SiGit,
  SiJira,
  SiSwagger,
  SiPostman,
  SiStreamlit,
  SiMicrosoftsqlserver,
  SiHelm,
  SiFastapi,
  SiCsharp,
  SiGo,
} from "react-icons/si";
import {
  FaJava,
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaLanguage,
  FaBrain,
  FaRobot,
} from "react-icons/fa";
import { TbBrandGolang, TbApi } from "react-icons/tb";
import { BiData, BiNetworkChart } from "react-icons/bi";

export const TechStackData = [
  {
    "Programming Languages": [
      {
        name: "Java",
        icon: <FaJava className="md:text-4xl text-2xl" color="#007396" />,
      },
      {
        name: "C#",
        icon: <SiCsharp className="md:text-4xl text-2xl" color="#68217a" />,
      },
      {
        name: "Python",
        icon: <SiPython className="md:text-4xl text-2xl" color="#3776AB" />,
      },
      {
        name: "Golang",
        icon: (
          <TbBrandGolang className="md:text-4xl text-2xl" color="#00ADD8" />
        ),
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="md:text-4xl text-2xl" color="#F7DF1E" />,
      },
      {
        name: "SQL",
        icon: <FaDatabase className="md:text-4xl text-2xl" color="#4479A1" />,
      },
      {
        name: "HTML",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#E34F26" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color="#1572B6" />,
      },
      {
        name: "React JS",
        icon: <SiReact className="md:text-4xl text-2xl" color="#61DAFB" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="md:text-4xl text-2xl" color="#7952B3" />,
      },
    ],
    "AI & LLM": [
      {
        name: "LangChain",
        icon: (
          <BiNetworkChart className="md:text-4xl text-2xl" color="#1C3C3C" />
        ),
      },
      {
        name: "OpenAI",
        icon: <FaBrain className="md:text-4xl text-2xl" color="#412991" />,
      },
      {
        name: "RAG",
        icon: <BiData className="md:text-4xl text-2xl" color="#FF6B6B" />,
      },
      {
        name: "FAISS",
        icon: <FaDatabase className="md:text-4xl text-2xl" color="#00599C" />,
      },
      {
        name: "Pinecone",
        icon: <FaDatabase className="md:text-4xl text-2xl" color="#000000" />,
      },
      {
        name: "MCP",
        icon: <TbApi className="md:text-4xl text-2xl" color="#4A90E2" />,
      },
      {
        name: "Ollama",
        icon: <FaLanguage className="md:text-4xl text-2xl" color="#8B5CF6" />,
      },
      {
        name: "Hugging Face",
        icon: <FaRobot className="md:text-4xl text-2xl" color="#FFD21E" />,
      },
      {
        name: "Transformers",
        icon: <BiData className="md:text-4xl text-2xl" color="#FF6B6B" />,
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="md:text-4xl text-2xl" color="#FF6F00" />,
      },
      {
        name: "Prompt Eng.",
        icon: <FaLanguage className="md:text-4xl text-2xl" color="#10B981" />,
      },
    ],
    Databases: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="md:text-4xl text-2xl" color="#4169E1" />,
      },
      {
        name: "MS SQL Server",
        icon: (
          <SiMicrosoftsqlserver
            className="md:text-4xl text-2xl"
            color="#CC2927"
          />
        ),
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="md:text-4xl text-2xl" color="#47A248" />,
      },
      {
        name: "Redis",
        icon: <SiRedis className="md:text-4xl text-2xl" color="#DC382D" />,
      },
      {
        name: "Trino",
        icon: <FaDatabase className="md:text-4xl text-2xl" color="#DD00A1" />,
      },
      {
        name: "Starburst",
        icon: <FaDatabase className="md:text-4xl text-2xl" color="#0099FF" />,
      },
      {
        name: "Apache Hive",
        icon: <FaDatabase className="md:text-4xl text-2xl" color="#FDEE21" />,
      },
    ],
    "Cloud & DevOps": [
      {
        name: "Docker",
        icon: <SiDocker className="md:text-4xl text-2xl" color="#2496ED" />,
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes className="md:text-4xl text-2xl" color="#326CE5" />,
      },
      {
        name: "Helm",
        icon: <SiHelm className="md:text-4xl text-2xl" color="#0F1689" />,
      },
      {
        name: "AWS Lambda",
        icon: <SiAmazonaws className="md:text-4xl text-2xl" color="#FF9900" />,
      },
      {
        name: "AWS EC2",
        icon: <SiAmazonaws className="md:text-4xl text-2xl" color="#FF9900" />,
      },
      {
        name: "AWS S3",
        icon: <SiAmazonaws className="md:text-4xl text-2xl" color="#FF9900" />,
      },
      {
        name: "Grafana",
        icon: <SiGrafana className="md:text-4xl text-2xl" color="#F46800" />,
      },
      {
        name: "Prometheus",
        icon: <SiPrometheus className="md:text-4xl text-2xl" color="#E6522C" />,
      },
    ],
    "Backend & Tools": [
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="md:text-4xl text-2xl" color="#6DB33F" />,
      },
      {
        name: "Maven",
        icon: <BiData className="md:text-4xl text-2xl" color="#C71A36" />,
      },
      {
        name: "Hibernate",
        icon: <BiData className="md:text-4xl text-2xl" color="#59666C" />,
      },
      {
        name: "ASP.NET",
        icon: <SiCsharp className="md:text-4xl text-2xl" color="#512BD4" />,
      },
      {
        name: "FastAPI",
        icon: <SiFastapi className="md:text-4xl text-2xl" color="#009688" />,
      },
      {
        name: "RESTful APIs",
        icon: <TbApi className="md:text-4xl text-2xl" color="#009688" />,
      },
      {
        name: "gRPC",
        icon: <TbApi className="md:text-4xl text-2xl" color="#244C5A" />,
      },
      {
        name: "Streamlit",
        icon: <SiStreamlit className="md:text-4xl text-2xl" color="#FF4B4B" />,
      },
    ],
    "ML & Tools": [
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="md:text-4xl text-2xl" color="#FF6F00" />,
      },
      {
        name: "NumPy",
        icon: <SiPython className="md:text-4xl text-2xl" color="#013243" />,
      },
      {
        name: "Pandas",
        icon: <SiPython className="md:text-4xl text-2xl" color="#150458" />,
      },
      {
        name: "CNN",
        icon: <BiData className="md:text-4xl text-2xl" color="#FF6B6B" />,
      },
      {
        name: "RNN",
        icon: <BiData className="md:text-4xl text-2xl" color="#4ECDC4" />,
      },
      {
        name: "MLP",
        icon: <BiData className="md:text-4xl text-2xl" color="#95E1D3" />,
      },
      {
        name: "Git",
        icon: <SiGit className="md:text-4xl text-2xl" color="#F05032" />,
      },
      {
        name: "JIRA",
        icon: <SiJira className="md:text-4xl text-2xl" color="#0052CC" />,
      },
      {
        name: "Swagger",
        icon: <SiSwagger className="md:text-4xl text-2xl" color="#85EA2D" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="md:text-4xl text-2xl" color="#FF6C37" />,
      },
    ],
  },
];
