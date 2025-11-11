import reactLogo from "../assets/react-core-concepts.png";

export default function Header() {
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomConceptAdj()} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}

const randomConceptAdj = () => {
  const conceptAdjectives = ["Crucial", "Fundamental", "Core"];
  return conceptAdjectives[
    Math.floor(Math.random() * conceptAdjectives.length)
  ];
};
