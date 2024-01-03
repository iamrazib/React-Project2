import { Card } from "./components/Card";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Tab from "./components/Tab";
import { Timeline } from "./components/Timeline";

function App() {
  
  const cardData = [
    {
      name: "Nike",
      price: 200,
      desc: "Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. ",
      imageUrl:
        "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5805.png",
    },
    {
      name: "Bata",
      price: 300,
      desc: "The Bata Corporation is a multinational footwear, apparel and fashion accessories manufacturer and retailer of Moravian origin, headquartered in Lausanne, Switzerland. ",
      imageUrl:
        "https://freepngimg.com/thumb/men%20shoes/14-men-shoes-png-image.png",
    },
    {
      name: "Apex",
      price: 400,
      desc: "Apex Retail Chain is a Bangladeshi retailer of shoes, clothing, and other accessories, founded in 1997, serving the Bangladeshi market for over 20 years.",
      imageUrl:
        "https://www.tbsnews.net/sites/default/files/styles/very_big_1/public/images/2022/09/25/das.png",
    },
    {
      name: "Lotto",
      price: 600,
      desc: "Lotto Sport Italia is born in 1973 in the footwear district of Montebelluna, Italy.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0591/4234/0785/products/210732_1EM-02.jpg?v=1677079540",
    },
  ];

  //console.log(cardData);

  return (
    <>
      <h1 className="text-center text-3xl bg-red-200">React-Tailwind-DaisyUI :: Project 2</h1>
      <p className="bg-sky-300 h-2"></p>
      <div className="flex mt-3 space-x-4 justify-center">
        {
          cardData.map((shoe, i) =>(
            <Card cardInfo={shoe} key={i} />
          ))
        }

        {/* <Card cardTitle="Nike" />
        <Card cardTitle="Bata" />
        <Card cardTitle="Apex" />
        <Card cardTitle="Lotto" /> */}

      </div>
      <div className="flex mt-5 mb-5 space-x-4 justify-center">
        <Timeline />
      </div>
      <div className="flex mt-5 mb-7 space-x-4 justify-center">
        <Steps />
      </div>
      <div className="flex mt-5 mb-5 space-x-4 justify-center">
        <Tab />
      </div>
      <div className="flex mt-5 mb-5 space-x-4 justify-center">
        <Stats />
      </div>
    </>
  );
}

export default App
