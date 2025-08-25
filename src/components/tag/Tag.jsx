import "../tag/Tag.css";

const Tag = ({ tagName, onclick, isSelected }) => {
  console.log(tagName, isSelected);
  return (
    <button
      type="button"
      onClick={onclick}
      className={isSelected ? `selected ${tagName.toLowerCase()}` : "tag"}
    >
      {tagName}
    </button>
  );
};

export default Tag;
