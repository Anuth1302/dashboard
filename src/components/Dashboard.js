import Sidebar from "./Sidebar";
import Header from "./Header";
import MainDashboard from "./MainDashboard";




export default function Dashboard(){

    return <>
    <Sidebar />
    <section>
        <Header />
        <MainDashboard />
    </section>
    </>
}