import { useLocation } from "react-router-dom";

function Home() {
    let { state: result } = useLocation();
    const data  = result?.data;
    return (
        <div className="table-responsive-md">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">username</th>
                        <th scope="col">password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td scope="row">{data?.username || ''}</td>
                        <td>{data?.password || ''}</td>
                    </tr>
                </tbody>
            </table>
        </div>


    )
}
export default Home;