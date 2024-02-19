import { useQuery } from "@apollo/client";
import { CharacterDocument } from "../generated/graphql";

type Props = {
  characterId: string | null;
};

export default function CharacterModal({ characterId }: Props) {
  const { data } = useQuery(CharacterDocument, {
    variables: { id: characterId },
  });

  return (
    <dialog id="character-modal" className="modal">
      {!data ? (
        <span className="loading loading-spinner loading-xs" />
      ) : (
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img src={data.character.image} alt="" />
          <h3 className="text-3xl my-5">{data.character.name}</h3>
          <p>
            <b>Species:</b> {data.character.species}
          </p>
          <p>
            <b>Gender:</b> {data.character.gender}
          </p>
          <p>
            <b>Status:</b> {data.character.status}
          </p>
        </div>
      )}
    </dialog>
  );
}
