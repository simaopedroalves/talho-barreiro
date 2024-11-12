import "./About.css";

export function About() {
  return (
    <div className="about">
      <h1 id="Sobre">Sobre nós</h1>

      <div className="imageDiv">
        <img
          src="./Images/frente-de-loja.jpg"
          alt="Frente de Loja do Talho Barreiro"
          className="aboutImage"
        />
      </div>

      <div>
        <p>
          O Talho do Barreiro destingue-se pelo atendimento personalizado e
          focado nas necessidades do cliente.
        </p>
        <p>
          Desde 1986 que o foco está em bem servir. Apostámos numa seleção
          rigorosa das nossas carnes e na Segurança alimentar.
        </p>
        <p>
          Visite-nos e comprove você mesmo que os nossos produtos se distinguem
          do mercado local.
        </p>
      </div>
    </div>
  );
}
