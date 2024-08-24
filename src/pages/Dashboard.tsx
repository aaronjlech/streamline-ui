import React from "react";
import { Button, Card, CardActions, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { streams } from "../mocks/streams";
export default function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard page of Streamline!!</p>
            <Grid container spacing={2}>
                {streams.map((stream) => (
                    <Grid item xs={4} key={stream.id}>
                        <Card>
                            <CardContent>
                                <h3>{stream.title}</h3>
                                <p>{stream.description}</p>
                            </CardContent>
                            <CardActions>
                                <Link to={`/streams/${stream.id}`}>
                                    <Button size="small" color="primary">
                                        View Details
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                <Grid item xs={4}></Grid>
            </Grid>
        </>
    );
}
