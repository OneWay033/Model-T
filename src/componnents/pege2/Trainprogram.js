import { Link } from "react-router-dom";
import AppHeader from "../AppHeader";
import Button from "../Button";


export default function Trainprogram() {
    return (
        <>
            <AppHeader />
            <div>
                <nav className="mt-4">
                    <div className="ml-4">
                            <Button to='/Create-training' className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                สร้างตารางเทรน
                            </Button>
                    </div>
                </nav>
            </div>
        </>
    );
}
