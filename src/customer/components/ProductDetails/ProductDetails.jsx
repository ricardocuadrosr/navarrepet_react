import { Radio, RadioGroup } from "@headlessui/react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  LinearProgress,
  Rating,
  TextField,
} from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import HomeSectionCard from "../Homesectioncard/HomeSectionCard";
import { useEffect, useState } from "react";
import { felines } from "../../../data/navarretepet";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../state/Cart/Action";
import { findProductsById } from "../../../state/Product/Action";
import {
  createReviewProductId,
  getReviewProductId,
} from "../../../state/Review/Action";
import SendIcon from "@mui/icons-material/Send";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const [newReview, setNewReview] = useState("");
  const reviews = useSelector((state) => state.reviews.reviews);

  const handleAddToCart = () => {
    const data = { productId: params.productId, size: selectedSize.name };
    console.log("size", data);
    dispatch(addItemToCart(data));
    // navigate("/cart");
  };

  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductsById(data));
  }, [dispatch, params.productId]);

  useEffect(() => {
    dispatch(getReviewProductId(params.productId));
    console.log("reviewss", params.productId);
  }, [dispatch, params.productId]);

  const handleReviewSubmit = () => {
    const reviewData = {
      review: newReview,
      productId: params.productId,
      userjwt: jwt,
    };
    console.log("datosssss", reviewData);
    dispatch(createReviewProductId(reviewData));
  };

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <p className="mr-2 text-sm font-medium text-gray-900">
                  {
                    products.products?.category?.parentCategory?.parentCategory
                      ?.name
                  }
                </p>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <p className="mr-2 text-sm font-medium text-gray-900">
                  {products.products?.category?.parentCategory?.name}
                </p>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <p
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {products.products?.title}
              </p>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 pb-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={products.products?.imageUrl}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2x1 px-4 pb-16 sm:px-6 lg:max-w-7x1 lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-x1 font-semibold text-gray-900">
                {products.products?.brand}
              </h1>
              <h1 className="text-lg lg:text-x1 text-gray-900 opacity-60 pt-1">
                {products.products?.title}
              </h1>
              <h1 className="text-lg lg:text-x1 text-gray-900 opacity-60 pt-1">
                Cantidad disponible: {products.products?.quantity}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-x1 text-gray-900 mt-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  S/{products.products?.discountedPrice}
                </span>
                {/* <p className="font-semibold">
                  S/{products.products?.discountedPrice}
                </p> */}
                <p className="opacity-50 line-through">
                  S/{products.products?.price}
                </p>
                <p className="text-green-600 font-semibold">
                  {products.products?.discountPersent}% off
                </p>
              </div>

              {/* Reviews */}
              {/* <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={1.5} readOnly />
                  <p className="opacity-50 text-sm">5698 ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    564 reviews
                  </p>
                </div>
              </div> */}

              <form className="mt-10">
                <Button
                  onClick={handleAddToCart}
                  color="success"
                  variant="contained"
                  sx={{ px: "2rem", py: "1rem" }}
                  disabled={products.products?.quantity === 0}
                >
                  Añadir a carrito
                  <ShoppingCartCheckoutIcon />
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {products.products?.description}
                  </p>
                </div>
              </div>

              {/* <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}

              {/* <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* ratings and reviews */}
        <section>
          <h1 className="font-semibold text-lg pb-4">Comentarios</h1>
          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={12}>
                <div className="space-y-5">
                  <div style={{ marginTop: "20px", display: "flex" }}>
                    <TextField
                      fullWidth
                      placeholder="Escribe tu comentario aquí..."
                      value={newReview}
                      onChange={(e) => setNewReview(e.target.value)}
                    />
                    <IconButton
                      color="primary"
                      style={{ marginLeft: "10px" }}
                      onClick={handleReviewSubmit}
                    >
                      <SendIcon />
                    </IconButton>
                  </div>
                  {reviews.map((review) => (
                    <ProductReviewCard key={review.id} review={review} />
                  ))}
                  {/* {[1,1,1].map((item) => <ProductReviewCard/>)}       */}
                </div>
              </Grid>
              {/* <Grid item xs={5}>
                <h1 className="text-start text-1 font-semibold pb-1">
                  Product Rating
                </h1>
                <div className="flex items-center space-x-3">
                  <Rating value={4.6} precision={0.5} readOnly />
                  <p className="opacity-60">58963 ratings</p>
                </div>
                <Box className="mt-5 space-y-3">
                  <Grid container alignItems={"center"} gap={2}>
                    <Grid item xs={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={2}>
                    <Grid item xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={30}
                        color="info"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={2}>
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={25}
                        color="primary"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={2}>
                    <Grid item xs={2}>
                      <p>Avarage</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={20}
                        color="warning"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={2}>
                    <Grid item xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={15}
                        color="error"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid> */}
            </Grid>
          </div>
        </section>
        {/* similer productws */}
        {/* <section className="pt-10">
            <h1 className="text-start py-5 text-xl font-bold">Similer Products</h1>
            <div className="flex flex-wrap space-y-5">
                {felines.map((item) => <HomeSectionCard product={item}/>)}
            </div>
        </section> */}
      </div>
    </div>
  );
}
