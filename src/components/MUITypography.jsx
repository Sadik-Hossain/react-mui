import React from "react";
import { Typography } from "@mui/material";
const MUITypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>
      {/*below are also h6 elements */}
      <Typography variant="subtitle1">sub title 1</Typography>
      <Typography variant="subtitle2">sub title 2 </Typography>
      {/* h4 size but h1 element */}
      <Typography variant="h4" component="h1">
        H1 element with h4 size
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        H1 element with h4 size and margin-bottom
      </Typography>
      {/* default font-size of typography is body1 */}
      <Typography variant="body1">
        body 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
        dignissimos pariatur voluptate perferendis corporis ducimus eos,
        inventore accusantium ullam, vel, sequi expedita! In excepturi eaque
        odit dolorem natus voluptate repellat.{" "}
      </Typography>
      <Typography variant="body2">
        body 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci, cum. Id quae excepturi eum? Asperiores corporis sed nisi ipsa
        ad, eligendi laborum veniam, commodi fugiat architecto eveniet dolorum
        obcaecati eaque?{" "}
      </Typography>
    </div>
  );
};

export default MUITypography;
