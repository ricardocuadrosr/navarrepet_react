import React from 'react'

const categories = [
    // { name: 'ANIMALES DE COMPAÑÍA', imgSrc: animalesCompaniaBlanco },
    { name: 'ANIMALES DE COMPAÑÍA', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxG0esRJ7ptcjsF8pAoabH_msxWIPsTVVP2Q&s' },
    { name: 'AVES Y CERDOS', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gc9UgV9VfeGYyxOq_woxgIk1foPSiUeOYA&s' },
    { name: 'EQUINOS', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqIG0uvQSWo0n4cN7FQ9U_-ns8hs_Y1UUEw&s' },
    // { name: 'GANADERÍA', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NWaXuo8CN_TJPGHBfJ16IZL4efk64DD4QrUP4LkqFbYvucIcifGvs5s1S-t0hnPaFA&usqp=CAU' },
];

const BannerCategory = () => {
  return (
    <div className="py-4 flex justify-around">
      {categories.map((category, index) => (
        <div 
          key={index}
          className="p-4"
        >
        {/* <div> */}
          <img 
            src={category.imgSrc} 
            alt={category.name} 
            className="w-auto h-auto mb-2 rounded-lg transition duration-300 filter hover:invert"
          />
          {/* <span className="font-semibold">{category.name}</span> */}
        </div>
      ))}
    </div>
  )
}

  
export default BannerCategory