import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const notices = [
  {
    title: "¿Cómo saber si mi perro tiene frío?",
    imageUrl:
      "https://www.infobae.com/new-resizer/kYh_1y98hMEb5wFAt3uWieb_3S8=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UO4BFY6OBFDJ7GTWHY4N3SQXJU.jpg",
    description:
      "Aprende a identificar si tu perro tiene frío y cómo protegerlo adecuadamente. Los temblores, encorvarse, y buscar refugio son señales de que necesita más calor. Usa abrigos adecuados y consulta a tu veterinario para ajustar su dieta y cuidados según sus necesidades.",
  },
  {
    title: "Preparativos para recibir a un gato",
    imageUrl:
      "https://elcomercio.pe/resizer/v2/K2OC4CCHK5EDLKPBQ4MF36ELDE.jpg?auth=f4f2a1f4adf37c47bab836778a219f5466911c8da00edc6de63a96997c702bad&width=580&height=330&quality=75&smart=true",
    description:
      "Descubre qué necesitas para recibir a tu nuevo gato adoptado. Platos de agua, alimento adecuado, areneros, rascadores, peines, juguetes, camas y mantas son esenciales. Considera también cortarle las uñas, dar premios y usar mallas para prevenir accidentes.",
  },
  {
    title: "Chequeos para tu mascota",
    imageUrl:
      "https://elcomercio.pe/resizer/v2/W3NPDXXQWVCPDGP55GHL3QJOMI.jpg?auth=908b1af617ac5f9f9ca2895e68af112d2ea23505613a2b0a6ea5c41281f66606&width=580&height=330&quality=75&smart=true",
    description:
      "Descubre los chequeos preventivos anuales esenciales para tu perro. Incluyen ecografía abdominal, cistocentesis, examen de orina, hemograma, perfil hepático y renal, estudio cardiológico, chequeos neurológicos y radiografías. Mantén la salud de tu mascota con estos exámenes recomendados por el veterinario Augusto Baldoceda.",
  },
  // {
  //   title: "¿Comida caliente o fría para tu mascota?",
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ta8eh_ncxZGHrav4q0LSwdPAGLkvNOMN4Q&s",
  //   description:
  //     "Saber que es mejor entre la comida caliente o fría para tu mascota puede ser a veces engañoso. Aunque tanto perros como gatos, tienen un sistema digestivo robusto, es probable que se vean afectados por la temperatura de sus alimentos. Por ejemplo, durante el invierno quizás tus mascotas no quieran la comida fría o a temperatura ambiente; sobre todo los gatos que suelen ser más exigentes.",
  // },
  // {
  //   title: "¿Comida caliente o fría para tu mascota?",
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ta8eh_ncxZGHrav4q0LSwdPAGLkvNOMN4Q&s",
  //   description:
  //     "Saber que es mejor entre la comida caliente o fría para tu mascota puede ser a veces engañoso. Aunque tanto perros como gatos, tienen un sistema digestivo robusto, es probable que se vean afectados por la temperatura de sus alimentos. Por ejemplo, durante el invierno quizás tus mascotas no quieran la comida fría o a temperatura ambiente; sobre todo los gatos que suelen ser más exigentes.",
  // },
  // {
  //   title: "¿Comida caliente o fría para tu mascota?",
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ta8eh_ncxZGHrav4q0LSwdPAGLkvNOMN4Q&s",
  //   description:
  //     "Saber que es mejor entre la comida caliente o fría para tu mascota puede ser a veces engañoso. Aunque tanto perros como gatos, tienen un sistema digestivo robusto, es probable que se vean afectados por la temperatura de sus alimentos. Por ejemplo, durante el invierno quizás tus mascotas no quieran la comida fría o a temperatura ambiente; sobre todo los gatos que suelen ser más exigentes.",
  // },
];

const cardList = [
  {
    img: "https://i.imgur.com/w5HYiQZ.png",
    title: "Growth",
    description:
      "Our group of specialists will collaborate with you to develop a personalized strategy aimed at guiding you toward success through incremental progress.",
  },
  {
    img: "https://i.imgur.com/4wouHGC.png",
    title: "Fitness",
    description:
      "Offering a diverse range of exercises for your selection, you'll have all the resources necessary to attain the peak of your physical fitness.",
  },
  {
    img: "https://i.imgur.com/UdPvj8T.png",
    title: "Diet",
    description:
      "Our team will collaborate with you to craft a tailor-made meal plan designed to assist you in achieving your distinct health objectives.",
  },
];

const HomeSectionNoticeCard = () => {
  const [showFullDescription, setShowFullDescription] = useState({});

  const toggleDescription = (id) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className="p-4">
      <div className="flex flex-col w-full items-start pl-6">
        <h2 className="text-3xl font-bold">NOTICIAS</h2>
        {/* <h2 className="text-[32px] text-gray-800">NOTICIAS</h2> */}
        <hr className="w-full border-t-2 border-gray-300 mt-2" />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {notices.map((notice, id) => (
          <div
            key={id}
            className="card-item-div flex flex-col items-center justify-center w-full sm:w-[48%] lg:w-[30%] min-h-[260px] md:min-h-[340px] mt-12 px-10 py-6 bg-white text-center shadow-2xl rounded-tl-[35px] rounded-br-[35px]"
          >
            <img
              src={notice.imageUrl}
              alt="img_notice"
              className="w-full h-[12rem] mb-4 rounded"
            />
            <p className="text-[24px] font-bold text-gray-800 uppercase mb-7">
              {notice.title}
            </p>
            {/* <p className="text-[15px] text-gray-600 leading-2 w-full">
              {notice.description}
            </p> */}
            <p className="text-[15px] text-gray-600 leading-2 mb-4">
              {showFullDescription[id]
                ? notice.description
                : `${notice.description.slice(0, 100)}...`}
            </p>
            <Button
              color="inherit"
              variant="contained"
              onClick={() => toggleDescription(id)}>
              {showFullDescription[id] ? "Mostrar menos" : "Mostrar más"}
            </Button>
            {/* <button
              variant="filled"
              className="mt-4 text-blue-500 hover:underline"
              onClick={() => toggleDescription(id)}
            >
              {showFullDescription[id] ? "Mostrar menos" : "Mostrar más"}
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSectionNoticeCard;
