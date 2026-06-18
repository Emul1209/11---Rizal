
import classmateData from './assets/data.json'; 
import teacher from './assets/abegail-ordonio.jpg'
function Memories() {
  return(
    <div className="min-h-screen bg-zinc-100 flex flex-col items-center p-8">
    {/* Main Heading outside the card grid */}
    <h1 className="text-3xl font-bold mb-8 text-zinc-800">11 - Rizal</h1>
    <div className='w-full max-w-6xl px-4 mt-8'>
      <div className="bg-[#722F37] text-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform hover:scale-105">
        <img 
              src= {teacher}
              alt= "Allen Alarcon"
              className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-md mb-4"
            />
          <h2 className="text-2xl font-bold tracking-wide">Mrs. Allen Alarcon</h2>
          <p className="text-amber-300 font-medium text-sm mt-1 uppercase tracking-wider">Adviser</p>
          <div className="w-12 h-[2px] bg-white/20 my-4"></div>
          <p className="text-rose-100 italic font-light text-base leading-relaxed">
            "Hello"
          </p>
      </div>
    </div>
    
    
    {/* 2. Responsive Card Grid Container */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl px-4 mt-8">
      
      {/* 3. Map through the data array */}
      {classmateData.map((person) => (
        
        /* 4. Card Container: Wine-red background, rounded corners, shadow, flex layout */
        <div 
          key={person.id} 
          className="bg-[#722F37] text-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform hover:scale-105"
        >
          
          {/* 5. Image: Circular profile, fixed dimensions, object-cover to prevent stretching */}
          <img 
            src={person.photo} 
            alt={person.name} 
            className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-md mb-4"
          />
          
          {/* 6. Text Elements: High contrast colors for readability */}
          <h2 className="text-2xl font-bold tracking-wide">{person.name}</h2>
          <p className="text-amber-300 font-medium text-sm mt-1 uppercase tracking-wider">{person.role}</p>
          
          {/* Divider line to separate info from the quote */}
          <div className="w-12 h-[2px] bg-white/20 my-4"></div>
          
          <p className="text-rose-100 italic font-light text-base leading-relaxed">
            "{person.quote}"
          </p>
          
        </div>
        
      ))}

    </div>
  </div>
  );
}

export default Memories;
