import CvView from "../components/cvView";


export default function CV() {
    return (
        <div className="flex flex-col items-center justify-center w-50 p-10 mt-20">
        <h2 className="p-4">This my CV</h2>

        <CvView/>
        </div>
    )
}