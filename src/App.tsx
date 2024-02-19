import { useQuery } from "@apollo/client";
import { CharactersDocument } from "./generated/graphql";
import CharacterCard from "./components/character-card";
import Pagination from "./components/pagination";
import { useState } from "react";
import CharacterModal from "./components/character-modal";

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeCharacterId, setActiveCharacterId] = useState<string | null>(
    null
  );

  const { data } = useQuery(CharactersDocument, {
    variables: { page: currentPage },
  });

  const handlePrevious = () => {
    if (currentPage <= 1) {
      return;
    }

    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <main className="min-h-screen grid place-items-center">
      <h1 className="text-4xl my-10">Rick & Morty with GraphQL</h1>

      <div className="flex flex-wrap gap-3 items-center justify-center">
        {data &&
          data.characters.results.map((character) => (
            <CharacterCard
              key={character.name}
              character={character}
              onClick={() => {
                setActiveCharacterId(character.id);
                setModalVisible(true);
              }}
            />
          ))}
      </div>

      <Pagination
        currentPage={currentPage}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      <CharacterModal visible={modalVisible} characterId={activeCharacterId} />
    </main>
  );
}
