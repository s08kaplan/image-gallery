import type { NavSubItem } from "../types";
import "./DropdownMenu.css";

interface DropdownMenuProps {
  items: NavSubItem[];
  onSelect: () => void;
}

export default function DropdownMenu({ items, onSelect }: DropdownMenuProps) {
  return (
    <div className="glass-dropdown" role="menu">
      <ul className="glass-dropdown__list">
        {items.map((subItem) => (
          <li key={subItem.label} className="glass-dropdown__item" role="none">
            <a
              href={subItem.href}
              className="glass-dropdown__link"
              role="menuitem"
              onClick={onSelect}
            >
              <span className="glass-dropdown__title">{subItem.label}</span>
              {subItem.description && (
                <span className="glass-dropdown__desc">{subItem.description}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}