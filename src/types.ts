export interface SetterButtonProps {
  localVarName: string;
  buttonText: string;
}

export interface EditableInputProps {
  value: number;
  label: string;
  onSave: (value: number) => void;
}
