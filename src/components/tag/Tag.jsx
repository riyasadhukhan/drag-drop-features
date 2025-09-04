import "../tag/Tag.css";

const Tag = ({ tagName, onClick, isSelected }) => {
  console.log(tagName, isSelected);
  return (
    <button
      type="button"
      onClick={onClick}
      className={isSelected ? `selected ${tagName.toLowerCase()}` : "tag"}
    >
      {tagName}
    </button>
  );
};

export default Tag;
