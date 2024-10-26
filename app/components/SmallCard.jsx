
export default function SmallCard({title, date, content}) {
    return (
        <div className="smallCard">
        <div className="countryTitle"><h2>{ title.length > 60 ? title.slice(0, 60) + "..." : title} </h2>
            <p className="countryDate" >{date}</p>
            <div className="countryParagraph" >
              <p className="countrySubtitle" >{content}</p>
            </div>
        </div>
    </div>
    )
}