import { useQuery } from "@apollo/client";
import {
  Character,
  CharactersDocument,
  useCharactersQuery,
} from "./generated/graphql";
import CharacterCard from "./components/character-card";
import Pagination from "./components/pagination";
import { useState } from "react";
import CharacterModal from "./components/character-modal";

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data } = useCharactersQuery({ variables: { page: currentPage } });

  const [activeCharacterId, setActiveCharacterId] = useState<string | null>(
    "1"
  );

  const handlePrevious = () => {
    if (currentPage <= 1) {
      return;
    }

    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const openModal = () => {
    document.getElementById("character-modal")!.showModal();
  };

  return (
    <main className="min-h-screen grid place-items-center">
      <h1 className="text-4xl my-10">Rick & Morty with GraphQL</h1>

      {!data ? (
        <span className="loading loading-spinner loading-xs" />
      ) : (
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {data &&
            data.characters &&
            data.characters.results &&
            data.characters.results.map((character) => (
              <CharacterCard
                key={character.name}
                character={character}
                onClick={() => {
                  setActiveCharacterId(character.id);
                  openModal();
                }}
              />
            ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      <CharacterModal characterId={activeCharacterId} />
    </main>
  );
}
