import { useState } from "react";
import CardItems from "../../components/CardItems";
import { SectionHome, TitleHome, ItemsCards } from "./style";

function Home() {
  // Lista de itens no estado
  const [items, setItems] = useState([
    { id: 1, img: "/images/feature-1.jpg", title: "Último iPhone com recursos interessantes", price: "R$ 1.500,00" },
    { id: 2, img: "/images/feature-2.jpg", title: "Relógio New Brande com pulseira de couro", price: "R$ 200,00" },
    { id: 3, img: "/images/feature-3.jpg", title: "Fone de ouvido preto de alta qualidade", price: "R$ 500,00" },
    { id: 4, img: "/images/feature-4.jpg", title: "Câmera clássica com recursos incríveis", price: "R$ 1.200,00" },
    { id: 5, img: "/images/feature-5.jpg", title: "Último macbook com novo software", price: "R$ 3.000,00" },
    { id: 6, img: "/images/kids-1.jpg", title: "Sapatos de lã para crianças pequenas", price: "R$ 100,00" },
  ]);

  return (
    <SectionHome>
      <TitleHome>
        <h1>Produtos em destaque</h1>
        <p>Incrível coleção de itens em destaque da semana</p>
      </TitleHome>
      <ItemsCards>
        {items.map((item) => (
          <CardItems
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
          />
        ))}
      </ItemsCards>
    </SectionHome>
  );
}

export default Home;
