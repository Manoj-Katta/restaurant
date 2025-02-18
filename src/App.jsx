import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Item } from "./components/Item";
import { Navbar } from "./components/Navbar";

export default function App() {
  const itemsData = [
    {
      image:"/3-_ZHMzYmA.png", name: "Food Name 1", price: "10.99"
    },
    {
      image:"/4-toe-Uni1.png", name: "Food Name 1", price: "10.99"
    },
    {
      image:"/5-DKPS6ISq.png", name: "Food Name 1", price: "10.99"
    }
  ]
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-amber-50 to-amber-200">
        <Navbar />
        <Hero />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
         {itemsData.map((item, index) => (
          <Item key={index} image={item.image} name={item.name} price={item.price}></Item>
         ))}
        </div>
    
        <Footer />
        
    </div>
  )
}