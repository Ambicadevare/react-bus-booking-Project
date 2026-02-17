import { useParams } from "react-router-dom";

function TrackBus() {
    const { id } = useParams();

    return (
        <div style={{ padding: "20px" }}>
            <h2>Tracking Bus #{id}</h2>
            <p>Map feature here</p>
        </div>
    )
}
export default TrackBus;
