import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";
import SoftTypography from "components/SoftTypography";
import { Box } from "@mui/system";

const MuiCard = ({ image, category, title, glass, instructions, to, label }) => {
  return (
    <Box sx={{ width: "300px", height: "450px", borderRadius: "20px" }}>
      <Card className="card" sx={{ height: "450px", width: "300px" }}>
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
  image: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  glass: PropTypes.string,
  instructions: PropTypes.string,
  to: PropTypes.string,
  label: PropTypes.string,
};

export default MuiCard;
