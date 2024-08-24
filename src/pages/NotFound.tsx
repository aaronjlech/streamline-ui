import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Paper,
} from "@mui/material";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReportTwoToneIcon from "@mui/icons-material/ReportTwoTone";
interface NotFoundProps {
    title?: string;
    message?: string;
}
const DEFAULT_TITLE = "404 Not Found";
const DEFAULT_MESSAGE = "The page you are looking for does not exist.";
export default function NotFound({
    message = DEFAULT_MESSAGE,
    title = DEFAULT_TITLE,
}: NotFoundProps) {
    const navigate = useNavigate();

    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ height: "80vh" }}
        >
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ height: "400px", width: "600px" }}
                component={Card}
                borderRadius={2}
            >
                <ReportTwoToneIcon sx={{ fontSize: "60px" }} color="warning" />
                <h2>{title}</h2>
                <p>{message}</p>
                <Button onClick={goBack} color="primary" variant="contained">
                    Go back
                </Button>
                <p>Or</p>
                <Button
                    color="primary"
                    variant="outlined"
                    component={Link}
                    to="/dashboard"
                >
                    Go to dashboard
                </Button>
            </Grid>
        </Grid>
    );
}
