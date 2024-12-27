import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"
import people from "./data/people.json"
import Clouds from "./components/Clouds"

function App() {

  return (
    <div
      className="bg-[#3366ff] min-h-screen p-6 relative"
      style={{ isolation: 'isolate' }}
    >

      <Clouds />

      <div className="relative" style={{ zIndex: 1 }}>

        <div className="h-fit w-full">
          <Header />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {people?.map((person, index) => (
            <div key={index}>
              <Card
                city={person.city}
                timezone={person.timezone}
                name={person.name}
              />
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Footer />
        </div>

      </div>

    </div>
  )
}

export default App

