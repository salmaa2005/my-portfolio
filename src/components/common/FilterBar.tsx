interface FilterOption {
  value: string;
  label: string;
}

interface Props {
  label: string;
  options: FilterOption[];
  active: string;
  onSelect: (v: string) => void;
}

export function FilterBar({ label, options, active, onSelect }: Props) {
  return (
    <fieldset className="filter-bar">
      <legend className="visually-hidden">{label}</legend>
      <span className="filter-label" aria-hidden="true">{label}</span>
      <div className="filter-pills">
        <button
          type="button"
          className={"filter-pill" + (active === "all" ? " is-active" : "")}
          onClick={() => onSelect("all")}
        >
          All
        </button>
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={
              "filter-pill" + (active === opt.value ? " is-active" : "")
            }
            onClick={() => onSelect(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
