import * as React from "react";
import { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { data } from "./data";
import Modal from "@mui/material/Modal";
import "./grid.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 1,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const [open, setOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const openModal = (index) => {
    handleChanges(index);
  };

  const handleClose = () => setOpen(false);

  const handleChanges = (index) => {
    // 1. Make a shallow copy of the items
    let items = [open];
    // 2. Make a shallow copy of the item you want to mutate
    let item = items[index];
    // 3. Replace the property you're intested in
    item = true;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[index] = item;
    // 5. Set the state to our new copy
    setOpen(items);
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: 20 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((product, index) => (
          <Grid item xs={2} sm={4} md={4} key={product.key}>
            <Item>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.content}
                  onClick={() => {
                    openModal(index);
                  }}
                />
                <CardContent>
                  <Modal
                    open={open[index]}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                      "& .MuiBackdrop-root": {
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                      },
                    }}
                  >
                    <Box sx={style}>
                      <div>
                        <img
                          src={product.image}
                          alt={product.content}
                          id="modalPictures"
                        ></img>
                      </div>
                    </Box>
                  </Modal>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

//open an image, image should have a key,
// there should be some component that holds the key
// the main component should use that key passed from that component to render the picture
