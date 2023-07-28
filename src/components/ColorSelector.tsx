import { useState } from "react";
import type {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactEventHandler,
  SetStateAction,
} from "react";

import type { Color, HexColor } from "../types/colors";

import "./ColorSelector.css";

interface Props<Element = HTMLElement> {
  addColor: (color: Color) => void;
  onSubmit?: ReactEventHandler<Element>;
}

export function ColorSelector({ addColor, onSubmit: doSubmit }: Props) {
  const [name, setName] = useState("");

  // @TODO: augment `hex` state to support multiple color formats.
  const [hex, setHex] = useState<HexColor>("#000000");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    doSubmit?.(event);
    addColor({ name, hex, rating: 0 });
  };

  return (
    // @TODO: re-implement without `form` element and `onSubmit` method.
    <form className="colorSelector" onSubmit={onSubmit}>
      <Name update={setName} />
      <Color update={setHex} />
      <div>
        <button type="submit">Save Color</button>
      </div>
    </form>
  );
}

interface Update {
  // @TODO: implement stricter type than `any`.
  update: Dispatch<SetStateAction<any>>;
}

function Name({ update }: Update) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    update(event.target.value);
  };

  return (
    <div>
      <label htmlFor="colorName">Color name:</label>
      <input
        className="colorName"
        id="colorName"
        name="colorName"
        type="text"
        onChange={onChange}
        required
        placeholder="Enter a unique color name"
        minLength={1}
      />
    </div>
  );
}

function Color({ update }: Update) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    update(event.target.value);
  };

  return (
    <div>
      <label htmlFor="color">Color:</label>
      <input name="color" id="color" type="color" onChange={onChange} />
    </div>
  );
}
