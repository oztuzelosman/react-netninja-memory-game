import "./SingleCard.css";

export default function SingleCard({ card, handleChoices, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoices(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
