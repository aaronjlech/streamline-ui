import React from "react";
import { Button, Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Login from "../components/Login";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <p>Welcome to the home page of Streamline!!</p>
            <Login />
            <Link to="/dashboard">
                <Button variant="contained" color="primary">
                    Go to Dashboard
                </Button>
            </Link>
        </>
    );
}
