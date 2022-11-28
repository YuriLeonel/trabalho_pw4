import Figure from "react-bootstrap/Figure";

export default function Agent() {
  const agents = [
    {
      idAgent: "1",
      name: "Sova",
      description: "The best initiator ever",
      displayIcon: "/img/sova.svg",
      role: "initiator",
    },
    {
      idAgent: "2",
      name: "Chamber",
      description: "The best champion ever",
      displayIcon: "/img/sova.svg",
      role: "Sentinel",
    },
    {
      idAgent: "3",
      name: "Jett",
      description: "The best duelist ever",
      displayIcon: "/img/sova.svg",
      role: "duelist",
    },
  ];
  return (
    <>
      <div className="app-agent-container">
        <ul className="app-justify-between">
          <li>
            <div className="app-agent-card">
              <Figure>
                <Figure.Image
                  width={250}
                  height={250}
                  alt="agent image"
                  src={agents[0].displayIcon}
                />
                <div className="app-justify-around">
                  <Figure.Caption>{agents[0].name}</Figure.Caption>
                  <span>|</span>
                  <Figure.Caption>{agents[0].role}</Figure.Caption>
                </div>
              </Figure>
              <div className="app-agent-description">
                {agents[0].description}
              </div>
            </div>
          </li>
          <li>
            <div className="app-agent-card">
              <Figure>
                <Figure.Image
                  width={250}
                  height={250}
                  alt="agent image"
                  src={agents[1].displayIcon}
                />
                <div className="app-justify-around">
                  <Figure.Caption>{agents[1].name}</Figure.Caption>
                  <span>|</span>
                  <Figure.Caption>{agents[1].role}</Figure.Caption>
                </div>
              </Figure>
              <div className="app-agent-description">
                {agents[1].description}
              </div>
            </div>
          </li>
          <li>
            <div className="app-agent-card">
              <Figure>
                <Figure.Image
                  width={250}
                  height={250}
                  alt="agent image"
                  src={agents[2].displayIcon}
                />
                <div className="app-justify-around">
                  <Figure.Caption>{agents[2].name}</Figure.Caption>
                  <span>|</span>
                  <Figure.Caption>{agents[2].role}</Figure.Caption>
                </div>
              </Figure>
              <div className="app-agent-description">
                {agents[2].description}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
