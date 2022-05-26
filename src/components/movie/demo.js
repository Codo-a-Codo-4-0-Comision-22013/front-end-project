import { useParams } from "react-router-dom";

function Demo() {

    const params = useParams();

    return (<div>
        <span>El movie ID es: {params.id}</span>
    </div>);
}

export default Demo;