import { useNavigate, useParams } from "react-router-dom";
import { streams } from "../mocks/streams";
import { Stream } from "../models/stream.model";
import { useEffect, useState } from "react";

function useStream(id?: string) {
    const navigate = useNavigate();
    const [stream, setStream] = useState<Stream>();
    useEffect(() => {
        const selectedStream = streams.find(
            (stream) => stream.id === Number(id)
        );
        if (!selectedStream) {
            navigate("/not-found");
        }
        setStream(selectedStream);
    }, [stream, navigate]);

    return stream;
}
export default function StreamPage() {
    const { id } = useParams();
    const stream = useStream(id);
    return (
        <div>
            <h1>{stream?.title}</h1>
            <p>{stream?.description}</p>
        </div>
    );
}
