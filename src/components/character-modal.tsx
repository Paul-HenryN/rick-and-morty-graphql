import { useQuery } from "@apollo/client";
import { CharacterDocument } from "../generated/graphql";

type Props = {
  visible: boolean;
  characterId: string;
};

export default function CharacterModal({
  visible = false,
  characterId,
}: Props) {
  const { data } = useQuery(CharacterDocument, {
    variables: { id: characterId },
  });

  return (
    <dialog id="my_modal_3" className={`modal ${!visible ? "hidden" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
}
