import batman from '../../images/batman.png';

export function ErrorPage() {

    return (
        <div className="quiz-bg">
            <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', marginTop: '50px'}}>
                <h2>Oups... Cette page n'existe pas !</h2>
                <img src={batman} alt="batman" />
            </div>
        </div>
    )
}