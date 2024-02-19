type Props = {
  currentPage: number;
  onPrevious: () => void;
  onNext: () => void;
};

export default function Pagination({
  currentPage,
  onPrevious,
  onNext,
}: Props) {
  return (
    <div className="join my-20">
      <button className="join-item btn" onClick={onPrevious}>
        «
      </button>
      <button className="join-item btn">Page {currentPage}</button>
      <button className="join-item btn" onClick={onNext}>
        »
      </button>
    </div>
  );
}
