import { Button, Card, Grid, Input, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

function useLogin() {
    const username = useInput();
    const password = useInput();
    const navigate = useNavigate();
    const onLogin = useCallback(() => {
        console.log("login");
        console.log(username.value, password.value);
        navigate("/dashboard");
    }, []);
    return {
        onLogin,
        username,
        password,
    };
}

// TODO: Move this to a separate file
function useInput() {
    const [value, setValue] = useState("");
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);
    return {
        value,
        onChange,
    };
}

export default function Login() {
    const { onLogin, username, password } = useLogin();
    return (
        <Card sx={{ width: "400px", p: 4, m: 4 }}>
            <h3>Login</h3>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <TextField
                        required
                        label="Username"
                        placeholder="Username"
                        type="text"
                        variant="filled"
                        onChange={username.onChange}
                        value={username.value}
                        sx={{ width: "100%" }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        label="Password"
                        type="password"
                        placeholder="password"
                        variant="filled"
                        onChange={password.onChange}
                        value={password.value}
                        sx={{ width: "100%" }}
                    />
                </Grid>
                <Grid item container justifyContent="flex-end">
                    <Button
                        onClick={onLogin}
                        color="primary"
                        variant="contained"
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Card>
    );
}
