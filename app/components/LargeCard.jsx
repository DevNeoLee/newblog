import Link from "next/link";
import { formatDateShort } from "../utils/functions";

export default function LargeCard({ title, date, content, link}) {
    return (
        <Link href={link} className="largeCard">
            <div className="countryTitle"><h2>{ title.length > 30 ? title.slice(0, 28) + "..." : title} </h2>
                <p className="countryDate" >{formatDateShort(date)}</p>
                <div className="countryParagraph" >
                <p className="countrySubtitle" >{ content.length > 180 ? content.slice(0, 160) + " ..... " : content}</p>
                </div>
            </div>
        </Link>
    )
}