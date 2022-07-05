import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Box } from "@mui/system";

const MuiCard = ({ image, category, title, glass, instructions, to, label }) => {
  return (
    <Box sx={{ width: "300px", height: "430px", borderRadius: "20px" }}>
      <Card className="card" sx={{ height: "430px", width: "300px" }}>
        <CardMedia component="img" image={image} sx={{ height: "200px" }} />
        <CardContent>
          <SoftTypography variant="h4">{title}</SoftTypography>
          <SoftTypography variant="h6">{category}</SoftTypography>
          <SoftTypography variant="h6" sx={{ mb: 2 }}>
            {glass}
          </SoftTypography>
          <SoftTypography variant="body2" noWrap>
            {instructions}
          </SoftTypography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Link to={to} className="readmorelink">
            <Button>{label}</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

MuiCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  glass: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MuiCard;
