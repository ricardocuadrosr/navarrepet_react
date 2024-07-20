import { Avatar, Box, Grid, Rating } from "@mui/material";
import React, { useEffect } from "react";
import { getReviewProductId } from "../../../state/Review/Action";
import { useDispatch, useSelector } from "react-redux";

const ProductReviewCard = ({ review }) => {
  //   const dispatch = useDispatch();
  //   const reviews = useSelector(state => state.reviews.reviews);
  //     const loading = useSelector(state => state.reviews.loading);
  //     const error = useSelector(state => state.reviews.error);

  //   useEffect(() => {
  //     dispatch(getReviewProductId(productId));
  //     console.log("reviewss", productId);
  //   }, [dispatch, productId]);

  console.log("ewviessss", review);
  return (
    <div className="border rounded">
      <Grid container spacing={2} gap={3} alignItems="center" className="py-2">
        <Grid item xs={1}>
          <Box className="px-2">
            <Avatar
              className="text-white"
              sx={{
                width: 56,
                height: 56,
                bgcolor: "grey[700]",
                color: "white",
              }}
            >
              {review.user?.firstName.slice(0, 2).toUpperCase()}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9} className="text-start">
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="font-semibold text-lg">{review.user?.firstName} </p>
              <p className="opacity-70">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <p>{review.review}</p>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9c27b0" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9} className="text-start">
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Raam</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p>nice product, i love this shirt</p>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default ProductReviewCard;
