import ButtonGral from "../ButtonGral"
function CardAside() {
    return (<>

        <card>
            <h2>Frontend Mentor</h2>
            <p>Feedback Board</p>
        </card>

        <card>
            {ButtonGral('All')}
            {ButtonGral('Ul')}
            {ButtonGral('UX')}
            {ButtonGral('Enhacement')}
            {ButtonGral('Bug')}
            {ButtonGral('Feature')}
        </card>


        <card>
            <span>Roadmap</span>
            <span>View</span>
            <div>
                <img></img>
                <p>Planed</p>
                <p>2</p>
            </div>
            <div>
                <img></img>
                <p>In-Progress</p>
                <p>3</p>
            </div>
            <div>
                <img></img>
                <p>Live</p>
                <p>1</p>
            </div>
        </card>

    </>)
}

export default CardAside