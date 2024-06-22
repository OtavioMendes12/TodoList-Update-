'use client'

import ListaTarefas from "../../components/ListaTarefas/listaTarefas";
import { Typography } from "@mui/material";
import '@fontsource/roboto/700.css';
import ButtonCreate from "../../components/ButtonCreate/ButtonCreate";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <>
      <div style={{height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
        <Typography variant="h4">Todo List</Typography>
        <Typography variant="h6">{formatDate(dateTime)} {formatTime(dateTime)}</Typography>
      </div>
      <ListaTarefas />
    </>
  );
}