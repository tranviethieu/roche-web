export interface PropFilterSelect {
  listFilter: { value: string; label: string }[];
  name: string;
  label?: string;
  query: string;
  isSearch?: boolean;
  disabled?: boolean;
  backgroundBlue?: boolean;
  color?: boolean;
}
