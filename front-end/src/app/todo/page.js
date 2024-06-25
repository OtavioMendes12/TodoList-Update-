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
          variant="h4"
          component="h1"
          gutterBottom
          style={{
            color: "#000000", 
            marginBottom: "40px", 
            fontFamily: "'Roboto', sans-serif", 
            fontWeight: "bold", 
            fontSize: "50px"
          }}
        >
          TODO LIST
          OTÁVIO MENDES
        </Typography>
      </div>
      <ListaTarefas />
    </>
  );
}
