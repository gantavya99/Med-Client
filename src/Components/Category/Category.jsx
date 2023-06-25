import { useNavigate } from "react-router-dom";
const callouts = [
  {
    name: 'Cannabis and Hashish',
    imageSrc: 'https://media.istockphoto.com/id/1187851138/photo/edible-marijuana-for-chronic-pain-treatment-alternative-medicine-diet-and-legal-weed-concept.jpg?s=612x612&w=0&k=20&c=nMcPp19gUtzFZlZXSrGirlbYK1Ofw0msSSh0fl6Z7MU=', 
  },
  {
    name: 'Benzos',
    imageSrc: 'https://media.istockphoto.com/id/644472852/photo/doctor-holding-medicine-valium.jpg?s=612x612&w=0&k=20&c=Iaj-qpJ17cEsCaSV1TDFQ1pnJMF0eWbyTEGvY4fu8pk=', 
  },
  {
    name: 'Dissociatives',
    imageSrc: 'https://media.istockphoto.com/id/1367764186/photo/cooked-heroin-drugs-and-injection-syringe.jpg?s=612x612&w=0&k=20&c=STVpISvZpE-wFBOou6eItFoahjrZ8R9Zrx6PYPMGOTE=', 
  },
  {
    name: 'Opioids',
    imageSrc: 'https://media.istockphoto.com/id/1316346360/photo/oxycodone-opioid-tablets-bottle-and-label-in-extreme-close-up-for-court-battle-in-wv.jpg?s=612x612&w=0&k=20&c=1AGXAAkjxVXb5TaVbN_7MrZKKekuCnXFK-Rg9drKieQ=', 
  },
  {
    name: 'Stimulants',
    imageSrc: 'https://media.istockphoto.com/id/1216315320/photo/junkie-is-using-drugs-using-heroin-in-the-room.jpg?s=612x612&w=0&k=20&c=Kh3nFTTCx54xAS5L8QfKqz18hzEUQu9bP4faRTDxcvg=', 
  },
  {
    name: 'Psychedelics',
    imageSrc: 'https://media.istockphoto.com/id/1034229138/photo/fly-agaric-growing-in-a-forest.jpg?s=612x612&w=0&k=20&c=4IvVwM3nkwH3xjEGXC5kuIUScborf1g8ah6ez-whd_o=', 
  },
  {
    name: 'Weight Loss',
    imageSrc: 'https://m.media-amazon.com/images/I/61KgNIUhBDL._AC_UF1000,1000_QL80_.jpg', 
  },
  
]

export default function CategoryList() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-12 lg:max-w-none lg:pb-16">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} onClick={navigate("/")}className="group relative mb-4">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-2 text-xl text-black">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
