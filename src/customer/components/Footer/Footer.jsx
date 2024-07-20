import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-[#383c44] text-white text-center mt-11"
        container
        sx={{color: "white"}}
      >
        <Grid item xs={12}>
          <img
            className="w-auto h-50px"
            src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihb0OY3BH0n3kNp55XqHjGB8uDURJdquOUAqAKr2-DR2wYiIIUqd4Sf1cfRVdqekpkDu5w0EOmqs7XM-Nv_SE6oQiQrqk4frDA=w1366-h633-rw-v1"
            alt="Your Company"
            style={{ width: '100%', maxHeight: '150px', objectFit: 'contain', marginBottom: '10px' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography className="pb-5" variant="h6">
            Aceptamos Todas Las Tarjetas
          </Typography>
          {/* <Typography className="text-balance">
            <p>
              Haz tus compras fácilmente
              Con total seguridad y privacidad
            </p>
          </Typography> */}
          <div className="px-5 flex m-2">
            <div className="p-1">
              <img className="w-[8rem] h-[3rem] rounded" src="https://www.oroyfinanzas.com/files/2015/05/visa.png" alt="" />
            </div>
            <div className="p-1">
              <img className="w-[8rem] h-[3rem] rounded" src="https://thumbs.dreamstime.com/b/mastercard-logo-vector-illustration-en-el-fondo-blanco-ejemplo-editorial-del-141701054.jpg" alt="" />
            </div>
            <div className="p-1"> 
              <img className="w-[8rem] h-[3rem] rounded" src="https://static-00.iconduck.com/assets.00/amex-icon-1024x643-v5cuc08d.png" alt="" />
            </div>
            {/* <div className="p-3">
              <img className="w-auto rounded" src="https://logos-world.net/wp-content/uploads/2020/08/PayPal-Logo.jpg" alt="" />
            </div> */}

            {/* <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button> */}
          </div>
          {/* <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div> */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="text-center">
          <Typography className="pb-5" variant="h6">
            Servicio al cliente
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Cómo comprar
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
            Preguntas Frecuentes
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
            Políticas de privacidad
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
            Términos y Condiciones
            </Button>
          </div>
          {/* <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Support
            </Button>
          </div> */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="text-center">
          <Typography className="pb-5" variant="h6">
          ¿DONDE ESTAMOS?
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              <LocationOnIcon/>
              Av.Ramos Larrea, Imperial-Cañete
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              <WatchLaterIcon/>
              Lunes - Sábado: 9am - 6pm
            </Button>
          </div>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid> */}
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 Navarretepet | Designed by <a href="https://genuine-dodol-ec0189.netlify.app/">Leisure</a>
          </Typography>
          {/* <Typography variant="body2" component="p" align="center">
            Todos los derechos reservados. Términos y condiciones.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by <a href="https://www.freepik.com">Freepik </a>
            from <a href="https://www.fraticon.com/">www.fraticon.com</a>
          </Typography> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
