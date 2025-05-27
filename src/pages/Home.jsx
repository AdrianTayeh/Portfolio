import { useRef, useEffect } from "react";
import {
  Container,
  Title,
  Group,
  Image,
  Anchor,
  Text,
  Card,
} from "@mantine/core";
import gsap from "gsap";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "../assets/heroImg.svg";
import cvCreatorImg from "../assets/CVCreator.png";
import spotifyWrappedImg from "../assets/SpotifyWrapped.png";
import appleTailwind from "../assets/AppleTailwind.png";
import guessTheFootballerImg from "../assets/GuessTheFootballer.png";
import workoutJournal from "../assets/WorkoutJournal.png";
import TechStackBand from "../components/TechStackBand";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "CVCreator",
    description:
      "CV Creator is a modern, React-based web application that allows users to easily create, customize, and download professional CVs. The app features a user-friendly interface for entering personal details, education, work experience, and skills, with live preview and PDF export functionality. Built with Vite for fast development and styled for clarity and accessibility, it helps users generate ATS-friendly resumes efficiently..",
    image: cvCreatorImg,
    links: [
      { label: "Website", url: "https://cv-template-react.netlify.app/" },
      { label: "GitHub", url: "https://github.com/AdrianTayeh/CVCreator" },
    ],
  },
  {
    title: "Spotify Wrapped Demo",
    description:
      "Spotify Wrapped Demo is a web application that visualizes a user’s Spotify listening habits using the Spotify Web API. After authenticating with their Spotify account, users can view their top tracks, artists, and albums in a visually engaging three-column layout, each with images. The app is built with modern JavaScript, Vite, and Chart.js, and implements secure OAuth2 authentication with PKCE. Deployed on Netlify, it demonstrates API integration, dynamic UI rendering, and responsive design.",
    image: spotifyWrappedImg,
    links: [
      { label: "Website", url: "https://spotify-wrapped-demo.netlify.app" },
      {
        label: "GitHub",
        url: "https://github.com/AdrianTayeh/Spotify-Wrapped-Demo",
      },
    ],
  },
  {
    title: "Recreation of Apple.com using TailwindCSS",
    description:
      "This project is a responsive Apple-style landing page built with Tailwind CSS and DaisyUI. It features a custom navigation bar with animated dropdown menus, interactive hover effects, and a visually rich layout showcasing Apple products. The design adapts for both desktop and mobile, using modern CSS utility classes and JavaScript for dynamic menu interactions.",
    image: appleTailwind,
    links: [
      {
        label: "Website",
        url: "https://adriantayeh.github.io/AppleTailwindCSS/",
      },
      {
        label: "GitHub",
        url: "https://github.com/AdrianTayeh/AppleTailwindCSS",
      },
    ],
  },
  {
    title: "Guess The Footballer",
    description: (
      <>
        This project is a web-based football player guessing game built with
        React and Vite, featuring a modern UI using Tailwind CSS and Material
        UI. Users select a league and try to guess a randomly chosen footballer,
        receiving feedback on attributes like nationality, league, club,
        position, and age. The backend provides player, club, and flag data via
        a REST API. The frontend was developed in collaboration with{" "}
        <Anchor
          href="https://github.com/KevinRuangrad"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kevin Ruangrad
        </Anchor>
        , showcasing teamwork in building interactive gameplay and dynamic data
        handling.
      </>
    ),
    image: guessTheFootballerImg,
    links: [
      {
        label: "Website",
        url: "https://adriantayeh.github.io/AppleTailwindCSS/",
      },
      {
        label: "GitHub",
        url: "https://github.com/KevinRuangrad/guessthefotballer",
      },
    ],
  },
  {
    title: "WorkoutJournal",
    description:
      "This project is a full-stack Workout Journal application where users can register, log in, and manage their workouts and activities. Built with React and FluentUI for a modern, accessible frontend, and Node.js/Express with a MySQL database for the backend, it allows users to create, edit, and delete workouts, link activities, and track workout details such as date, duration, and comments. The app features authentication, a clean FluentUI-based interface, and real-time updates, making it easy to monitor fitness progress over time.",
    image: workoutJournal,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MH-GRIT/databashantering-tr-ningsdagboken-AdrianTayeh",
      },
    ],
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 600,
        duration: 1.2,
        ease: "power2.out",
      });

      //   gsap.from(gsap.utils.toArray(".project-card"), {
      //     opacity: 0,
      //     x: -200,
      //     duration: 1,
      //     stagger: 0.3,
      //     ease: "power2.out",
      //     scrollTrigger:{
      //         trigger: projectsRef.current,
      //         start: "top 80%",
      //     }
      //   });

      gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: -200,
          duration: 1,
          delay: i * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={heroRef}
        style={{
          width: "100vw",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
          position: "relative",
        }}
      >
        <Group
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marign: 0,
          }}
        >
          <Title
            order={1}
            style={{
              fontSize: "8vw",
              fontWeight: 400,
              letterSpacing: "-0.05em",
            }}
          >
            Welcome
          </Title>
          <Text size="xl" style={{ maxWidth: 700, margin: "0 auto 2rem" }}>
            My name is Adrian Tayeh, I'm a front-end developer based in Sweden. I
            love building clean, animated interfaces and seamless web
            experiences. Currently studying front-end development and always exploring new
            technologies.
          </Text>
        </Group>

        <div ref={imageRef} style={{ margin: "2rem 0" }}>
          <Image
            src={heroImg}
            alt="Hero"
            height={320}
            width={320}
            style={{ display: "block" }}
          />
        </div>
        <svg
          viewBox="0 0 1600 140"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100vw",
            height: 140,
            display: "block",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <ellipse cx="800" cy="140" rx="900" ry="140" fill="#fff" />
        </svg>
      </div>
      <div
        style={{
          background: "#fff",
          color: "#111",
          position: "relative",
          paddingTop: 80,
          paddingBottom: 80,
          paddingLeft: 0,
          paddingRight: 0,
          width: "100vw",
        }}
      >
        <Container size="lg">
          <Title order={2} align="center" mb="xl">
            My Projects
          </Title>
          <Group position="center" spacing="xl" ref={projectsRef}>
            {projects.map((project) => (
              <Card
                key={project.title}
                className="project-card"
                radius="lg"
                style={{
                  width: 350,
                  height: 600,
                  background: "#fff",
                  color: "#111",
                  boxShadow:
                    "0 8px 32px 0 rgba(0,0,0,0.12), 0 1.5px 6px 0 rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card.Section>
                  <Image
                    src={project.image}
                    wdith={"100%"}
                    alt={project.title}
                    className="fade-to-white-img"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </Card.Section>
                <div
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <div style={{ marginTop: "-60px" }} />
                  <Title order={4} mt="md">
                    {project.title}
                  </Title>
                  <Text size="sm" mt="sm">
                    {project.description}
                  </Text>
                </div>
                <Group mt="md">
                  {project.links.map((link) => (
                    <Anchor
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 6, color: "#111"}}
                      aria-label={link.label}
                    >
                      {link.label === "Website" && <CiGlobe size={20} color="#111" />}
                      {link.label === "GitHub" && <FaGithub size={18} color="#111" />}
                    </Anchor>
                  ))}
                </Group>
              </Card>
            ))}
          </Group>
        </Container>
        <Title order={2} align="center" mt="xl">My Tech Stack</Title>
        <TechStackBand />
        <svg
          viewBox="0 0 1600 140"
          style={{
            position: "absolute",
            bottom: -140,
            left: 0,
            width: "100vw",
            height: 140,
            display: "block",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <ellipse cx="800" cy="0" rx="900" ry="140" fill="#fff" />
        </svg>
      </div>
      <footer
        style={{
          color: "#fff",
          textAlign: "center",
          padding: "2rem 0",
          position: "relative",
          marginTop: "140px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text style={{ marginRight: "20px" }}>Adrian Tayeh </Text>{" "}
        <Anchor
          href="https://www.github.com/AdrianTayeh"
          target="_blank"
          style={{ color: "white" }}
        >
          <FaGithub size={20} />
        </Anchor>
      </footer>
    </div>
  );
}
