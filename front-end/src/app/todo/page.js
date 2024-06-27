"use client";

import ListaTarefas from "../../components/ListaTarefas/listaTarefas";
import { Typography } from "@mui/material";
import "@fontsource/roboto/700.css";
import CustomButton from "../../components/CustomButton/CustomButton";

export default function Home() {
  return (
    <>
      <div
        style={{
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          style={{
            color: "green", 
            marginRight: '60%', 
            fontFamily: "'Roboto', sans-serif", 
            fontWeight: "bold", 
            fontSize: "90px"
          }}
        >
          TODO LIST
          <br />
          TODO LIST
        </Typography>
      </div>
      <ListaTarefas />
    </>
  );
}
