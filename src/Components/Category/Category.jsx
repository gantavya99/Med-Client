import { useNavigate } from "react-router-dom";
const callouts = [
  {
    name: 'Skin Care',
    imageSrc: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2tpbiUyMGNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D', 
  },
  {
    name: 'Personal Care',
    imageSrc: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uYWwlMjBjYXJlfGVufDB8fDB8fHww', 
  },
  {
    name: 'Mother and Baby Care',
    imageSrc: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhYnl8ZW58MHx8MHx8fDA%3D', 
  },
  {
    name: 'Fitness Supplements',
    imageSrc: 'https://images.unsplash.com/photo-1558017487-06bf9f82613a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMHN1cHBsZW1lbnRzfGVufDB8fDB8fHww', 
  },
  {
    name: 'Elderly Care',
    imageSrc: 'https://images.unsplash.com/photo-1593491205049-7f032d28cf5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  },
  {
    name: 'Ortho Care',
    imageSrc: 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3J0aG9wZWRpY3xlbnwwfHwwfHx8MA%3D%3D', 
  },
  // {
  //   name: 'Weight Loss',
  //   imageSrc: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320646/weight-loss-and-diet-pills-surrounded-by-measuring-tape.jpg', 
  // },
  // {
  //   name: 'Steroids',
  //   imageSrc: 'https://media.istockphoto.com/id/1250471462/photo/bottle-of-steroid-injection-with-a-syringe-on-black-table-and-stainless-steel-background.jpg?s=612x612&w=0&k=20&c=WQW8QSoVjrS7-C3SJ1_sX9xjx9VfcDKskdzl7o9gn50=', 
  // },
  
]

export default function CategoryList() {
  const navigate = useNavigate();

  
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none pb-8">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative mb-4 cursor-pointer">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    onClick={()=>navigate(`/products/${callout.name}`)}
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center cursor-pointer"
                  />
                </div>
                <h3 className="mt-2 text-xl text-black">
                    {callout.name}
                  
                </h3>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
