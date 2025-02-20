import HomeCard from "./HomeCard";


function Homepage({ data, setuser }) {
  
  
  
  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 min-h-screen flex flex-wrap justify-center items-start gap-10 pt-10">
      {data.map((person, key) => (
        <HomeCard key={key} setuser={setuser} person={person} />
      ))}
    </div>
  );
}

export default Homepage;
