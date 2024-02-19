import { Character } from "../generated/graphql";

type Props = {
  character: Character;
  onClick: () => void;
};

export default function CharacterCard({
  character: { name, image },
  onClick,
}: Props) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image!} alt={name!} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onClick}>
            Afficher les détails
          </button>
        </div>
      </div>
    </div>
  );
}
